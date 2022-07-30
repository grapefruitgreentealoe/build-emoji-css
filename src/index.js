const emoji = require("./generate").emoji;
const Mustache = require("mustache");
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require('path');

async function write(emojis) {
  //   console.log(emojis);
  let filename = path.join(__dirname, '..', "/sass/emojis/_all.scss");
  let dirname = path.join(__dirname, '..', "/sass/emojis");
  if (!fs.existsSync(dirname)) await mkdirp(dirname);
  let items = Object.keys(emojis);
  save_template(
    filename,
    `{{#items}}@import "{{.}}/all";
  {{/items}}`,
    {
      items,
    }
  );

  items.forEach(async (element) => {
    dirname = path.join(__dirname, '..', "/sass/emojis/", element);
    if (!fs.existsSync(dirname)) await mkdirp(dirname);
    emojis[element].forEach(({ type, unicode, id }) => {
      filename = path.join(__dirname, '..',"/sass/emojis/",type,"/_all.scss");
      save_template(
        filename,
        `{{#items}}.emoji-{{name}}:before { content: '\{{code}}'; }{{/items}}
        `,
        { items: { name: id, code: unicode } }
      );
    });
  });
}

function save_template(filename, template, items) {
  const template_text = Mustache.render(template, items);
  console.log(template_text);
  if (!fs.existsSync(filename)) {
    fs.writeFile(filename, template_text, (err) => {
      if (err) throw err;
    });
  } else {
    fs.appendFile(filename, template_text, (err) => {
      if (err) throw err;
    });
  }
}
async function run() {
  const emojis = await emoji();
  //   console.log("mkscss:", emojis);
  write(emojis);
}

run();
