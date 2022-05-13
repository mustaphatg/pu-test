var express = require('express');
var router = express.Router();
const { chromium } = require("playwright-chromium");                  




/* GET home page. */
router.get('/', function(req, res, next) {
     //res.send("Hello Musty, How are you")


     (async () => {
          const browser = await chromium.launch({
               chromiumSandbox: false
          });
          const context = await browser.newContext();
          const page = await context.newPage();
          await page.goto('http://whatsmyuseragent.org/');
          await page.screenshot({
               path: `public/images/chromium.png`
          });
          await browser.close();
          
          
          res.send("<img src='/public/images/chromium.png' > <h1> hello </h1>");               
          
     })();


});




module.exports = router;