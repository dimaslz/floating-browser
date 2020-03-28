/* Opens floating window */
const openWindow = () => {
  chrome.app.window.create("static/index.html", {
    //frame: "none", TODO: Need to create custom frame. Will through navigation in there potentially.
    alwaysOnTop: true,
    resizable: true,
    width: 500,
    height: 560,
  });
} 

