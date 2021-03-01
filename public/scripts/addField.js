 // Procurar o botão
 document.querySelector('#add-time')

 // Quando clicar no botão
 .addEventListener('click', cloneField)

 // Executar uma ação
 function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
   fields.forEach(function(field) {
    // pegar o field do momento e limpá-lo.
        field.value = ""
   })

    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
 }

