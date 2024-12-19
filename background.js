chrome.tabs.onCreated.addListener((tab) => {
    chrome.storage.sync.get("wallpaper", (data) => {
      if (data.wallpaper) {
        chrome.tabs.executeScript(tab.id, {
          code: `
            document.body.style.backgroundImage = "url('${data.wallpaper}')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
          `,
        });
      }
    });
  });
  