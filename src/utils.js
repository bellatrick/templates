export const handleDate = (arr, payload, constantData) => {
  let newData;
  const data = [...arr];
  if (payload.split(" ")[0] === "Default") {
    newData = constantData;
  } else if (payload.split(" ")[0] === "Ascending") {
    newData = data.sort(
      (a, b) => Date.parse(a.created) - Date.parse(b.created)
    );
  } else if (payload.split(" ")[0] === "Descending") {
    newData = data.sort(
      (a, b) => Date.parse(b.created) - Date.parse(a.created)
    );
  }

  return newData;
};
export const handleOrder = (arr, payload, constant) => {
  let newData;
  const data = [...arr];
  if (payload.split(" ")[0] === "Default") {
    newData = constant;
  } else if (payload.split(" ")[0] === "Ascending") {
    newData = data.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (payload.split(" ")[0] === "Descending") {
    newData = data.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  }
  return newData;
};

export function roundUpOverQuarter(num) {
  num = Math.floor((num*100))/100;
  return Math.ceil(num - 0.01);
}