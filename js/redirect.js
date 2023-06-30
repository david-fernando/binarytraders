function changeUrlAccordingToTheLanguage(){
  const language = window.navigator.language;
  const chosenLanguage = localStorage.getItem('chosen-language') || ''

  const returnUrlAccordingToTheLanguage = {
      'pt':'https://pt.binarytraders.net',
      'pt-BR':'https://pt.binarytraders.net',
      'es':'https://es.binarytraders.net',
  }

  if (language === 'en' || !(language in returnUrlAccordingToTheLanguage) || chosenLanguage === 'english') {
    return;
  }

  const url = returnUrlAccordingToTheLanguage[language] || 'https://binarytraders.net'
  
  window.location.href = url;
}

changeUrlAccordingToTheLanguage()