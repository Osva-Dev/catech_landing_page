async function loadComponent(path, elementId) {
  const response = await fetch(path);

  const html = await response.text();

  document.getElementById(elementId).innerHTML = html;
}

const components = [
  {
    path: "components/navbar/navbar.html",
    id: "navbar",
  },
  {
    path: "components/hero/hero.html",
    id: "hero",
  },
  {
    path: "components/features/features.html",
    id: "features",
  },
  {
    path: "components/footer/footer.html",
    id: "footer",
  },
];

components.forEach((component) => {
  loadComponent(component.path, component.id);
});
