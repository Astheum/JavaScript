export default function initScrollAnimation() {
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