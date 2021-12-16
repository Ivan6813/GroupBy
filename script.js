const heroes = [
    {id: 1, universe: "marvel", name: "Spider Man"},
    {id: 2, universe: "marvel", name: "Iron Man"},
    {id: 3, universe: "dc", name: "Aqua Man"},
    {id: 4, universe: "dc", name: "Bat Man"},
    {id: 5, universe: "marvel", name: "Hulk"}
];

function groupBy(array, key) {
  if (key === undefined) return console.log("Error: enter key");
  if (array === undefined || !Array.isArray(array) || array.length === 0) return console.log("Error: array not passed");

  const result = {};
  const keyCheck = Object.keys(array[0]).includes(key);

  if (keyCheck) {
    const arrValuesKey = array.map(item => item[key]);
    const arrKeysObj = [...new Set(arrValuesKey)];

    for (let i = 0; i < arrKeysObj.length; i++) {
      result[arrKeysObj[i]] = array.filter(item => item[key] === arrKeysObj[i]);
    }
  } else {
    return console.log(result);
  }
  console.log(result);
}

groupBy(heroes, "universe");
