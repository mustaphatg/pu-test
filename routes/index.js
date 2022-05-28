var express = require('express');
var router = express.Router();
const { chromium } = require("playwright-chromium");




/* GET home page. */
router.get('/', function(req, res, next) {

     res.render("index.ejs");

});





router.get("/musty", (req,res) => {
	res.render("hello")
})





router.post("/scrape", async (req, res) => {

     
      var url = req.body.link
     


     try {
          const browser = await chromium.launch({				
               chromiumSandbox: false
          });

          const page = await browser.newPage();

          const context = await page.context()

          await context.clearCookies()

          await page.goto(url);                    

          var dd = await page.content()

          await browser.close();


          res.send(dd);
     }
     catch(er) {
          res.send(JSON.stringify(er));
          console.log("an error occurred")
          console.log(er)
     }
     
     

})







module.exports = router;