function changeUrlAccordingToTheLanguage(){
  const language = window.navigator.language;
  
  function getCookie(cookieName) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === cookieName) {
        return cookie[1];
      }
    }
    return null;
  }
  const chosenLanguage = getCookie('chosen-language') || ''

  console.log(chosenLanguage)

  const returnUrlAccordingToTheLanguage = {
      'pt':'https://pt.binarytraders.net',
      'pt-BR':'https://pt.binarytraders.net',
      'es':'https://es.binarytraders.net',
  }

  if (language === 'en' || !(language in returnUrlAccordingToTheLanguage)) {
    return;
  } 

  if(chosenLanguage !== 'english'){
    const url = returnUrlAccordingToTheLanguage[language] || 'https://binarytraders.net'
    window.location.href = url;
  }

  return;
}

changeUrlAccordingToTheLanguage()