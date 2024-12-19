document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o campo de busca pelo ID
    const searchInput = document.getElementById('search');
    
    // Verifica se o campo de busca existe antes de continuar
    if (searchInput) {
        // Adiciona o evento 'input' ao campo de busca
        searchInput.addEventListener('input', function () {
            // Converte o valor do campo de busca para letras minúsculas
            const searchValue = searchInput.value.toLowerCase();

            // Seleciona todos os elementos com a classe 'box-item'
            const items = document.querySelectorAll('.box-item');

            // Itera sobre cada item e ajusta a visibilidade conforme a busca
            items.forEach(function (item) {
                // Converte o ID do item para letras minúsculas para comparação
                const itemId = item.id.toLowerCase();

                // Verifica se o ID do item contém o valor buscado
                if (itemId.includes(searchValue)) {
                    item.style.display = 'block';  // Exibe o item se houver correspondência
                } else {
                    item.style.display = 'none';   // Oculta o item se não houver correspondência
                }
            });
        });
    }
});

    


    






