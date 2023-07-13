function loadHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      const element = document.getElementById(elementId);
      element.innerHTML = html;
    });
}

loadHTML('trendindicator.html', 'trend-indicator');
// loadHTML('trendindicatormobile.html', 'trend-indicator-mobile');