const select = document.getElementById("my-select");

select.addEventListener("change", function () {
    const selectedItems = [];
    const selectedOptions = select.selectedOptions;
    let previousValue = []
    let closeButton = null
    for (let index = 0; index < selectedOptions.length; index++) {
        const value = selectedOptions[index].value;
        const item = document.createElement("div");
        const addOptions = (selectedItem) => {
            const currentValue = value
            selectedItem.forEach((item) => {
                previousValue.push(item.innerText.replace('\nX', ''))
            });
            if((previousValue.includes('All OTC Assets') && currentValue === 'All Assets') || (previousValue.includes('All Assets') && currentValue === 'All OTC Assets')){
                selectedItems.splice(index, 1);
                selectedItem.forEach((item) => {
                    const text = item.innerText.replace('\nX', '')
                    if(text === 'All OTC Assets' || text === 'All Assets'){
                        item.remove()
                    }
                });
            }
            if(previousValue.includes(currentValue)){
                return item.remove();
            }
            item.classList.add("selected-item");
            item.textContent = value;
            closeButton = document.createElement("span");
            closeButton.textContent = "X";
        }
        const removeOption = () => {
            if(closeButton === null){
                return;
            }
            item.appendChild(closeButton);
            closeButton.addEventListener("click", () => {
                if(selectedItems.includes(value)){
                    selectedItems.splice(index, 1);
                    item.remove();
                }
            });
            document.getElementById("selected-items").appendChild(item);
        }
        const selected = document.querySelectorAll('.selected-item')
        addOptions(selected)
        removeOption()
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




