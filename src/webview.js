const backButton = document.getElementById("history-back-button");
const forwardButton = document.getElementById("history-forward-button");
const refreshButton = document.getElementById("history-refresh-button");

const urlForm = document.getElementById("wbv-location-section");
const urlInput = document.querySelector("[name='wbv-location']")
const urlGoButton = document.getElementById("wbv-location-go");

const wbv = document.querySelector("[name='floating-webview']");

console.log(backButton, forwardButton, wbv)

const handleGoBack = (wbv) => {
  console.log("going forward");
  if (wbv.canGoBack) {
    wbv.back();
  }
}

const handleGoForward = (wbv) => {
  console.log("going back");
  if (wbv.canGoForward) {
    wbv.forward();
  }
}

const handleRefresh = (wbv) => {
  console.log("refreshing");
  wbv.reload();
}

const handleGo = (wbv) => {
  const url = urlInput.value;

  if (url != null)
    wbv.src = checkHttps(url);
}

backButton.addEventListener('click', () => {
  handleGoBack(wbv);
})

forwardButton.addEventListener('click', () => {
  handleGoForward(wbv);
})

refreshButton.addEventListener('click', () => {
  handleRefresh(wbv);
})

urlForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleGo(wbv);
})