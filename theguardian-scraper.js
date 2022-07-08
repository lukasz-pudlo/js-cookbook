const puppeteer = require('puppeteer');
function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://cnrtl.fr/definition/commencer");
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('span.tlf_cdefinition');
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