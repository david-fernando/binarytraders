const select = document.getElementById("my-select");

select.addEventListener("change", function () {
    const selectedItems = [];
    const selectedOptions = select.selectedOptions;
    let previousValue = []
    for (let index = 0; index < selectedOptions.length; index++) {
        const value = selectedOptions[index].value;
        const item = document.createElement("div");
        const addOptions = (selectedItem) => {
            const currentValue = value
            console.log(previousValue)
            console.log(currentValue)
            console.log(previousValue.includes(value))
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
            item.classList.add("selected-item");
            item.textContent = value;
        }
        const closeButton = document.createElement("span");
        closeButton.textContent = "X";
        const removeOption = () => {
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

// const mySelect = document.getElementById("textSelect");
// const inputOther = document.getElementById("form12");
// const labelInput = document.getElementById("inputLabel");
// const divInput = document.getElementById("inputDiv");
// const selectDiv = document.getElementById("textSelectdiv");

// mySelect.addEventListener('optionSelect.mdb.select', function(e){
// const SelectValue = document.getElementById('textSelect').value;
// if (SelectValue === 'customOption') {
// inputOther.style.display='inline';
// inputOther.removeAttribute('disabled');
// labelInput.classList.remove('disaplayInput');
// divInput.classList.remove('disaplayInput');
// selectDiv.style.display='none';
// inputOther.focus();
// mySelect.disabled = 'true';

// } else {
// a.style.display='none';
// }
// })

// function hideInput(){
// if (inputOther !== null && inputOther.value === "")
// {
// inputOther.style.display='none';
// inputOther.setAttribute('disabled', '');
// selectDiv.style.display='inline';
// mySelect.removeAttribute('disabled');
// labelInput.classList.add('disaplayInput');
// divInput.classList.add('disaplayInput');
// }
// }

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




