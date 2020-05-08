const { address } = require("./index");

// (function () {
//   address.getCityMunBrgy("072201").then((p) => console.log(p));
// })();

// address.getCityMunBrgy("030805").then((res) => console.log(res));

(function () {
  address.getCityMunBrgy("072201").then((res) => console.log(res));
})();
