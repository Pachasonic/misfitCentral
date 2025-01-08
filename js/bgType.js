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
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
}
)


const btn1 = document.createElement('button')
btn1.textContent = "Euro Game"
btn1.addEventListener('click', () => {
    const array1 = bgGameData.filter(bgGameData => bgGameData.euroGame === 'Yes')
    boardGameData(array1)
    btnAll.classList.remove('active')
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
})

const btn2 = document.createElement('button')
btn2.textContent = "Casual"
btn2.addEventListener('click', () => {
    const array2 = bgGameData.filter(bgGameData => bgGameData.casual === 'Yes')
    boardGameData(array2)
    btnAll.classList.remove('active')
    btn1.classList.remove('active')
    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')   
})

const btn3 = document.createElement('button')
btn3.textContent = "Social"
btn3.addEventListener('click', () => {
    const array3 = bgGameData.filter(bgGameData => bgGameData.social === 'Yes')
    boardGameData(array3)
    btnAll.classList.remove('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.add('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')  
})

const btn4 = document.createElement('button')
btn4.textContent = "Co-op"
btn4.addEventListener('click', () => {
    const array4 = bgGameData.filter(bgGameData => bgGameData.coop === 'Yes')
    boardGameData(array4)
    btnAll.classList.remove('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.add('active')
    btn5.classList.remove('active')    
})

const btn5 = document.createElement('button')
btn5.textContent = "Strategy"
btn5.addEventListener('click', () => {
    const array5 = bgGameData.filter(bgGameData => bgGameData.strategy === 'Yes')
    boardGameData(array5)
    btnAll.classList.remove('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.add('active')    
})


myNav.appendChild(btnAll)
myNav.appendChild(btn1)
myNav.appendChild(btn2)
myNav.appendChild(btn3)
myNav.appendChild(btn4)
myNav.appendChild(btn5)

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