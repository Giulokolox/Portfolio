// // Funzione generica per aggiornare il maxHeight di un elemento
// function updateMaxHeight(el) {
//     if (!el) return;
//     el.style.maxHeight = el.scrollHeight + "px";
// }

// // Funzione generica per chiudere un elemento
// function collapseElement(el) {
//     if (!el) return;
//     el.style.maxHeight = null;
// }

// // ==================== TOGGLE GENERICO ====================
// function toggleElement(button, contentSelector = null) {
//     // Se specificato, cerca il contenuto con il selector, altrimenti usa nextElementSibling
//     const content = contentSelector ? button.closest(contentSelector) : button.nextElementSibling;
//     if (!content) return;

//     const isOpen = content.classList.contains("open");
//     content.classList.toggle("open");

//     // Aggiorna maxHeight dinamicamente
//     content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";

//     // Se il button ha data-open/data-close, cambia il testo
//     if (button.dataset.open && button.dataset.close) {
//         button.textContent = isOpen ? button.dataset.open : button.dataset.close;
//     }

//     // Aggiorna tutti i parent fino al .card o .project-content
//     let parent = content.parentElement;
//     while (parent) {
//         if (parent.classList.contains("sub-inner") || parent.classList.contains("project-content") || parent.classList.contains("card")) {
//             parent.style.maxHeight = parent.scrollHeight + "px";
//         }
//         parent = parent.parentElement;
//     }
// }

// // ==================== FUNZIONI SPECIFICHE ====================
// function toggleCode(button) {
//     const parent = button.closest(".sub-inner");
//     if (!parent) return;
//     const box = parent.querySelector(".code-box");
//     if (!box) return;
//     toggleElement(button, box);
// }

// function toggleSubSection(button) {
//     const content = button.nextElementSibling;
//     toggleElement(button, content);
// }

// function toggleSection(button) {
//     const content = button.nextElementSibling;
//     toggleElement(button, content);
// }
// // ==================== FILTRI PROGETTI ====================
// function showProjects(type) {
//     const sections = ["unity", "unreal", "c"];
//     sections.forEach(section => {
//         const el = document.getElementById(`${section}-projects`);
//         const btn = document.querySelector(`.project-filters button[onclick*="${section}"]`);
//         if (el) el.style.display = section === type ? "block" : "none";
//         if (btn) btn.classList.toggle("active", section === type);
//     });
// }

// // ==================== FUNZIONI GENERICHE ====================

// // Imposta maxHeight dinamico per un elemento
// function expand(el) {
//     if (!el) return;
//     el.style.maxHeight = el.scrollHeight + "px";
// }

// // Chiude un elemento
// function collapse(el) {
//     if (!el) return;
//     el.style.maxHeight = null;
// }

// // Aggiorna maxHeight di tutti i parent aperti fino al container principale
// function updateParentHeights(el) {
//     let parent = el.parentElement;
//     while (parent) {
//         if (parent.classList.contains("sub-inner") || parent.classList.contains("project-content")) {
//             expand(parent);
//         }
//         parent = parent.parentElement;
//     }
// }

// ================= OPEN PROJECT =================
function toggleProject(button) {
    const content = button.nextElementSibling;
    if (!content) return;

    content.classList.toggle("open");
    button.textContent = content.classList.contains("open")
        ? "Close Project"
        : "Open Project";
}

// ================= SUB SECTION =================
function toggleSubSection(button) {
    const content = button.nextElementSibling;
    if (!content) return;

    content.classList.toggle("open");
}

// ================= CODE =================
function toggleCode(button) {
    const codeBox = button.nextElementSibling;
    if (!codeBox || !codeBox.classList.contains("code-box")) return;

    const isOpen = codeBox.classList.contains("open");

    if (isOpen) {
        codeBox.classList.remove("open");
        button.textContent = "Show Code";
    } else {
        codeBox.classList.add("open");
        button.textContent = "Hide Code";
    }
}

// ================= FILTRI =================
// function showProjects(type) {
//     const sections = ["unity", "unreal", "c"];
//     sections.forEach(section => {
//         const el = document.getElementById(`${section}-projects`);
//         const btn = document.querySelector(
//             `.project-filters button[onclick*="${section}"]`
//         );

//         if (el) el.style.display = section === type ? "block" : "none";
//         if (btn) btn.classList.toggle("active", section === type);
//     });
// }

function showProjects(type) {
    const sections = ["unity", "unreal", "c"];
    
    sections.forEach(section => {
        const el = document.getElementById(`${section}-projects`);
        const btn = document.querySelector(`.project-filters button[data-type="${section}"]`);

        if (el) el.style.display = section === type ? "block" : "none";
        if (btn) btn.classList.toggle("active", section === type);
    });
}