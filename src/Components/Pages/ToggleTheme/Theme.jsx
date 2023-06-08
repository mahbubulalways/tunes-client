
const darkMode=()=>{
    document.querySelector("body").setAttribute("data-theme","dark")
}

const lightMode=()=>{
    document.querySelector("body").setAttribute("data-theme","light")
}

export {darkMode,lightMode}