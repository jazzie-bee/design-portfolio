const tabs = document.querySelectorAll(".tablinks");
const panels = document.querySelectorAll(".tabcontent");

function openTab(name) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === name;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive);
  });
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === name);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => openTab(tab.dataset.tab));
});