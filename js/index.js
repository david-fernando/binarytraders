function changeUrlAccordingToTheLanguage(){
  const language = window.navigator.language;

  const returnUrlAccordingToTheLanguage = {
      'pt':'https://pt.binarytraders.net',
      'pt-BR':'https://pt.binarytraders.net',
      'de':'https://de.binarytraders.net/',
      'it':'https://it.binarytraders.net/',
      'es':'https://es.binarytraders.net/',
      'en':'https://en.binarytraders.net/',
      'fr':'https://fr.binarytraders.net/',
  }

  const url = returnUrlAccordingToTheLanguage[language] || 'https://en.binarytraders.net/'

  //O comentário abaixo só está ali para evitar o redirecionamento. Remova esse e o comentário abaixo depois de pronto, ou quando for necessário.
  // window.location.href = url;
}

function showMoreText(){
  const button = document.querySelector('.showMore')
  const moreText = document.getElementById('more-text')
  const ellipsis = document.getElementById('ellipsis')
  const showMoreTextButton = document.querySelector('.showMoreTextButton')

  button.addEventListener('click', () => {
    const isOpenShowMore = (moreText.style.display === 'block')? true : false    
      if(!isOpenShowMore){
        moreText.style.display = 'block'
        ellipsis.style.display = 'none'
        return showMoreTextButton.innerHTML = 'Show less'
      }

      moreText.style.display = 'none'
      ellipsis.style.display = 'inherit'
      return showMoreTextButton.innerHTML = 'Show more'
  })
}

// function openCookiesSettings() {
//   const button = document.querySelector('.manage-cookies')
//   const cookiesModal = document.querySelector('.cc-nb-changep')

//   button.addEventListener('click', ()=>{
//     console.log('oi')
//     console.log(cookiesModal)
//     cookiesModal.setAttribute('style', 'display:block')
//   })
// }

showMoreText()
changeUrlAccordingToTheLanguage()
// openCookiesSettings()