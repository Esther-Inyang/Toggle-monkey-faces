
const closedFaceMonkey = document.querySelector('.closed-face-monkey')
const openFaceMonkey = document.querySelector('.open-face-monkey')

const closedFaceDiv = document.querySelector('.closed-face-div')
const openFaceDiv = document.querySelector('.open-face-div')

//ACTIVE CLASS = active-face-div

//To change to open monkey face
closedFaceMonkey.addEventListener("click", () => {
    if(openFaceDiv.classList.contains('open-face-div')){
        openFaceDiv.classList.add('active-face-div')
        closedFaceDiv.classList.remove('active-face-div')
        document.body.style.backgroundColor = "whitesmoke";
    }

    //optional
    console.log("You clicked my closed face? Now my face is Open")
})

//To change to closed monkey face
openFaceMonkey.addEventListener("click", () => {
    if(closedFaceDiv.classList.contains('closed-face-div')){
        closedFaceDiv.classList.add('active-face-div')
        openFaceDiv.classList.remove('active-face-div')
        document.body.style.backgroundColor = "white";
    }

    //optional
    console.log("You clicked my open face? Now my face is closed")
})

//note: toggle can't work in this case because we are clicking different elements (monkey faces)