// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();
document
  .querySelectorAll("a, button, .skill-card, .project-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.opacity = "1";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.6";
    });
  });

// Contact form mailto
function handleContact(e) {
  e.preventDefault();
  const n = document.getElementById("cname").value;
  const em = document.getElementById("cemail").value;
  const msg = document.getElementById("cmsg").value;
  window.open(
    `mailto:adhartyagi1234@gmail.com?subject=Portfolio Contact from ${n}&body=${msg}%0A%0AFrom: ${em}`,
  );
  document.getElementById("form-success").style.display = "block";
}

// Scroll reveal
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".skill-card, .project-card, .cert-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    obs.observe(el);
  });
