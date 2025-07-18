function toggleMenu() {
    const menu = document.querySelector(".dropdown-tabs");
    const icon = document.querySelector(".dropdown-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('click', function (event) {
  const sidebar = document.querySelector('.dropdown-tabs');
  const icon = document.querySelector('.dropdown-icon');

  const clickedInsideSidebar = sidebar.contains(event.target);
  const clickedInsideIcon = icon.contains(event.target);

  // If it's open and clicked outside both sidebar and icon → close it
  if (sidebar.classList.contains('open') && !clickedInsideSidebar && !clickedInsideIcon) {
    sidebar.classList.remove('open');
    icon.classList.remove('open');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.triangle-toggle').forEach(triangle => {
    triangle.addEventListener('click', () => {
      const box = triangle.closest('.rounded-rectangle-inner');
      box.classList.toggle('expanded');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.triangle-toggle').forEach(triangle => {
    triangle.addEventListener('click', () => {
      const inner = triangle.closest('.rounded-square-inner');
      const outer = inner.closest('.rounded-square-outer');

      inner.classList.toggle('expanded');
      outer.classList.toggle('expanded');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.triangle-toggle').forEach(triangle => {
    triangle.addEventListener('click', () => {
      const inner = triangle.closest('.rounded-mini-rect-inner');
      const outer = inner.closest('.rounded-mini-rect-outer');

      inner.classList.toggle('expanded');
      outer.classList.toggle('expanded');
    });
  });
});