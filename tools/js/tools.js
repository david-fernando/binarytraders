const select = document.getElementById("my-select");

select.addEventListener("change", function () {
    const selectedItems = [];
    const selectedOptions = select.selectedOptions;
    const selected = document.querySelectorAll('.selected-item')
    selectedItems.push([...selectedOptions])
    for (let index = 0; index < selectedOptions.length; index++) {
        const value = selectedOptions[index].value;
        const item = document.createElement("div");
        const addOptions = () =>{
            item.classList.add("selected-item");
            item.textContent = value;
        }
        const closeButton = document.createElement("span");
        closeButton.textContent = "X";
        const removeOption = () => {
            item.appendChild(closeButton);
            closeButton.addEventListener("click", function () {
                const index = selectedItems.indexOf(value);
                if (index !== -1) {
                    selectedItems.splice(index, 1);
                    item.remove();
                }
            });
            document.getElementById("selected-items").appendChild(item);
        }
        console.log(selectedItems)
        addOptions()
        removeOption()
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




