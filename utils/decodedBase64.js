// const match = /"data:image\/([a-zA-Z]*);base64,([^\"]*)\"/g;
// // import axios from "axios";
// var fs = require("browserify-fs");

// function decodedBase64(datas) {
//   let list = [];
//   datas.forEach((item) => {
//     let contents = item.ckeditor.match(match);
//     console.log(contents);
//     if (contents?.length > 0) {
//       const imageBuffer = new Buffer.from(contents, "base64");
//       // console.log(contents);
//       // fs.writeFileSync("myimage.jpg", imageBuffer);

//       var str =
//       console.log("str = " + str);
//       const base64Data = str.replace(/^data:image\/jpeg;base64,/, "");
//       console.log("base64Data = " + base64Data);
//       const fs = require("fs");
//       fs.writeFile("out.png", base64Data, "base64", (err) => {
//         console.log(err);
//       });
//     }
//   });

//   return list;
// }

// export default decodedBase64;
