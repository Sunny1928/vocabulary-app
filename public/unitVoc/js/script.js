var vocsContainer = document.querySelector("[vocs-container]")
let dataArray=[]
if (localStorage.getItem("data") !== null) {
    dataArray=JSON.parse(localStorage.getItem("data"))
}

for(var i=0; i<JSON.parse(localStorage.data).length; i++){
    var words = [...vocsContainer.children]
    console.log(words)
    words.forEach(child=>{
        if(JSON.parse(localStorage.data)[i]["word"]===child.querySelector("h3").innerText && !child.querySelector("h3").parentElement.parentElement.classList.contains("fav")){
            child.querySelector("h3").parentElement.parentElement.classList.add("fav")
        }
    })
    
}

function addCheck(e){
    e.parentElement.parentElement.classList.toggle("check");
}
function addFav(e){
    e.parentElement.parentElement.classList.toggle("fav")
    if(!e.parentElement.parentElement.classList.contains("fav")){
        for(var i=0; i<dataArray.length; i++){
            if(dataArray[i].word===e.parentElement.parentElement.querySelector("h3").innerText){
                dataArray.splice(i,1)
            }
        }
    }
    else{
        word=e.parentElement.parentElement.querySelector("h3").innerText
        meaning=e.parentElement.parentElement.querySelector("p").innerText
        dataArray.push({"word": word, "meaning": meaning})
    }
    localStorage.setItem('data', JSON.stringify(dataArray))
    console.log(dataArray)
    console.log(localStorage.data)

}



