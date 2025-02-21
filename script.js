document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header.html", "header");
    loadComponent("footer.html", "footer");
});

function loadComponent(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}
