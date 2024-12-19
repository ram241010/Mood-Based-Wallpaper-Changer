chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.wallpaper) {
    document.body.style.backgroundImage = `url('${request.wallpaper}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
});
