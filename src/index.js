const handleAppLaunched = (event) => {
  // get current tab info here and use url

  openWindow(/* current tab url here */);
}

chrome.app.runtime.onLaunched.addListener(openWindow);