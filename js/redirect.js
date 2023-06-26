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

changeUrlAccordingToTheLanguage()