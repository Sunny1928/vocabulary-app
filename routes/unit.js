const express = require("express");

const router = express.Router()

router.get("/", (req, res)=>{
    res.send("get unit")
})
router.post("/", (req, res)=>{
    res.send("creat unit")
})
router
    .route("/:id")
    .get((req, res)=>{
        res.render('index', {title: "Unit Voc", id:req.params.id, data: req.data, maxUnit: 11})//change the unit here
    })
    // .post((req, res)=>{
    //     res.send(document.getElementById('search').value)
    // })
    .put((req, res)=>{
        res.send(`update unit ${req.params.id}`)
    })
    .delete((req, res)=>{
        res.send(`delete unit ${req.params.id}`)
    })

router.param("id", (req, res, next, id)=>{
    const jsonData= require('../units/unit'+id+'.json');
    req.data = jsonData
    next()
})

// get translation from website
// async function start(word){
//     try{
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     // await page.setExtraHTTPHeaders({
//     //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
//     //     'upgrade-insecure-requests': '1',
//     //     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
//     //     'accept-encoding': 'gzip, deflate, br',
//     //     'accept-language': 'en-US,en;q=0.9,en;q=0.8'
//     // })
//     await page.goto("https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/"+word)
//     let [ad,meaning] = await page.evaluate(()=>{
//         const a=document.querySelector(".posgram span").textContent
//         const b=document.querySelector(".def-body span").textContent
//         return [
//             a,b
//         ];
//     })
//     browser.close()
//     console.log(ad)
//     console.log(meaning)
//     return{
//         "word": word,
//         "ad": ad,
//         "meaning": meaning
//     }
// }
// catch(err){
//     console.log(err)
// }
// }

module.exports = router