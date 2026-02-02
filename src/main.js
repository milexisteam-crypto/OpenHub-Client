const isDarkMode = () => 
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if(isDarkMode()) {
  const root = document.documentElement;
  
  root.style.setProperty("--background-color", "#1e1e1e");
  root.style.setProperty("--surface-color", "#242424");
  root.style.setProperty("--text-color", "#ffffff");
  root.style.setProperty("--secondary-text-color", "#deddda");
  root.style.setProperty("--border-color", "#3d3846");
  root.style.setProperty("--hover-color", "#303030");
  root.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.3)");
  root.style.setProperty("--accent-color", "#3584e4");
  root.style.setProperty("--accent-hover", "#4a90e8");
  root.style.setProperty("--accent-active", "#2f72c4");
  
  root.style.setProperty("--nav-background", "#262626");
  root.style.setProperty("--search-background", "#1a1a1a");
  root.style.setProperty("--search-border", "#464646");
  root.style.setProperty("--search-hover-background", "#202020");
  root.style.setProperty("--search-hover-border", "#5e5c64");
  root.style.setProperty("--placeholder-color", "#9a9996");
  root.style.setProperty("--icon-color", "#c0bfbc");
}