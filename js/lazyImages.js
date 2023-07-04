window.onload = ()=>{
  bannerLazy = document.querySelector('.banner-lazy')
  bannerMobileLazy = document.querySelector('.banner-mobile-lazy')
  windowWidth = window.innerWidth

  if(windowWidth <= 1006){
    return bannerMobileLazy.src = bannerMobileLazy.dataset.src
  }

  return bannerLazy.src = bannerLazy.dataset.src
}