export function themeSwitcher() {
    if (document.querySelector("main").dataset.theme === "dark") {
        document.querySelector(":root").style.setProperty("--bg-color", "#f1f5f9");
        document.querySelector(":root").style.setProperty("--border-color", "#aaa");
        document.querySelector(":root").style.setProperty("--font-color", "#212529");
        document.querySelector(":root").style.setProperty("--primary-color", "#26834a");
        document.querySelector("main").dataset.theme = "light";
    } else {
        document.querySelector(":root").style.setProperty("--bg-color", "#212529");
        document.querySelector(":root").style.setProperty("--border-color", "#666");
        document.querySelector(":root").style.setProperty("--font-color", "#f1f5f9");
        document.querySelector(":root").style.setProperty("--primary-color", "#4dff91");
        document.querySelector("main").dataset.theme = "dark";
    };
};
