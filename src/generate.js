const axios = require("axios");

const fetchTodo = async () => {
  try {
    const res = await axios.get(
      "https://cdn.jsdelivr.net/npm/@emoji-mart/data"
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

// For the folowing code to work, it must be placed inside a async  function as well
async function makeEmojiData() {
  let {
    data: { categories, emojis },
  } = await fetchTodo();
  let sortedData = {};
  categories.map(({ id, emojis }) => {
    sortedData[id] = [];
  });

  Object.keys(emojis).map(function (key) {
    //모든 이모지들의 집합으로 보임.
    if (emojis[key].version <= 13) {
      categories.map(({ id, emojis, version }) => {
        if (emojis.includes(key) && typeof id != undefined) {
          type = id;
        } // 이모지가 key가 있으면 type을 id로 둔다..
      });
      let fixedUnicode = emojis[key].skins[0].unified.replaceAll("-", "\\");

      sortedData[type].push({
        type,
        unicode: fixedUnicode,
        id: emojis[key].id,
      });
    }
  });

  return sortedData;
}

module.exports = {
  emoji: makeEmojiData,
};
