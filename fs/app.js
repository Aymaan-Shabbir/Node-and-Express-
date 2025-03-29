const fs = require("fs");

//reading file
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("readFile", data);
// });
// format-> fs.command(filename , format,(err,data)=>{
//     catch and throw error
// })
// why utf8?
// fs.readFile returns a raw buffer(binary data) therefore utf 8 converts it into a string , making it readable

//readFileSync
// const data = fs.readFileSync("input.txt", "utf-8");
// console.log("readFileSync", data);

//readFile vs readFileSync-> readFile is asynchronous-> non blocking, runs below lines of code, does not wait . readFileSync is synchronous, supports blocking, below lines of code will not run till it is completed.

//writingFile
// fs.writeFile("input.txt", "Hello ! Aymaan Shabbir Ibrahim , NODE.JS", (err) => {
//   if (err) throw err;
// });

// //append
// fs.appendFile("input.txt", "\nHello this is node.js , NOTES", (err) => {
//   if (err) throw err;
// });

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) throw new err();
//   console.log("after appending", data);
// });

//remove
// fs.unlink("input.txt", (err) => {
//   if (err) throw err;
// });

//recommended, when file size is large

// const filePath = "input.txt";

// // First Read
// const readStream1 = fs.createReadStream(filePath, "utf-8");
// readStream1.on("data", (chunk) => {
//   console.log("First Read:", chunk);
// });

// Writing Data
// const writeStream = fs.createWriteStream(filePath, "utf-8");
// writeStream.write("Welcome to NODE.js ....");
// console.log("Write complete");

//  This read might run before the write completes!
// const readStream2 = fs.createReadStream(filePath, "utf-8");
// readStream2.on("data", (chunk) => {
//   console.log("Second Read:", chunk);
// });

// correct method-> include second read inside write to EventSource, file is read after writing

// First Read
// const readStream1 = fs.createReadStream(filePath, "utf-8");
// readStream1.on("data", (chunk) => {
//   console.log("First Read:", chunk);
// });
// readStream1.on("end", () => {
//   console.log("First read complete");

//   // Write Data
//   const writeStream = fs.createWriteStream(filePath, "utf-8");
//   writeStream.write("Welcome to NODE.js", () => {
//     console.log("Write complete");

//     // Second Read after writing is done
//     const readStream2 = fs.createReadStream(filePath, "utf-8");
//     readStream2.on("data", (chunk) => {
//       console.log("Second Read:", chunk);
//     });
//     readStream2.on("end", () => console.log("Second read complete"));
//   });
// });

// Output:
// First Read: Welcome to NODE.js ....
// First read complete
// Write complete
// Second Read: Welcome to NODE.js
// Second read complete

//Pipe
// transfer data from one file to another
// const readStream = fs.createReadStream("input.txt", "utf-8");
// const writeStream = fs.createWriteStream("output.txt", "utf-8");

// readStream.pipe(writeStream);
