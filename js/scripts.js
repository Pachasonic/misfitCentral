// bgGame

import {bgGameData} from "../data/bgList.js"

console.log(bgGameData)


const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

const btnAll = document.createElement('button')
btnAll.textContent = "All Board Games"
btnAll.classList.add('active')
btnAll.addEventListener('click', () => {
    boardGameData(bgGameData)
    btnAll.classList.add('active')
    btnCole.classList.remove('active')
    btnBen.classList.remove('active')
    btnAbi.classList.remove('active')
    btnAlex.classList.remove('active')
}
)


const btnBen = document.createElement('button')
btnBen.textContent = "Owned by Ben"
btnBen.addEventListener('click', () => {
    const arrayBen = bgGameData.filter(bgGameData => bgGameData.obBen === 'Yes')
    boardGameData(arrayBen)
    btnAll.classList.remove('active')
    btnCole.classList.remove('active')
    btnBen.classList.add('active')
    btnAbi.classList.remove('active')
    btnAlex.classList.remove('active')    
})

const btnAbi = document.createElement('button')
btnAbi.textContent = "Owned by Abi"
btnAbi.addEventListener('click', () => {
    const arrayAbi = bgGameData.filter(bgGameData => bgGameData.obAbi === 'Yes')
    boardGameData(arrayAbi)
    btnAll.classList.remove('active')
    btnCole.classList.remove('active')
    btnBen.classList.remove('active')
    btnAbi.classList.add('active')
    btnAlex.classList.remove('active')    
})

const btnAlex = document.createElement('button')
btnAlex.textContent = "Owned by Alex"
btnAlex.addEventListener('click', () => {
    const arrayAlex = bgGameData.filter(bgGameData => bgGameData.obAlex === 'Yes')
    boardGameData(arrayAlex)
    btnAll.classList.remove('active')
    btnCole.classList.remove('active')
    btnBen.classList.remove('active')
    btnAbi.classList.remove('active')
    btnAlex.classList.add('active')    
})

const btnCole = document.createElement('button')
btnCole.textContent = "Owned by Cole"
btnCole.addEventListener('click', () => {
    const arrayCole = bgGameData.filter(bgGameData => bgGameData.obCole === 'Yes')
    boardGameData(arrayCole)
    btnAll.classList.remove('active')
    btnCole.classList.add('active')
    btnBen.classList.remove('active')
    btnAbi.classList.remove('active')
    btnAlex.classList.remove('active')    
})


myNav.appendChild(btnAll)
myNav.appendChild(btnBen)
myNav.appendChild(btnAbi)
myNav.appendChild(btnAlex)
myNav.appendChild(btnCole)

// nav 

function boardGameData (bgGameData) {
    myViewer.textContent=""
    bgGameData.forEach(bgGame => {
    const myFigure = document.createElement('figure')
    const myDiv = document.createElement('div')
    const myImg = document.createElement('img')
    myDiv.classList.add("imgHelp")

    myImg.src = bgGame.url
    myImg.alt = bgGame.name

    const myCaption = document.createElement('figcaption')
    myCaption.textContent = bgGame.name

    myFigure.appendChild(myDiv)
    myDiv.appendChild(myImg)
    myFigure.appendChild(myCaption)
    myViewer.appendChild(myFigure)


    })

}


boardGameData(bgGameData);

document.querySelectorAll('img').forEach((img) => {
    img.onload = () => {
      if (img.naturalWidth > img.naturalHeight) {
        img.style.width = '300px'; // Landscape
        img.style.height = 'auto';
      } else {
        img.style.height = '300px'; // Portrait
        img.style.width = 'auto';
      }
    };
});

const theModalBox = document.querySelector('aside')
const theSettings = document.querySelector('#settings')
const theSettingsClosed = document.querySelector('#settingsClosed')

theSettings.addEventListener('click', () => {
    theModalBox.classList.add('show')
})

theSettingsClosed.addEventListener('click', () => {
    theModalBox.classList.remove('show')
})



// function showbgGame(bgGame) {

//         let bgGameSection = document.createElement("section")
//         let bgGameName = document.createElement("h2")
//         let bgGamePhoto = document.createElement("img")
//         let bgGameIngrTitle = document.createElement("p")
//         let bgGameIngredients = document.createElement("ul")
//         let bgGameInstTitle = document.createElement("p")
//         let bgGameInstructions = document.createElement("ul")


//         bgGame.textContent = bgGame.title
//         bgGame.src = `images/${bgGame.url}`
//         bgGamePhoto.alt = bgGame.title

//         bgGameIngrTitle.textContent = "Ingredients: "
//         bgGame.ingredients1.forEach(ingredient => {
//             let theIngredient = document.createElement('li')
//             theIngredient.textContent = ingredient
//             bgGameIngredients.appendChild(theIngredient)
//         })

//         bgGameInstTitle.textContent = "Ingredients: "
//         bgGame.instructions.forEach(instruction => {
//             let theInstruction = document.createElement('li')
//             theInstruction.textContent = instruction
//             bgGameInstructions.appendChild(theInstruction)
//         })


//         bgGameSection.appendChild(bgGameName)
//         bgGameSection.appendChild(bgGamePhoto)
//         bgGameSection.appendChild(bgGameIngrTitle)
//         bgGameSection.appendChild(bgGameIngredients)
//         bgGameSection.appendChild(bgGameInstTitle)
//         bgGameSection.appendChild(bgGameInstructions)
//         myViewer.textContent = ""
//         myViewer.appendChild(bgGameSection)

//     }