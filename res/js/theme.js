let root = document.querySelector(":root");

document.getElementById("dark-mode").onclick = function () {
    root.style.setProperty("--theme-color-nav", "rgb(73, 73, 73)");
    root.style.setProperty("--theme-color-back", "#131313");
    root.style.setProperty("--theme-color-keys", "#0E4F9E");
    root.style.setProperty("--theme-color-keys-secondary", "#8FB3E0");
    root.style.setProperty("--theme-color-text", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-burger", "rgb(255, 255, 255)");
};

document.getElementById("light-mode").onclick = function () {
    root.style.setProperty("--theme-color-nav", "rgb(213, 213, 213)");
    root.style.setProperty("--theme-color-back", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-keys", "rgb(220, 220, 220)");
    root.style.setProperty("--theme-color-keys-secondary", "rgb(191, 191, 191)");
    root.style.setProperty("--theme-color-text", "rgb(0, 0, 0)");
    root.style.setProperty("--theme-color-burger", "rgb(64, 64, 64)");
};

// --theme-color-nav: #494949;
//     --theme-color-back: #131313;
//     --theme-color-keys: #0e4f9e;
//     --theme-color-keys-secondary: #8fb3e0;

//     --theme-color-text: #fafcff;
//     --theme-color-burger: #f1f1f1;
