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
          await page.goto('https://www.amazon.es/dp/B002ACKG8C');
          
          var dd = await page.content()
          
          await browser.close();
          
          
          res.send(dd);               
          
     })();


});




module.exports = router;