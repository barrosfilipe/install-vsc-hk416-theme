document.onreadystatechange = () =>
  document.readyState === "complete" &&
  setTimeout(() => document.body.classList.add("wallpaper"), 100);
