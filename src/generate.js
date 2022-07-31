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
    let type;
    categories.map(({ id, emojis }) => {
      if (emojis.includes(key) && typeof id != undefined) {
        type = id;
      }
    });
    sortedData[type].push({
      type,
      unicode: `\\${emojis[key].skins[0].unified}`,
      id: emojis[key].id,
    });
  });

  return sortedData;
}

module.exports = {
  emoji: makeEmojiData,
};
