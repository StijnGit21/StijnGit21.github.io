document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header.html", "header");
    loadComponent("footer.html", "footer");
});

function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}
