/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/games/word";
exports.ids = ["pages/games/word"];
exports.modules = {

/***/ "./pages/games/word.js":
/*!*****************************!*\
  !*** ./pages/games/word.js ***!
  \*****************************/
/***/ (() => {

eval("function wordman(word) {\n    let wrong = 0;\n    const stages = [\n        \"\",\n        \"______      \",\n        \"     /      \",\n        \"  | /       \",\n        \"  /         \",\n        \" /          \",\n        \"   |        \",\n        \"_______     \",\n        \"   |        \",\n        \" / |       \",\n        \"/  |       \"\n    ];\n    const rletters = [\n        ...word\n    ];\n    const board = new Array(word.length).fill(\"_\");\n    let win = false;\n    console.log(\"ゲームへようこそ!\");\n    while(wrong < stages.length - 1){\n        console.log(\"\\n\");\n        const msg = \"1文字を予想してください\";\n        const char = prompt(msg);\n        if (rletters.includes(char)) {\n            const cind = rletters.indexOf(char);\n            board[cind] = char;\n            rletters[cind] = \"$\";\n        } else {\n            wrong++;\n        }\n        console.log(board.join(\" \"));\n        const e = wrong + 1;\n        console.log(stages.slice(0, e).join(\"\\n\"));\n        if (!board.includes(\"_\")) {\n            console.log(\"あなたの勝ち!\");\n            console.log(board.join(\" \"));\n            win = true;\n            break;\n        }\n    }\n    if (!win) {\n        console.log(stages.slice(0, wrong + 1).join(\"\\n\"));\n        console.log(`あなたの負け! 正解は ${word}.`);\n    }\n}\nwordman(\"boy\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lcy93b3JkLmpzPzAwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiICAgIFxuZnVuY3Rpb24gd29yZG1hbih3b3JkKSB7XG4gIGxldCB3cm9uZyA9IDBcbiAgY29uc3Qgc3RhZ2VzID0gW1wiXCIsXG4gICAgICAgICAgICAgIFwiX19fX19fICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiICAgICAvICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiICB8IC8gICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiICAvICAgICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiIC8gICAgICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiICAgfCAgICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiX19fX19fXyAgICAgXCIsXG4gICAgICAgICAgICAgIFwiICAgfCAgICAgICAgXCIsXG4gICAgICAgICAgICAgIFwiIC8gfCBcXCAgICAgIFwiLFxuICAgICAgICAgICAgICBcIi8gIHwgIFxcICAgICBcIixcbiAgICAgICAgICAgIF1cbiAgY29uc3QgcmxldHRlcnMgPSBbLi4ud29yZF07XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KHdvcmQubGVuZ3RoKS5maWxsKFwiX1wiKTtcbiAgbGV0IHdpbiA9IGZhbHNlO1xuICBjb25zb2xlLmxvZyhcIuOCsuODvOODoOOBuOOCiOOBhuOBk+OBnSFcIik7XG5cbiAgd2hpbGUgKHdyb25nIDwgc3RhZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlxcblwiKTtcbiAgICBjb25zdCBtc2cgPSBcIjHmloflrZfjgpLkuojmg7PjgZfjgabjgY/jgaDjgZXjgYRcIjtcbiAgICBjb25zdCBjaGFyID0gcHJvbXB0KG1zZyk7XG4gICAgaWYgKHJsZXR0ZXJzLmluY2x1ZGVzKGNoYXIpKSB7XG4gICAgICBjb25zdCBjaW5kID0gcmxldHRlcnMuaW5kZXhPZihjaGFyKTtcbiAgICAgIGJvYXJkW2NpbmRdID0gY2hhcjtcbiAgICAgIHJsZXR0ZXJzW2NpbmRdID0gJyQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHdyb25nKys7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJvYXJkLmpvaW4oXCIgXCIpKTtcbiAgICBjb25zdCBlID0gd3JvbmcgKyAxO1xuICAgIGNvbnNvbGUubG9nKHN0YWdlcy5zbGljZSgwLCBlKS5qb2luKFwiXFxuXCIpKTtcbiAgICBpZiAoIWJvYXJkLmluY2x1ZGVzKFwiX1wiKSkge1xuICAgICAgY29uc29sZS5sb2coXCLjgYLjgarjgZ/jga7li53jgaEhXCIpO1xuICAgICAgY29uc29sZS5sb2coYm9hcmQuam9pbihcIiBcIikpO1xuICAgICAgd2luID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghd2luKSB7XG4gICAgY29uc29sZS5sb2coc3RhZ2VzLnNsaWNlKDAsIHdyb25nICsgMSkuam9pbihcIlxcblwiKSk7XG4gICAgY29uc29sZS5sb2coYOOBguOBquOBn+OBruiyoOOBkSEg5q2j6Kej44GvICR7d29yZH0uYCk7XG4gIH1cbn1cblxud29yZG1hbihcImJveVwiKVxuIl0sIm5hbWVzIjpbIndvcmRtYW4iLCJ3b3JkIiwid3JvbmciLCJzdGFnZXMiLCJybGV0dGVycyIsImJvYXJkIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwid2luIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImNoYXIiLCJwcm9tcHQiLCJpbmNsdWRlcyIsImNpbmQiLCJpbmRleE9mIiwiam9pbiIsImUiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBU0EsUUFBUUMsSUFBSSxFQUFFO0lBQ3JCLElBQUlDLFFBQVE7SUFDWixNQUFNQyxTQUFTO1FBQUM7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ1gsTUFBTUMsV0FBVztXQUFJSDtLQUFLO0lBQzFCLE1BQU1JLFFBQVEsSUFBSUMsTUFBTUwsS0FBS00sTUFBTSxFQUFFQyxJQUFJLENBQUM7SUFDMUMsSUFBSUMsTUFBTSxLQUFLO0lBQ2ZDLFFBQVFDLEdBQUcsQ0FBQztJQUVaLE1BQU9ULFFBQVFDLE9BQU9JLE1BQU0sR0FBRyxFQUFHO1FBQ2hDRyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxNQUFNO1FBQ1osTUFBTUMsT0FBT0MsT0FBT0Y7UUFDcEIsSUFBSVIsU0FBU1csUUFBUSxDQUFDRixPQUFPO1lBQzNCLE1BQU1HLE9BQU9aLFNBQVNhLE9BQU8sQ0FBQ0o7WUFDOUJSLEtBQUssQ0FBQ1csS0FBSyxHQUFHSDtZQUNkVCxRQUFRLENBQUNZLEtBQUssR0FBRztRQUNuQixPQUFPO1lBQ0xkO1FBQ0YsQ0FBQztRQUNEUSxRQUFRQyxHQUFHLENBQUNOLE1BQU1hLElBQUksQ0FBQztRQUN2QixNQUFNQyxJQUFJakIsUUFBUTtRQUNsQlEsUUFBUUMsR0FBRyxDQUFDUixPQUFPaUIsS0FBSyxDQUFDLEdBQUdELEdBQUdELElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUNiLE1BQU1VLFFBQVEsQ0FBQyxNQUFNO1lBQ3hCTCxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDTixNQUFNYSxJQUFJLENBQUM7WUFDdkJULE1BQU0sSUFBSTtZQUNWLEtBQU07UUFDUixDQUFDO0lBQ0g7SUFFQSxJQUFJLENBQUNBLEtBQUs7UUFDUkMsUUFBUUMsR0FBRyxDQUFDUixPQUFPaUIsS0FBSyxDQUFDLEdBQUdsQixRQUFRLEdBQUdnQixJQUFJLENBQUM7UUFDNUNSLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRVYsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztBQUNIO0FBRUFELFFBQVEiLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy93b3JkLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/games/word.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/games/word.js"));
module.exports = __webpack_exports__;

})();