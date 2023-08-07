export default function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('[data-tab="nav"] a[href^="#"]')
    
    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
         })
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}