const express = require("express")
const router = express.Router()


function shuffle(array){
    let currentIndex = array.length
    while(currentIndex){
        let randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}


router.get("/", (req, res)=>{
    res.send("get test")
})

router.get("/:id",(req, res)=>{
        res.render('weeklytest', {title: 'Week test', id: req.params.id, data: req.data, randomData: req.randomData, maxUnit: 11}) //change the unit here
    })
    
router.post("/:id",(req,res)=>{
        let wrongArray = []
        for(i=0;i<Object.keys(req.body).length-1;i++){
            if(JSON.parse(req.body.randomData)[parseInt(req.body[i])-1].word !== req.data[i].word){
                wrongArray.push(i);
            }
        }
        res.render('answer', {title: 'Answer', id: req.params.id, wrongArray: wrongArray, answers: req.body, data: req.data})
    })
    
router.param("id", (req, res, next, id)=>{
    const jsonData=require('../units/unit'+id+'.json')
    req.data = jsonData
    let selectionArray = req.data.slice()
    shuffle(selectionArray)
    req.randomData = selectionArray
    next()
})


module.exports = router