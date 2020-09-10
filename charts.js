document.querySelectorAll("ul li button").forEach((button) => {
  button.addEventListener("click", () => {
    chartType = button.value;
    temp = document.querySelector(`.charts .${chartType}`);
    temp.classList.toggle("hidden");
  });
});

let config = {
  displayModeBar: false,
};

globalFont = {
  family: "Arial",
  size: 18,
};

//*********lINE CHART********

//DATA
let line1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  y: [4, 10, 11, 16, 26, 32, 33, 34, 36, 37, 45, 55, 62, 65, 66, 67, 68, 78, 81, 97],
  mode: `lines`,
  name: `First line`,
  line: {
    color: "rgb(0, 0, 0)",
  },
};

let line2 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  y: [11, 14, 17, 19, 20, 23, 26, 30, 32, 33, 44, 46, 58, 61, 63, 65, 75, 76, 80, 91],
  mode: `lines`,
  name: `Second line`,
  line: {
    color: "rgb(0,191,255)",
  },
};
let line3 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  y: [1, 17, 20, 47, 62, 65, 67, 71, 94, 101, 105, 115, 122, 124, 128, 130, 139, 141, 144, 147],
  mode: `lines`,
  name: `Third line`,
};

let line4 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  y: [4, 5, 10, 16, 25, 34, 37, 50, 56, 61, 63, 66, 69, 71, 85, 86, 97, 105, 115, 117],
  mode: `lines`,
  name: `Fourth line`,
};

let lineData = [line1, line2, line3, line4];

//LAYOUT
let lineLayout = {
  title: "Line graph",
  xaxis: {
    title: "x",
  },
  yaxis: {
    title: "y",
  },
  font: globalFont,
};

//FUNCTIONS
lineDiv = document.querySelector(".charts .line");
Plotly.newPlot(lineDiv, lineData, lineLayout, config);

//*********DONUT CHART********

//DATA
let pieData = [
  {
    values: [16, 15, 12, 6, 5, 4, 42],
    labels: ["Tel aviv", "Beer Sheva", "Jerusalem", "Haifa", "Ashdod", "Netanya", "Rest"],
    hoverinfo: "label+percent",
    hole: 0.4,
    type: "pie",
    textinfo: "auto",
  },
];

//LAYOUT
let pieLayout = {
  title: "City population in israel",
  font: globalFont,
  sort: true,
  legend: {
    x: -0.5,
  },
};

//FUNCTIONS
pieDiv = document.querySelector(".charts .donut");
Plotly.newPlot(pieDiv, pieData, pieLayout, config);

//*******STACKED BAR *******

//DATA
let xData = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

let sbarData1 = {
  y: [18, 22, 53, 44, 22, 71, 83, 55, 49, 77, 22],
  x: xData,
  name: "Group A",
  type: "bar",
  marker: {
    color: "rgba(58,200,225,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1,
    },
  },
};

let sbarData2 = {
  y: [12, 11, 33, 22, 11, 18, 19, 30, 15, 9, 28],
  x: xData,
  name: "Group B",
  type: "bar",
  marker: {
    color: "#5dade2",
    line: {
      color: "rgb(8,48,107)",
      width: 1,
    },
  },
};

sbarData = [sbarData1, sbarData2];

//LAYOUT
let sbarLayout = {
  title: "Stacked Bar Example",
  barmode: "stack",
  font: globalFont,
};

//FUNCTIONS
sbarDiv = document.querySelector(".charts .stackedBar");
Plotly.newPlot(sbarDiv, sbarData, sbarLayout, config);

//*******BAR CHART *******

//DATA
let barData = [
  {
    x: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "mm", "nn", "ll"],
    y: [10, 28, 114, 76, 37, 85, 74, 20, 101, 34, 141, 115, 149, 6, 118, 146, 90, 4, 14, 102, 41, 82, 59, 125, 99, 111, 87, 121, 145],
    name: "Group A",
    type: "bar",
    marker: {
      color: "#3498db",
      line: {
        color: "rgb(8,48,107)",
        width: 1,
      },
    },
  },
];

//LAYOUT
let barLayout = {
  title: "Normal Bar Example",
  font: globalFont,
};

//FUNCTIONS
barDiv = document.querySelector(".charts .bar");
Plotly.newPlot(barDiv, barData, barLayout, config);
