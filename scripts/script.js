async function loadComponent(path, elementId) {
  const response = await fetch(path);

  const html = await response.text();

  document.getElementById(elementId).innerHTML = html;
}

const sections = [
  {
    path: "layouts/header/header.html",
    id: "header",
  },
  {
    path: "sections/hero/hero.html",
    id: "hero",
  },
  {
    path: "sections/problem/problem.html",
    id: "problem",
  },
  {
    path: "sections/comparison/comparison.html",
    id: "comparison",
  },
  {
    path: "sections/features/features.html",
    id: "features",
  },
  {
    path: "sections/benefits/benefits.html",
    id: "benefits",
  },
  {
    path: "sections/packages/packages.html",
    id: "packages",
  },
  {
    path: "sections/process/process.html",
    id: "process",
  },
  {
    path: "sections/faq/faq.html",
    id: "faq",
  },
  {
    path: "sections/form/form.html",
    id: "form",
  },
  {
    path: "layouts/footer/footer.html",
    id: "footer",
  },
  {
    path: "components/whatssappButton/whatssappButton.html",
    id: "whatssappButton",
  },
];

sections.forEach((component) => {
  loadComponent(component.path, component.id);
});
