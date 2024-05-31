document.getElementById("filterInput").addEventListener("input", function() {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll("#itemList li");

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
