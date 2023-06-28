function changeUrlAccordingToTheLanguage(){
  const language = window.navigator.language;

  const returnUrlAccordingToTheLanguage = {
      'pt':'https://binarytraders.vercel.app/pt',
      'pt-BR':'https://binarytraders.vercel.app/pt',
      'es':'https://binarytraders.vercel.app/es',
      'en':'https://binarytraders.vercel.app/en',
  }

  const url = returnUrlAccordingToTheLanguage[language] || 'https://binarytraders.vercel.app/en'
  
  window.location.href = url;
}

changeUrlAccordingToTheLanguage()