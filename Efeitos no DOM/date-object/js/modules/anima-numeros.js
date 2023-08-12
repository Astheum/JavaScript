export default function initAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    function animaNumeros() {
        numeros.forEach((num) => {
            const total = +num.innerText
            const incremento = Math.floor(total / 100)
    
            let start = 0
            const timer = setInterval(() => {
                start += incremento
                num.innerText = start
                if(start > total) {
                    num.innerText = total
                    clearInterval(timer)
                }
            }, 25 * Math.random());
        })
    }

    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect()
            animaNumeros()
        }
    }
    
    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation)
    
    observer.observe(observerTarget, {attributes: true} )
}
