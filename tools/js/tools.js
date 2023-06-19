// Obtenha o elemento <select >
const select = document.getElementById("my-select");

// Adicione um evento para quando uma opção for selecionada
select.addEventListener("change", function () {
    const selectedItems = [];
    // Obtenha todas as opções selecionadas
    const options = select.selectedOptions;
    for (let i = 0; i < options.length; i++) {
        const value = options[i].value;
        // Crie um elemento <div> para cada item selecionado
        const item = document.createElement("div");
        item.classList.add("selected-item");
        // Adicione o valor da opção como texto
        item.textContent = value;
        // Crie um elemento <span> com o texto "X" para remover o item
        const removeBtn = document.createElement("span");
        removeBtn.textContent = "X";
        // Adicione um evento para remover o item quando o botão "X" for clicado
        removeBtn.addEventListener("click", function () {
            const index = selectedItems.indexOf(value);
            if (index !== -1) {
                selectedItems.splice(index, 1);
                item.remove();
            }
        });
        // Adicione o botão "X" ao elemento <div> do item selecionado
        item.appendChild(removeBtn);
        // Adicione o elemento <div> ao elemento "selected-items"
        document.getElementById("selected-items").appendChild(item);
        // Adicione o valor da opção selecionada ao array "selectedItems"
        selectedItems.push(value);
    }
});

$(document).ready(function () {
    $(".text-list").on("mousedown", function (e) {
        var startX = e.pageX - this.offsetLeft;
        var scrollLeft = this.scrollLeft;

        $(this).on("mousemove", function (e) {
            var newScrollLeft = e.pageX - startX;
            this.scrollLeft = scrollLeft - newScrollLeft;
        });
    });

    $(document).on("mouseup", function () {
        $(".text-list").off("mousemove");
    });
});




