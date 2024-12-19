chrome.tabs.onCreated.addListener((tab) => {
  chrome.storage.sync.get("wallpaper", (data) => {
    if (data.wallpaper) {
      chrome.tabs.sendMessage(tab.id, { wallpaper: data.wallpaper });
    }
  });
});
