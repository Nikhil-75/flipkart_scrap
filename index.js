const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const PORT = process.env.PORT || 1000;

const website = 'https://news.sky.com';
//const website = 'https://flipkart.com';
console.log(website)
try {
  axios(website).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $('.sdc-site-tile__headline', data).each(function () {
        // document.querySelectorAll(".CEmiEU")[0].innerText
    //   const title = $(this).text();
    //   const url = $(this).find('a').attr('href');
    $('.CEmiEU',data).each(function () {
        
    })
    const price = $(this).text();

      content.push({
        title,
        url,
      });

      console.log(content)
      app.get('/', (req, res) => {
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});