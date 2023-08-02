// function initTabNav() {
//     const tabMenu = document.querySelectorAll('.js-tabmenu li')
//     const tabContent = document.querySelectorAll('.js-tabcontent section')
//     const activeClass = 'ativo'

//     if(tabContent.length && tabMenu.length) {
//         tabContent[0].classList.add(activeClass)
        
//         function activeTab(index) {
//             tabContent.forEach((section) => {
//                 section.classList.remove(activeClass)
//             })
//             tabContent[index].classList.add(activeClass, tabContent[index].dataset.anime)
//         }
        
//         tabMenu.forEach((itemMenu, index) => {
//             itemMenu.addEventListener('click', () => {
//                 activeTab(index)
//             })
//         })
//     }
// }
// initTabNav()


function initAccordion() {
    const accordionList = document.querySelectorAll('[data-tab="accordion"] dt')
    const activeClass = 'ativo'

    if(accordionList.length){
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)
        
        function activeAccordionList() {
                this.classList.toggle(activeClass)
                this.nextElementSibling.classList.toggle(activeClass)
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordionList)
        })
    }
}
initAccordion()

function initSmoothScroll() {
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
initSmoothScroll()

function initScrollAnimation() {
     const sections = document.querySelectorAll('[data-animation="scroll"]')
     const windowStartAnimation = window.innerHeight * 0.6
    
    if(sections.length){
         sections[0].classList.add('ativo')
    
        function scrollAnimation(){
             sections.forEach((section) => {
                 const sectionTop = section.getBoundingClientRect().top 
                 if(sectionTop < windowStartAnimation) {
                     section.classList.add('ativo')
                 }
             })
         }
             window.addEventListener('scroll',scrollAnimation)
    }
}
initScrollAnimation()