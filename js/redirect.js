function changeUrlAccordingToTheLanguage(){
  const language = window.navigator.language;

  if (language === 'en', !language in returnUrlAccordingToTheLanguage) {
    return;
  }

  const returnUrlAccordingToTheLanguage = {
      'pt':'https://binarytraders.vercel.app/pt',
      'pt-BR':'https://binarytraders.vercel.app/pt',
      'es':'https://binarytraders.vercel.app/es',
  }

  const url = returnUrlAccordingToTheLanguage[language] || 'https://binarytraders.vercel.app'
  
  window.location.href = url;
}

changeUrlAccordingToTheLanguage()