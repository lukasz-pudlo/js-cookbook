// import rp from 'request-promise';
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function(html){
//     //success!
//     console.log(html);
//   })
//   .catch(function(err){
//     //handle error
//   });

const puppeteer = require('puppeteer');

const url = process.argv[2];

if (!url) {
    throw "Please provide URL as the first arguement";
}

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
}
run();