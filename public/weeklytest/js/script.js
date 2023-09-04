const selections = document.querySelector(".selections")
var ans, previous_e

function deleteLine(e){
    e.classList.toggle("deleteline")
    ans = e.children[0].innerText
    if(previous_e) if(e.children[0].tagName == previous_e.children[0].tagName) previous_e.classList.remove("deleteline")
    previous_e = e
}

function inputAns(e){
    if(e.children[0].value==ans || !ans) return
    else if(e.children[0].value){
        selections.children[(e.children[0].value)-1].classList.remove("deleteline")
        if(previous_e) if(e.children[0].tagName == previous_e.children[0].tagName) previous_e.children[0].value=""
        e.children[0].value = ans
        previous_e=e
    }else{
        if(previous_e) if(e.children[0].tagName == previous_e.children[0].tagName) previous_e.children[0].value=""
        e.children[0].value = ans
        previous_e=e
    }
}

// function inputAnswerEffect(num){
//     var selection = [...selections.children]
//     selection.forEach(child=>{
//         if(`${num}.` == child.querySelector('b')){
//             child.classList.add('deleteLine')
//         }
//     })
// }

// let ansArray = []
// ansArray.length=50

// function getVal(i){
//     if(typeof i==undefined) return
//     val = document.querySelectorAll('input')[i].value
//     ansArray[i] = val
//     console.log(ansArray)
//     inputAnswerEffect(val)

// }
// function sendVal(){
//     for(let j=0; j<document.querySelector('.answers').children.length; j++){
//         getVal(j)
//     }
// }
