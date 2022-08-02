async function test() {
  const { data } = await axios.get("./build/emoji_list.json");
  const div = document.querySelector(".font-icon-list");
  const type = "emoji";

  Object.keys(data).forEach((category) => {
    const wrapper = document.createElement("div");

    wrapper.innerHTML += `<p style="position : sticky;top: 0px;background-color:white;">${category}</p>`;
    data[category].forEach((icon_class) => {
      wrapper.innerHTML +=
        '<div class="item _item inline-blocked ' +
        type +
        '" data-icon="' +
        icon_class +
        '" data-category="' +
        type +
        '" style="display:inline-block' +
        '"><a href="javascript:;"><i class="' +
        type +
        " " +
        icon_class +
        '"></i></a></div>';
    });
    div.append(wrapper);
  });
}

test();
