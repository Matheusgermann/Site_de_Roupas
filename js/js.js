document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão do menu e o contêiner dropdown
    var dropbtn = document.querySelector('.dropbtn');
    var dropdown = document.querySelector('.dropdown');

    // Adiciona um evento de clique ao botão do menu
    dropbtn.addEventListener('click', function() {
        // Alterna a classe 'show' no contêiner dropdown
        dropdown.classList.toggle('show');
    });

    // Fecha o menu se clicar fora dele
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });

    document.getElementById('tema').addEventListener('click', function() {
    var themeOptions = document.getElementById('theme-options');
    // Alterna a exibição das opções de tema
    if (themeOptions.style.display === 'none') {
        themeOptions.style.display = 'block';
    } else {
        themeOptions.style.display = 'none';
    }
});

document.getElementById('tema-claro').addEventListener('click', function() {
    document.body.classList.remove('dark-theme'); // Remove o tema escuro
    // Você pode adicionar uma classe para o tema claro, se quiser
});

document.getElementById('tema-escuro').addEventListener('click', function() {
    document.body.classList.add('dark-theme'); // Aplica o tema escuro
});

    // Função para pesquisar camisetas
    document.getElementById("search").addEventListener('input', function() {
        var input = this.value.toLowerCase();
        var camisetas = document.getElementsByClassName("camiseta-item");
        
        for (var i = 0; i < camisetas.length; i++) {
            var nome = camisetas[i].getElementsByClassName("camiseta-nome")[0].innerText.toLowerCase();
            camisetas[i].style.display = nome.includes(input) ? "block" : "none";
        }
    });

    // Seleciona os elementos dos filtros
    var marcaSelect = document.getElementById("marca-select");
    var tamanhoSelect = document.getElementById("tamanho-select");

    // Função para aplicar filtros
    function aplicarFiltros() {
        var marcaSelecionada = marcaSelect.value;
        var tamanhoSelecionado = tamanhoSelect.value;
        var camisetas = document.getElementsByClassName("camiseta-item");
        
        for (var i = 0; i < camisetas.length; i++) {
            var marca = camisetas[i].getAttribute("data-marca");
            var tamanho = camisetas[i].getAttribute("data-tamanho");
            
            if ((marcaSelecionada === "todas" || marcaSelecionada === marca) &&
                (tamanhoSelecionado === "todos" || tamanhoSelecionado === tamanho)) {
                camisetas[i].style.display = "block";
            } else {
                camisetas[i].style.display = "none";
            }
        }
    }

    // Atualizando os eventos de filtro para filtrar com base em ambos os critérios
    marcaSelect.addEventListener('change', aplicarFiltros);
    tamanhoSelect.addEventListener('change', aplicarFiltros);

    // Aplicar filtros inicialmente
    aplicarFiltros();
});

let cartCount = 0;

function adicionarAoCarrinho() {
    cartCount++;
    // Armazenar a contagem do carrinho em localStorage
    localStorage.setItem('cartCount', cartCount);
    // Redirecionar para a página do carrinho
    window.location.href = "carrinho.html";
}

// Quando a página carregar, atualize o contador do carrinho
document.addEventListener('DOMContentLoaded', function() {
    const storedCount = localStorage.getItem('cartCount');
    if (storedCount) {
        cartCount = parseInt(storedCount, 10);
        document.getElementById('cart-count').innerText = cartCount;
    }
});

function finalizarCompra() {
    // Limpar o carrinho
    localStorage.removeItem('cartCount');
    document.getElementById('cart-count').innerText = 0;
    alert("Compra finalizada!");
}

