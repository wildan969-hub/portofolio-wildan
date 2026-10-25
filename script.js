// 1. Tombol ganti tema (pilihan tema diingat browser)
const tombolTema = document.getElementById("tombol-tema");
const ikonTema = tombolTema.querySelector("i");

function perbaruiIkon() {
  const terang = document.body.classList.contains("terang");
  ikonTema.className = terang ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

try {
  if (localStorage.getItem("tema") === "terang") {
    document.body.classList.add("terang");
  }
} catch (e) {}

perbaruiIkon();

tombolTema.addEventListener("click", function () {
  document.body.classList.toggle("terang");
  perbaruiIkon();
  try {
    const terang = document.body.classList.contains("terang");
    localStorage.setItem("tema", terang ? "terang" : "gelap");
  } catch (e) {}
});

// 2. Animasi muncul saat bagian halaman terlihat
const bagian = document.querySelectorAll(".muncul");

const pengamat = new IntersectionObserver(function (daftar) {
  daftar.forEach(function (item) {
    if (item.isIntersecting) {
      item.target.classList.add("terlihat");
    }
  });
}, { threshold: 0.15 });

bagian.forEach(function (el) {
  pengamat.observe(el);
});

// 3. Tombol kembali ke atas
const keAtas = document.getElementById("ke-atas");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    keAtas.classList.add("tampil");
  } else {
    keAtas.classList.remove("tampil");
  }
});

keAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
