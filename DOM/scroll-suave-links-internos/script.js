function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    const activeClass = 'ativo'

    if(tabContent.length && tabMenu.length) {
        tabContent[0].classList.add(activeClass)
        
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass)
            })
            tabContent[index].classList.add(activeClass)
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
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
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    
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