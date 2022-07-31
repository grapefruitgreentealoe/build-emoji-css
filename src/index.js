const emoji = require("./generate").emoji;
const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");

async function write(emojis) {
  let emoji_object = {};
  let filename = path.join(__dirname, "..", "/sass/emojis/_all.scss");
  let dirname = path.join(__dirname, "..", "/sass/emojis");
  if (!fs.existsSync(dirname))
    fs.mkdirSync(dirname, { recursive: true }, (err) => {});
  let items = Object.keys(emojis);
  save_template(
    filename,
    fs
      .readFileSync(path.join(__dirname, "..", "template/_imports.mustache"))
      .toString(),
    {
      items,
    }
  );

  items.forEach(async (element) => {
    dirname = path.join(__dirname, "..", "/sass/emojis/", element);
    emoji_object[element] = [];
    if (!fs.existsSync(dirname))
      fs.mkdirSync(dirname, { recursive: true }, (err) => {});

    filename = path.join(
      __dirname,
      "..",
      "/sass/emojis/",
      element,
      "/_all.scss"
    );
    emojis[element].forEach(({ unicode, id }) => {
      let meta_regex = /[\*|\?|\+|\^|\.|\$|\[\]|\||\\|\{\}|\(\)]/;
      let fixedId = id
        .split("")
        .map((x) => x.replace(meta_regex, `\\${x}`))
        .join("");
      emoji_object[element].push("emoji-" + fixedId);
      save_template(
        filename,
        fs
          .readFileSync(path.join(__dirname, "..", "template/_emojis.mustache"))
          .toString(),
        { items: { name: fixedId, code: unicode } }
      );
    });
  });
  filename = path.join(__dirname, "..", "build/emoji_list.js");
  dirname = path.join(__dirname, "..", "build");
  fs.mkdirSync(dirname, { recursive: true }, (err) => {});
  fs.writeFileSync(
    filename,
    JSON.stringify(emoji_object),
    { recursive: true },
    (err) => {
      if (err) throw err;
    }
  );
}

function save_template(filename, template, items) {
  const template_text = Mustache.render(template, items);
  if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, template_text, { recursive: true }, (err) => {
      if (err) throw err;
    });
  } else {
    fs.appendFileSync(filename, template_text, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
}

async function run() {
  const emojis = await emoji();
  write(emojis);
}

run();
