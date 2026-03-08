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
    path: "components/problem/problem.html",
    id: "problem",
  },
  {
    path: "components/comparison/comparison.html",
    id: "comparison",
  },
  {
    path: "components/features/features.html",
    id: "features",
  },
  {
    path: "components/benefits/benefits.html",
    id: "benefits",
  },
  {
    path: "components/packages/packages.html",
    id: "packages",
  },
  {
    path: "components/process/process.html",
    id: "process",
  },
  {
    path: "components/faq/faq.html",
    id: "faq",
  },
  {
    path: "components/form/form.html",
    id: "form",
  },
  {
    path: "components/footer/footer.html",
    id: "footer",
  },
];

components.forEach((component) => {
  loadComponent(component.path, component.id);
});
