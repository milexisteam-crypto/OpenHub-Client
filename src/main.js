const isDarkMode = () => 
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if(!isDarkMode){
    const root = document.documentElement;
    root.style.setProperty("--background-color", "#333333");
    root.style.setProperty("--surface-color", "#262626")
    root.style.setProperty("--text-color", 'rgba(255,255,255, 0.5)');
    root.style.setProperty("--nav-shadow", "0.4");
    root.style.setProperty("--hover-shadow", "0.95");
}