const cuerpo = document.getElementById("cuerpo")

const sectionUno = document.querySelector(".cuerpo-section-1")
const sectionDos = document.querySelector(".cuerpo-section-2")
const sectionTres = document.querySelector(".cuerpo-section-3")

const enlaceSectionUno = document.querySelector(".cuerpo-section-1-article")
const enlaceSectionDos = document.querySelector(".cuerpo-section-2-article")
const enlaceSectionTres = document.querySelector(".cuerpo-section-3-article")

const divEnlaceUno = document.querySelector(".cuerpo-section-1-article-enlace")
const divEnlaceDos = document.querySelector(".cuerpo-section-2-article-enlace")
const divEnlaceTres = document.querySelector(".cuerpo-section-3-article-enlace")

cuerpo.addEventListener("mouseout", () => {

    sectionUno.style.width = '32%'
    sectionDos.style.width = '36%'
    sectionTres.style.width = '32%'

    enlaceSectionUno.style.opacity = "0"
    enlaceSectionDos.style.opacity = "0"
    enlaceSectionTres.style.opacity = "0"

})

sectionUno.addEventListener("mouseover", () => {

    sectionUno.style.width = '70%'
    sectionDos.style.width = '15%'
    sectionTres.style.width = '15%'

    enlaceSectionUno.style.opacity = "1"
    enlaceSectionDos.style.opacity = "0"
    enlaceSectionTres.style.opacity = "0"

})

sectionDos.addEventListener("mouseover", () => {

    sectionDos.style.width = '70%'
    sectionUno.style.width = '15%'
    sectionTres.style.width = '15%'

    enlaceSectionDos.style.opacity = "1"
    enlaceSectionUno.style.opacity = "0"
    enlaceSectionTres.style.opacity = "0"

})

sectionTres.addEventListener("mouseover", () => {

    sectionTres.style.width = '70%'
    sectionDos.style.width = '15%'
    sectionUno.style.width = '15%'

    enlaceSectionTres.style.opacity = "1"
    enlaceSectionDos.style.opacity = "0"
    enlaceSectionUno.style.opacity = "0"

})

divEnlaceUno.addEventListener("click", () => {

    window.open("https://worldofwarcraft.blizzard.com/es-es/")

})

divEnlaceDos.addEventListener("click", () => {

    window.open("https://playvalorant.com/es-mx/")

})

divEnlaceTres.addEventListener("click", () => {

    window.open("https://www.leagueoflegends.com/es-es/")

})