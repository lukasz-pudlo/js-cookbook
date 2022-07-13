// document.getElementById('scrape').addEventListener("click", scrapePage);

// const browser = await puppeteer.launch({
//     userDataDir: './data', 
// })

// const word = document.getElementById('wordToSearch').value;

const word = 'joie';
const puppeteer = require('puppeteer');
function run () {
    return new Promise( async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`https://cnrtl.fr/definition/${word}`);
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('div.tlf_parah');
                items.forEach((item) => {
                    results.push({
                        text: item.innerText,
                    });
                });
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);