function changeUrlAccordingToTheLanguage(){
  const language = window.navigator.language;
  const chosenLanguage = localStorage.getItem('chosen-language') || ''

  const returnUrlAccordingToTheLanguage = {
      'pt':'https://binarytraders.vercel.app/pt',
      'pt-BR':'http://localhost:5500/pt',
      'es':'https://binarytraders.vercel.app/es',
  }

  if (language === 'en' || !(language in returnUrlAccordingToTheLanguage) || chosenLanguage === 'english') {
    return;
  }

  const url = returnUrlAccordingToTheLanguage[language] || 'https://binarytraders.vercel.app'
  
  window.location.href = url;
}

changeUrlAccordingToTheLanguage()