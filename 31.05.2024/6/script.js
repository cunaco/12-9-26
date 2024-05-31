function addOption() {
    const dropdown = document.getElementById("dropdown");
    const option = document.createElement("option");
    option.text = "Новая опция";
    dropdown.add(option);
}
