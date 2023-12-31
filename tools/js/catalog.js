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
let result = []
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
        const selectAllAssets = () => {
            if(value !== 'All Assets'){
                return
            }
            for(let index = 0; index < select.length; index++) {
                const allOptions = select.options[index].value
                if(!allOptions.includes('-OTC')){
                    selectedPairs.push(allOptions)
                }
            }
        }

        const selectAllOtcAssets = () => {
            if(value !== 'All OTC Assets'){
                return
            }
            for(let index = 0; index < select.length; index++) {
                const allOptions = select.options[index].value
                if(allOptions.includes('-OTC')){
                    selectedPairs.push(allOptions)
                }
            }
        }
        const selected = document.querySelectorAll('.selected-item')
        addOptions(selected)
        selectAllAssets()
        selectAllOtcAssets()
        removeOption()
        selectedPairs.push(value);
    }
}

const updateSignalAccuracy = (value) => {
    accuracy = parseInt(value)
}

const getAllAssets = () => {
    if(select.selectedOptions[0].innerText !== 'All Assets'){
        return;
    }
    for(let index = 0; index < select.length; index++) {
        const allOptions = select.options[index].value
        if(!allOptions.includes('-OTC')){
            selectedPairs.push(allOptions)
        }
    }
}

const updateSignalCatalogDays = (value) => {
    chosenCatalogDays = parseInt(value)
}

catalogButton.addEventListener('click', async() => {
    getAllAssets()
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
    const tableContainer = document.querySelector('.table-container')
    let isConnectionError = false

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

    if(result.length > 0){
        result.length = 0
        tableContainer.innerHTML = ''
        tableContainer.classList.remove('border-light-color')
    }

    disableTheCatalogButton()

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
            result = [...data.signals]
        } catch {
            isConnectionError = true
            showAlert('danger')
            removeAlert()
            return enableTheCatalogButton()
        }
    }

    await fetchCatalog()
    const isResultEmpty = result.length === 0
    if(isResultEmpty && !isConnectionError){
        showAlert('information')
        removeAlert()
        return enableTheCatalogButton()
    }
    if(isConnectionError){
        return;
    }
    showResult()
    enableTheCatalogButton()
})

const returnCurrentDate = () => {
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  
  return `${day}/${month}`;
};

function showAlert(type){
    const body = document.querySelector('body')
    const alert = {
        information: `<div class="alert alert-info" role="alert">
        <p>No signal found!</p>
      </div>`,
      danger: `<div class="alert alert-danger" role="alert">
      <p>It was not possible to connect!</p>
    </div>`,
    successCopied: `<div class="alert alert-success" role="alert">
    <p>Copied!</p>
    </div>`
    }

    body.addChildren(alert[type])
}

function showResult(){
    const tableContainer = document.querySelector('.table-container')
    tableContainer.classList.add('border-light-color')
    const timeframe = parseInt(timeframeSelect.value)
    const currentDate = returnCurrentDate()

    const content = `<header id="table-header">
    <div class="form-check">
      <input class="form-check-input select-checkbox" title="Check/Uncheck all" onChange="handleAllCheckbox()" type="checkbox" value="" id="flexCheckIndeterminate">
    </div>
  </header>
  <div class="table-area mt-5">
    <table class="table table-striped">
      <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Date</th>
            <th scope="col">Asset</th>
            <th scope="col">Hour</th>
            <th scope="col">Direction</th>
            <th scope="col">Timeframe</th>
          </tr>
      </thead>
      <tbody id="table-field">

      </tbody>

    </table>
  </div>
  <small>Total signs: ${result.length}</small>`

  tableContainer.addChildren(content)
  const tableField = document.querySelector('#table-field')

  result.map((item, index) => {
    const regex = /\b(\w{3})(\w*)/g;
    const assets = item[0].replace(regex, (_, threeLetters, restOfWord) => {
        return threeLetters + '/' + restOfWord;
    });
    const splitHour = item[2].split(':')
    const hour = splitHour[0]
    const minute = splitHour[1]
    const time = `${hour}:${minute}`
    const direction = item[3]
    const field = `<tr class="line-data" data-checked="false">
        <th scope="row">
          <input class="form-check-input checkbox-option" title="Check" onChange="handleCheckbox(${index})" type="checkbox" value="" id="flexCheckIndeterminate">
      </th>
      <td>${currentDate}</td>
      <td>${assets}</td>
      <td>${time}</td>
      <td>${direction}</td>
      <td>${timeframe}M</td>
    </tr>`
    tableField.addChildren(field)
  })
}

function handleCheckbox(lineIndex) {
    const selectCheckbox = document.querySelector('.select-checkbox')
    const isSelectAllCheckbox = selectCheckbox.classList.contains('select-all-checkbox')
    const checkboxOption = document.querySelectorAll('.checkbox-option')
    const lineData = document.querySelectorAll('.line-data')
    const isMarked = (lineData[lineIndex].dataset.checked === 'true')? true : false
    const isThereaMarkedCheckbox = [...checkboxOption].some(item => item.checked === true)
    if(!isMarked){
        lineData[lineIndex].dataset.checked = 'true'
    }else {
        lineData[lineIndex].dataset.checked = 'false'
    }
    if(!isThereaMarkedCheckbox){
        selectCheckbox.removeAttribute('checked')
        selectCheckbox.classList.remove('select-all-checkbox')
        return removeHeaderButton()
    }
    if(!isSelectAllCheckbox){
        selectCheckbox.setAttribute('checked', 'true')
        selectCheckbox.classList.add('select-all-checkbox')
        addHeaderButton()
    }
}

function handleAllCheckbox() {
    const selectCheckbox = document.querySelector('.select-checkbox')
    const checkboxOption = document.querySelectorAll('.checkbox-option')
    const lineData = document.querySelectorAll('.line-data')
    const isThereaMarkedCheckbox = [...checkboxOption].some(item => item.checked === true)

    const selectAllCheckbox = () => {
        selectCheckbox.setAttribute('checked', 'true')
        selectCheckbox.classList.add('select-all-checkbox')
        checkboxOption.forEach(item => item.checked = true)
        lineData.forEach(item => item.dataset.checked = 'true')
        addHeaderButton()
    }
    const uncheckAllCheckbox = () => {
        selectCheckbox.removeAttribute('checked')
        selectCheckbox.classList.remove('select-all-checkbox')
        checkboxOption.forEach(item => item.checked = false)
        lineData.forEach(item => item.dataset.checked = 'false')
        removeHeaderButton()
    }
    if(isThereaMarkedCheckbox){
        return uncheckAllCheckbox()
    }
    return selectAllCheckbox()
}

function removeSelectedItem(){
    const lineData = [...document.querySelectorAll('.line-data')]
    const selectCheckbox = document.querySelector('.select-checkbox')
    const tableContainer = document.querySelector('.table-container')
    lineData.forEach((item) => {
        const isMarked = (item.dataset.checked === 'true')? true : false
        if(isMarked){
            item.parentNode.removeChild(item)
        }
    })
    selectCheckbox.removeAttribute('checked')
    selectCheckbox.classList.remove('select-all-checkbox')
    removeHeaderButton()
    tableContainer.innerHTML = ''
    tableContainer.classList.remove('border-light-color')
}

function copyItems(){
    const lineData = [...document.querySelectorAll('.line-data')]
    const direction = directionSelect.value
    const timeframe = parseInt(timeframeSelect.value)
    const martingaleSelected = parseInt(martingaleSelect.value)
    const isPairOTC = selectedPairs.every(value => value.includes('-OTC'))
    const selectCheckbox = document.querySelector('.select-checkbox')
    const checkboxOption = document.querySelectorAll('.checkbox-option')
    const market = (isPairOTC)? 'OTC Market': 'Normal'
    let data = ''
    let text =
    `Market: ${market}
Timeframe: M${timeframe}
Direction: ${direction}
Martingale: G${martingaleSelected}
Number of days: ${chosenCatalogDays}
Percentage: ${accuracy}%`

    lineData.forEach((item) => {
        const column = item.querySelectorAll('td')
        const isMarked = (item.dataset.checked === 'true')? true : false

        if(!isMarked){
            return;
        }
        column.forEach((content) => data += `${content.innerText}, `)
        text += `\n${data}`
        data = ''
    })

    text +=`\nBinaryTraders.net`
    text +=`\nTools for the binary options market.`

    navigator.clipboard.writeText(text);
    showAlert('successCopied')
    selectCheckbox.checked = false
    selectCheckbox.classList.remove('select-all-checkbox')
    checkboxOption.forEach(item => item.checked = false)
    removeHeaderButton()
    removeAlert()
}

const addHeaderButton = () => {
    const tableHeader = document.querySelector('#table-header')
    const buttons = `<button class="delete-button" title="Delete" onClick="removeSelectedItem()">
    <svg class="bi bi-trash delete-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="#0d6efd" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
    </svg>
  </button>
  <button class="copy-button" title="Copy" onClick="copyItems()">
    <svg class="bi bi-clipboard I-icon copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="#0d6efd" viewBox="0 0 16 16">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
  </button>`

  tableHeader.addChildren(buttons)
}

const removeHeaderButton = () => {
    const tableHeader = document.querySelector('#table-header')
    const deleteButton = document.querySelector('.delete-button')
    const copyButton = document.querySelector('.copy-button')
    tableHeader.removeChild(deleteButton);
    tableHeader.removeChild(copyButton);
}

const enableTheCatalogButton = () => {
    catalogButton.classList.remove('disabled')
    catalogButton.innerText = 'Catalog'
}

const disableTheCatalogButton = () => {
    catalogButton.classList.add('disabled')
    catalogButton.innerText = 'Loading'
}

const removeAlert = () => {
    const alert = document.querySelector('.alert')
    const oneSecondAndaHalf = 1500

    setTimeout(() => alert.parentNode.removeChild(alert), oneSecondAndaHalf)
}

HTMLElement.prototype.addChildren = function(html){
    const dom = new DOMParser().parseFromString('<template>'+html+'</template>', 'text/html').head;
    this.appendChild(dom.firstElementChild.content);
}
