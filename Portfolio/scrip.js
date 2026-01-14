function toggleCode(button) {
    const codeBox = button.nextElementSibling;

    if (codeBox.style.maxHeight) {
        codeBox.style.maxHeight = null;
        button.textContent = "Mostra codice";
    } else {
        codeBox.style.maxHeight = codeBox.scrollHeight + "px";
        button.textContent = "Nascondi codice";
    }
}