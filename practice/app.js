// console.log("Hello World!");
// console.error("ops, sth wrong");
// console.dir({
//     name: "FAFA",
//     age:23
// });
// https request
// const https = require('https');
// const url = 'https://encrypted.google.com/';

// https.get(url, (response) => {
//   console.log('statusCode:', response.statusCode);
//   console.log('headers:', response.headers);

//   response.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (error) => {
//   console.error(error);
// });

  // treehouse exercise
  


// 
const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {
       responseBody += dataChunk,toString();

    });

    response.on("end", () => {
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});