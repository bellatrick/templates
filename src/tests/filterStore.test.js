import {
  reducer,
  search,
  getData,
  addCategory,
  addDate,
  addOrder,
} from "../store/filter";

const Originaldata = [
  { name: "Samuel Busayo", category: ["Health"], created: "10-04-2022" },
  { name: "Cecilia Thomas", category: ["Agriculture"], created: "06-04-2022" },
  {
    name: "Balogun Busayo",
    category: ["Entertainment"],
    created: "20-04-2022",
  },
];

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    value: {
      category: "All",
      order: "",
      date: "",
      data: false,
      constantData: [],
      error: false,
      search: "",
    },
  });
});

test("It should be able to search for keyword in data", () => {
  const previousState = {
    value: {
      data: Originaldata,
      constantData: Originaldata,
      error: false,
      search: "",
      category: "All",
      order: "",
      date: "",
    },
  };
  expect(reducer(previousState, search("Busayo"))).toEqual({
    value: {
      data: [
        { name: "Samuel Busayo", category: ["Health"], created: "10-04-2022" },

        {
          name: "Balogun Busayo",
          category: ["Entertainment"],
          created: "20-04-2022",
        },
      ],
      constantData: Originaldata,
      error: false,
      search: "Busayo",
      category: "All",
      order: "",
      date: "",
    },
  });
});

test("It should be able to get data from API", () => {
  const previousState = {
    value: {
      data: [],
      constantData: [],
      error: false,
      search: "",
      category: "All",
      order: "",
      date: "",
    },
  };
  expect(
    reducer(previousState, getData({ data: Originaldata, isError: false }))
  ).toEqual({
    value: {
      data: Originaldata,
      constantData: Originaldata,
      error: false,
      search: "",
      category: "All",
      order: "",
      date: "",
    },
  });
});

test("It should be able to sort data alphabethically from the api", () => {
  const previousState = {
    value: {
      data: Originaldata,
      constantData: Originaldata,
      order: "",
      error: false,
      search: "",
      category: "All",
      date: "",
    },
  };

  expect(reducer(previousState, addOrder("Ascending order"))).toEqual({
    value: {
      data: [
        {
          name: "Balogun Busayo",
          category: ["Entertainment"],
          created: "20-04-2022",
        },
        {
          name: "Cecilia Thomas",
          category: ["Agriculture"],
          created: "06-04-2022",
        },
        { name: "Samuel Busayo", category: ["Health"], created: "10-04-2022" },
      ],
      constantData: Originaldata,
      order: "Ascending order",
      error: false,
      search: "",
      category: "All",
      date: "Default",
    },
  });
});

test("It should be able to filter through categories", () => {
  const previousState = {
    value: {
      data: Originaldata,
      constantData: Originaldata,
      order: "",
      error: false,
      search: "",
      category: "All",
      date: "",
    },
  };

  expect(reducer(previousState, addCategory("Health"))).toEqual({
    value: {
      data: [
        { name: "Samuel Busayo", category: ["Health"], created: "10-04-2022" },
      ],
      constantData: Originaldata,
      order: "Default",
      error: false,
      search: "",
      category: "Health",
      date: "Default",
    },
  });
});

test("It should be able to sort dates from the api", () => {
  const previousState = {
    value: {
      data: Originaldata,
      constantData: Originaldata,
      order: "",
      error: false,
      search: "",
      category: "All",
      date: "",
    },
  };

  expect(reducer(previousState, addDate("Ascending order"))).toEqual({
    value: {
      data: [
        {
          name: "Cecilia Thomas",
          category: ["Agriculture"],
          created: "06-04-2022",
        },
        { name: "Samuel Busayo", category: ["Health"], created: "10-04-2022" },
        {
          name: "Balogun Busayo",
          category: ["Entertainment"],
          created: "20-04-2022",
        },
      ],
      constantData: Originaldata,
      order: "Default",
      error: false,
      search: "",
      category: "All",
      date: "Ascending order",
    },
  });
});
