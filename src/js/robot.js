const items = document.querySelectorAll(".accordion-top button");

function toggleAccordion() {
    const itemsToggle = this.getAttribute("aria-expanded");

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded","false");
    }

    if (itemsToggle == "false") {
        this.setAttribute("aria-expanded", "true");
    }

}

items.forEach(item=>item.addEventListener('click', toggleAccordion))