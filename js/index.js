const body = document.body.innerHTML.replace(/\n/g, '').replace(/x3C/g, '<')
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
    console.log('oi')
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

function openManegeCookies() {
    document.body.innerHTML += `<div class="termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-en" id="termsfeed-com---preferences-center" role="dialog" aria-labelledby="cc-pc-head-title-headline" tabindex="-1"><div class="termsfeed-com---pc-dialog"><div class="cc-pc-container"><div class="cc-pc-head"><div class="cc-pc-head-title"><p class="cc-pc-head-title-text">https://binarytraders.net/</p><p class="cc-pc-head-title-headline" id="cc-pc-head-title-headline">Cookies Preferences Center</p></div><div class="cc-pc-head-lang"><select class="cc-pc-head-lang-select"><option value="en" onClick="changeLanguage('en')">English</option><option value="en_gb" onClick="changeLanguage('en_gb')">English (UK)</option><option value="de" onClick="changeLanguage('de')">German</option><option value="fr" onClick="changeLanguage('fr')">French</option><option value="es" onClick="changeLanguage('es')">Spanish</option><option value="ca_es">Catalan</option><option value="it">Italian</option><option value="sv">Swedish</option><option value="nl">Dutch</option><option value="pt">Portuguese</option><option value="fi">Finnish</option><option value="hu">Hungarian</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="ro">Romanian</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="pl">Polish</option><option value="sr">Serbian</option><option value="lt">Lithuanian</option><option value="lv">Latvian</option><option value="ru">Russian</option><option value="no">Norwegian</option><option value="bg">Bulgarian</option><option value="el">Greek</option><option value="he">Hebrew</option><option value="mk">Macedonian</option><option value="cy">Welsh</option><option value="ja">Japanese</option><option value="ar">Arabic</option><option value="tr">Turkish</option><option value="zh_tw">Traditional Chinese (zh-TW)</option><option value="oc">Occitan</option></select><button class="cc-pc-head-close" onClick='closeManegeCookies()'>✕</button></div></div><div class="cc-cp-body"><ul class="cc-cp-body-tabs" role="tablist" aria-label="Menu"><li class="cc-cp-body-tabs-item" active="true" onClick="changeTab(0)"><button class="cc-cp-body-tabs-item-link" id="title_your_privacy" role="tab" aria-selected="true" aria-controls="content_your_privacy" tabindex="0" t="content_your_privacy">Your privacy</button></li><li class="cc-cp-body-tabs-item" active="false" onClick="changeTab(1)" ><button class="cc-cp-body-tabs-item-link" id="title_strictly-necessary" role="tab" aria-selected="false" aria-controls="content_strictly-necessary" tabindex="-1" t="content_strictly-necessary">Strictly necessary cookies</button></li><li class="cc-cp-body-tabs-item" active="false" onClick="changeTab(2)"><button class="cc-cp-body-tabs-item-link" id="title_functionality" role="tab" aria-selected="false" aria-controls="content_functionality" tabindex="-1" t="content_functionality">Functionality cookies</button></li><li class="cc-cp-body-tabs-item" active="false" onClick="changeTab(3)"><button class="cc-cp-body-tabs-item-link" id="title_tracking" role="tab" aria-selected="false" aria-controls="content_tracking" tabindex="-1" t="content_tracking">Tracking cookies</button></li><li class="cc-cp-body-tabs-item" active="false" onClick="changeTab(4)" ><button class="cc-cp-body-tabs-item-link" id="title_targeting" role="tab" aria-selected="false" aria-controls="content_targeting" tabindex="-1" t="content_targeting">Targeting and advertising cookies</button></li><li class="cc-cp-body-tabs-item" active="false" onClick="changeTab(5)" ><button class="cc-cp-body-tabs-item-link" id="title_more_information" role="tab" aria-selected="false" aria-controls="content_more_information" tabindex="-1" t="content_more_information">More information</button></li></ul><div class="cc-cp-body-content"><div class="cc-cp-body-content-entry" id="content_your_privacy" role="tabpanel" aria-labelledby="title_your_privacy" tabindex="0" content_layout="content_your_privacy" active="true"><p class="cc-cp-body-content-entry-title">Your privacy is important to us</p><p class="cc-cp-body-content-entry-text">Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).</p><p class="cc-cp-body-content-entry-text">You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.</p></div><div class="cc-cp-body-content-entry" id="content_strictly-necessary" role="tabpanel" aria-labelledby="title_strictly-necessary" hidden="" tabindex="0" content_layout="content_strictly-necessary" active="false"><p class="cc-cp-body-content-entry-title">Strictly necessary cookies</p><p class="cc-cp-body-content-entry-text">These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.</p><p class="cc-cp-body-content-entry-text">Without these cookies, we cannot provide you certain services on our website.</p><div class="cc-custom-checkbox"><input cookie_consent_toggler="true" type="checkbox" checked="checked" aria-checked="true" disabled="disabled" class="cc-custom-checkbox" id="strictly-necessary" name="strictly-necessary" aria-labelledby="strictly-necessary_label" tabindex="0"><label for="strictly-necessary" id="strictly-necessary_label">Always active</label></div></div><div class="cc-cp-body-content-entry" id="content_functionality" role="tabpanel" aria-labelledby="title_functionality" hidden="" tabindex="0" content_layout="content_functionality" active="false"><p class="cc-cp-body-content-entry-title">Functionality cookies</p><p class="cc-cp-body-content-entry-text">These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.</p><p class="cc-cp-body-content-entry-text">For example, we may use functionality cookies to remember your language preferences or remember your login details.</p><div class="cc-custom-checkbox"><input cookie_consent_toggler="true" type="checkbox" class="cc-custom-checkbox" id="functionality" name="functionality" aria-labelledby="functionality_label" checked="checked" aria-checked="true"><label for="functionality" id="functionality_label" class="is-active">Active</label></div></div><div class="cc-cp-body-content-entry" id="content_tracking" role="tabpanel" aria-labelledby="title_tracking" hidden="" tabindex="0" content_layout="content_tracking" active="false"><p class="cc-cp-body-content-entry-title">Tracking cookies</p><p class="cc-cp-body-content-entry-text">These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.</p><p class="cc-cp-body-content-entry-text">For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you.</p><p class="cc-cp-body-content-entry-text">The information collected through these tracking and performance cookies do not identify any individual visitor.</p><div class="cc-custom-checkbox"><input cookie_consent_toggler="true" type="checkbox" class="cc-custom-checkbox" id="tracking" name="tracking" aria-labelledby="tracking_label" checked="checked" aria-checked="true"><label for="tracking" id="tracking_label" class="is-active">Active</label></div></div><div class="cc-cp-body-content-entry" id="content_targeting" role="tabpanel" aria-labelledby="title_targeting" hidden="" tabindex="0" content_layout="content_targeting" active="false"><p class="cc-cp-body-content-entry-title">Targeting and advertising cookies</p><p class="cc-cp-body-content-entry-text">These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.</p><p class="cc-cp-body-content-entry-text">These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser's activities across their network of websites.</p><p class="cc-cp-body-content-entry-text">If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.</p><div class="cc-custom-checkbox"><input cookie_consent_toggler="true" type="checkbox" class="cc-custom-checkbox" id="targeting" name="targeting" aria-labelledby="targeting_label" checked="checked" aria-checked="true"><label for="targeting" id="targeting_label" class="is-active">Active</label></div></div><div class="cc-cp-body-content-entry" id="content_more_information" role="tabpanel" aria-labelledby="title_more_information" hidden="" tabindex="0" content_layout="content_more_information" active="false"><p class="cc-cp-body-content-entry-title">More information</p><p class="cc-cp-body-content-entry-text">For any queries in relation to our policy on cookies and your choices, please contact us.</p><p class="cc-cp-body-content-entry-text">To find out more, please visit our <a href="https://binarytraders.net/privacy-policy.html" target="_blank">Privacy Policy</a>.</p></div></div></div><div class="cc-cp-foot"><div class="cc-cp-foot-byline">Cookie Consent by <a href="https://www.termsfeed.com/cookie-consent/" target="_blank">TermsFeed</a></div><div class="cc-cp-foot-button"><button class="cc-cp-foot-save" onClick="closeManegeCookies()">Save my preferences</button></div></div></div></div></div>`
}

function closeManegeCookies() {
  const cookieModal = document.querySelector('#termsfeed-com---preferences-center')
  cookieModal.remove()
}

function changeTab(itemNumber) {
  const tabs = document.querySelectorAll('.cc-cp-body-tabs-item')
  const tabsLink = document.querySelectorAll('.cc-cp-body-tabs-item-link')
  const bodyContent = document.querySelectorAll('.cc-cp-body-content-entry')

  const isTabActive = (index) => JSON.parse(tabs[index].getAttribute('active'))

  for(let index = 0; index < tabs.length; index++){
    const isActive = isTabActive(index)
    if(isActive && index !== itemNumber) {
      tabs[index].setAttribute('active', 'false')
      tabsLink[index].setAttribute('aria-selected', 'false')
      tabsLink[index].setAttribute('tabindex', '-1')
      bodyContent[index].setAttribute('active', 'false')
      bodyContent[index].setAttribute('hidden', 'true')
    }
    if(!isActive && index === itemNumber){
      tabs[index].setAttribute('active', 'true')
      tabsLink[index].setAttribute('aria-selected', 'true')
      tabsLink[index].setAttribute('tabindex', '0')
      bodyContent[index].setAttribute('active', 'true')
      bodyContent[index].removeAttribute('hidden')
    }
  }
  
}

function changeLanguage(language){
  console.log('oi')
  const cookieModal = document.getElementById('termsfeed-com---preferences-center')

  classLanguages = {
    'en': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-en',
    'en_gb': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-en_gb',
    'de': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-de',
    'fr': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-fr',
    'es': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-es',
    'ca_es': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-ca_es',
    'it': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-it',
    'sv': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-sv',
    'nl': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-nl',
    'pt': 'termsfeed-com---pc-overlay termsfeed-com---palette-light termsfeed-com---reset termsfeed-com---is-visible termsfeed-com---lang-pt'
  }

  console.log(cookieModal.className)

  // cookieModal.className = classLanguages[language]
}

showMoreText()
changeUrlAccordingToTheLanguage()
textFit(document.getElementsByClassName('header-text'), {minFontSize:34, maxFontSize:42})
