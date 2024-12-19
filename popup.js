const moods = {
    happy: "https://via.placeholder.com/800x600/ffcc00/ffffff?text=Happy+Mood",
    calm: "https://via.placeholder.com/800x600/00ccff/ffffff?text=Calm+Mood",
    focused: "https://via.placeholder.com/800x600/ff6600/ffffff?text=Focused+Mood",
    relaxed: "https://via.placeholder.com/800x600/00cc66/ffffff?text=Relaxed+Mood",
  };
  
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.id;
      const wallpaperURL = moods[mood];
      document.getElementById("wallpaper-preview").style.backgroundImage = `url('${wallpaperURL}')`;
  
      // Save the selected wallpaper
      chrome.storage.sync.set({ wallpaper: wallpaperURL }, () => {
        console.log(`${mood} wallpaper saved!`);
      });
    });
  });
  