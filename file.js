const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result=document.getElementById("result")
const sound=document.getElementById("sound")
const btn=document.getElementById("btn")

btn.addEventListener("click", ()=> {
    let inWord=document.getElementById("inp-word").value;
    console.log(inWord)
    fetch(`${url}${inWord}`)
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML = `<div class="word">
        <h3>${inWord}</h3>
        <button onclick="playSound">
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partsOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning"> 
       ${data[0].meanings[0].definitions[0].definition}</p>
    <p class="word-exam">
    ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })
       
}) 

function playSound(){
    sound.play()
}