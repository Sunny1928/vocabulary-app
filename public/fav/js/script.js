var vocsContainer = document.querySelector("[vocs-container]")

const dataArray = JSON.parse(localStorage.getItem("data"))

const getFav = (data) =>{
    return`
    <div class="voc-container" id="voc-container">
            <div class="voc">
                <h3>${data.word}</h3>
            </div>
            <div class="meaning">
                <p>${data.meaning}</p>
            </div>
            <div class="btns">
                <button onclick="addCheck(this)"><i class="fa-solid fa-check"></i></button>
                <button onclick="deleteFav(this)"><i class="fa-solid fa-trash-can"></i></button>
            </div>
    </div>
    <hr>
    `
}

vocsContainer.innerHTML = `${dataArray.map(getFav).join('')}`

function addCheck(e){
    e.parentElement.parentElement.classList.toggle("check");
}
function deleteFav(e){
    e.parentElement.parentElement.classList.toggle("fav")

    for(var i=0; i<dataArray.length; i++){
        if(dataArray[i].word===e.parentElement.parentElement.querySelector("h3").innerText){
            dataArray.splice(i,1)
        }
    }
    
    localStorage.setItem('data', JSON.stringify(dataArray))
    vocsContainer.innerHTML = `${dataArray.map(getFav).join('')}`
    
}