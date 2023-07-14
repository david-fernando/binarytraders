const select = document.getElementById("my-select");
const timezoneSelect = document.getElementById("timezone-select");
const directionSelect = document.getElementById("direction-select");
const timeframeSelect = document.getElementById("timeframe-select");
const daylistSelect = document.getElementById("daylist-select");
const accuracyInput = document.getElementById("accuracy");
const catalogDays = document.getElementById("catalogDays");
const martingaleSelect = document.getElementById("martingale-select");
const catalogButton = document.querySelector('.catalog-button')
const selectedPairs = [];
let accuracy = null
let chosenCatalogDays = null

select.addEventListener("change", handleSelection)

function handleSelection() {
    let previousValue = []
    const selectedOptions = select.selectedOptions;
    let closeButton = null
    for (let index = 0; index < selectedOptions.length; index++) {
        const value = selectedOptions[index].value;
        const item = document.createElement("div");
        const addOptions = (selectedItem) => {
            const currentValue = value
            selectedItem.forEach((item) => {
                previousValue.push(item.innerText.replace('\nX', ''))
            });

            const includeCrypto = previousValue.every(value => value.includes('-BT'))
            const isCrypto = currentValue.includes('-BT')
            const includeAllOTC = previousValue.includes('All OTC Assets')
            const includeAllAssets = previousValue.includes('All Assets')
            const isOTC = currentValue === 'All OTC Assets'
            const isAllAssets = currentValue === 'All Assets'
            const includeOTC = currentValue.includes('-OTC')
            const isPreviewOTC = previousValue.every(value => value.includes('-OTC'))

            if(includeAllOTC || includeAllAssets || isOTC || isAllAssets || (includeOTC && !includeCrypto) || (isPreviewOTC && isCrypto)){
                selectedPairs.splice(index, 1);
                selectedItem.forEach((item) => {
                    item.remove()
                });
            }
            if(previousValue.includes(currentValue)){
                return item.remove();
            }
            item.classList.add("selected-item");
            item.textContent = value?.replace('-BT', '');
            closeButton = document.createElement("span");
            closeButton.textContent = "X";
        }
        const removeOption = () => {
            if(closeButton === null){
                return;
            }
            item.appendChild(closeButton);
            closeButton.addEventListener("click", () => {
                if(selectedPairs.includes(value)){
                    selectedPairs.splice(index, 1);
                    item.remove();
                }
            });
            document.getElementById("selected-items").appendChild(item);
        }
        const selected = document.querySelectorAll('.selected-item')
        addOptions(selected)
        removeOption()
        selectedPairs.push(value);
    }
}

const updateSignalAccuracy = (value) => {
    accuracy = parseInt(value)
}

const updateSignalCatalogDays = (value) => {
    chosenCatalogDays = parseInt(value)
}

catalogButton.addEventListener('click', () => {
    const timezone = timezoneSelect.value
    const direction = directionSelect.value
    const timeframe = parseInt(timeframeSelect.value)
    const today = (daylistSelect.value === 'false')? false : true
    const martingaleSelected = parseInt(martingaleSelect.value)
    const pairs = selectedPairs.map((pair) => (pair.includes('-BT'))? pair.replace('-BT', '') : pair)
    const isAccuracyEmpty = accuracy === null
    const isCatalogDaysEmpty = chosenCatalogDays === null
    const isAccuracyRequired = accuracyInput.classList.contains('required-input')
    const isCatalogDaysRequired = catalogDays.classList.contains('required-input')
    const requiredAcurracy = document.querySelector('.required-acurracy')
    const requiredCatalogDays = document.querySelector('.required-gatalog-day')
    
    if(isAccuracyEmpty){
        accuracyInput.classList.add('required-input')
        return requiredAcurracy.innerHTML += '<small class="warning">This field is required!</small>'
    }

    if(isCatalogDaysEmpty){
        catalogDays.classList.add('required-input')
        return requiredCatalogDays.innerHTML += '<small class="warning">This field is required!</small>'
    }

    if(isAccuracyRequired){
        accuracyInput.classList.remove('required-input')
        requiredAcurracy.innerHTML = `<label for="accuracy">Signals Accuracy</label>
        <input id="accuracy" type="number" onChange="updateSignalAccuracy(event.target.value)" min="60" max="100" placeholder="%" class="form-control">`
    }

    if(isCatalogDaysRequired){
        catalogDays.classList.remove('required-input')
        requiredCatalogDays.innerHTML = `<label for="catalogDays">Cataloging Days</label>
        <input class="form-control" type="number" min="1" max="30" onChange="updateSignalCatalogDays(event.target.value)" id="catalogDays" placeholder="Days">`
    }

    const url = 'https://api.agbot.com.br/signal/v1/api/catalog'
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    const json = {
        timezone,
        pairs,
        timeframe,
        "number_of_days": chosenCatalogDays,
        "percent": accuracy,
        direction,
        today,
        "gale_level": martingaleSelected
    }      

    const fetchCatalog = async() => {
        try {
            const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(json)})
            const data = await response.json()
            console.log(data.signals)
        } catch (error) {
            console.log(error)
        }
    }

    fetchCatalog()
})


