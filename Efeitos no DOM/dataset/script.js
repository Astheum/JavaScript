// /* Exemplo 01 */
// const div = document.querySelector('div')

// console.log(div.dataset.cor)

// // Ambos os valores selecionam a mesma div acima.
// let div2 = document.querySelector('div');
// div2 = document.querySelector('[data-cor]');
// div2 = document.querySelector('[data-cor="azul"]');

// console.log(div2.dataset)
// // DOMStringMap {cor: "azul", width: "500"}
// div2.dataset.cor; // 'azul'
// div2.dataset.width; // '500'
// div2.dataset.tempo = 1000;
// // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

/* >>> Exercicios <<< */

// Adicione um atributo data-anime="show-down" e data-anime="show-right" a todos as section's com descricão dos animais.
// Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab)
function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    const activeClass = 'ativo'

    if(tabContent.length && tabMenu.length) {
        tabContent[0].classList.add(activeClass)
        
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass)
            })
            const direction = tabContent[index].dataset.anime
            tabContent[index].classList.add(activeClass, direction)
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

// No CSS faça com que show-down anime de cima para baixo e show-right continue com a mesma animação da esquerda para a direita

// Substitua todas as classes js- por data atributes.
/* OK animacoes.js */