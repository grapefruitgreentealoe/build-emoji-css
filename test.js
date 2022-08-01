async function test() {
  const { data } = await axios.get("./build/emoji_list.json");
  const div = document.querySelector(".font-icon-list");
  const type = "emoji";

  Object.keys(data).forEach((category) => {
    data[category].forEach((icon_class) => {
      div.innerHTML +=
        '<div class="item _item inline-blocked ' +
        type +
        '" data-icon="' +
        icon_class +
        '" data-category="' +
        type +
        '"><a href="javascript:;"><i class="' +
        type +
        " " +
        icon_class +
        '"></i></a></div>';
    });
  });

  return emoji_list;
}

test();
