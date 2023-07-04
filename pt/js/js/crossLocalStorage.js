window.onload = () => {
  xdLocalStorage.init(
    {
      iframeUrl:'https://binarytraders.net/',
      initCallback: function () {
          console.log('Got iframe ready');
      }
    }
  );
}