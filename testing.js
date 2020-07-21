// const urlFixer = (string) => {
//   if (string[1] && string[2] === "t") {
//     let firstPart = string.slice(0, 1);
//     let lastPart = string.slice(3, string.length);
//     let joinLinks = `${firstPart}xx${lastPart}`;
//     return joinLinks;
//   }
// };

// console.log(urlFixer("http://www.ptp.com"));

// let arr = [
//   { name: "leo", age: 33 },
//   { name: "Leonie", age: 28 },
// ];
// let value = "leo";
// let num = 0;

// for (var i = 0; i < arr.length; i++) {
//   let arrVal = arr[i].name;
//   if (arrVal === value) {
//     console.log(arrVal);
//     num++;
//   }
// }
// console.log(value, num);
// function hasValue(obj, key, value) {
//   return obj.hasOwnProperty(key) && obj[key] === value;
// }
// var test = [
//   { name: "joey", age: 15 },
//   { name: "hell", age: 12 },
// ];
// console.log(
//   test.some(function (boy) {
//     return hasValue(boy, "age", 12);
//   })
// );
// let payload = {
//   title: "leo",
//   num: 0,
// };

// let data = payload;

// displayDatabase = (data) => {
//   function removeD(originalArray, prop) {
//     let newArray = [];
//     let lookupObject = {};
//     for (var i in originalArray) {
//       lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for (i in lookupObject) {
//       newArray.push(lookupObject[i]);
//     }

//     return newArray;
//   }
// };

// console.log(displayDatabase(data));

// function getLabels(keyword) {
// 	const allLabels = ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'];
//   const result = allLabels
//     .filter(function(x) {
//       return x.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
//     });
//   return result;
// }

import React from "react";

class Labels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLabels: ["NextActions", "Someday_Actions", "Costco", "Alexa"],
    };
    this.result = this.result.bind(this);
  }
  result = () => {
    console.log("works");
  };
  render() {
    <button onClick={this.result}>click</button>;
  }
}
