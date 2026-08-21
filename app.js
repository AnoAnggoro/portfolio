/* Dipakai dua halaman. Isi teks ada di data.js, bukan di sini. */

/* Teks dari data.js masuk ke HTML, jadi tanda kutip dan < harus dijinakkan dulu. */
function esc(t) {
  return String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

/* Penampung bergaris pengganti gambar yang belum ada. */
function htmlKosong(src) {
  const isi = src ? `<div>Taruh gambar di</div><b>${esc(src)}</b>` : `<div>Belum ada gambar</div><b>tulis nama filenya di data.js</b>`;
  return `<div class="shot-kosong">${isi}</div>`;
}

document.addEventListener(
  "error",
  (e) => {
    const img = e.target;
    if (img.tagName !== "IMG" || img.dataset.diganti) return;
    img.dataset.diganti = "1";
    img.outerHTML = htmlKosong(img.getAttribute("src"));
  },
  true
);

/* Nama jenis proyek untuk ditampilkan di halaman detail. */
const JENIS = {
  web: "Aplikasi web",
  mobile: "Aplikasi mobile",
  tablet: "Aplikasi tablet",
  laptop: "Aplikasi desktop",
  desktop: "Aplikasi desktop",
  polos: "Aplikasi desktop",
};

/* Bingkai mockup. kind: web | polos | mobile | tablet | laptop (= desktop) */
function mockup({ src, kind = "web", caption = "", url = "" }) {
  const alt = caption || "Tampilan proyek";
  const bar = `<div class="mock-web__bar"><i></i><i></i><i></i><div class="mock-web__url">${esc(url || "localhost")}</div></div>`;
  const gambar = src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">` : htmlKosong("");

  const bingkai = {
    mobile: `<div class="mock-phone">
        <div class="mock-phone__status"><span>09.41</span><em class="mock-phone__notch"></em><span class="mock-phone__baterai"></span></div>
        ${gambar}
      </div>`,
    tablet: `<div class="mock-tablet">
        <div class="mock-tablet__status"><span>09.41</span><span>Wi-Fi</span></div>
        ${gambar}
      </div>`,
    laptop: `<div class="mock-laptop">
        <div class="mock-laptop__layar">${bar}${gambar}</div>
        <div class="mock-laptop__alas"></div>
      </div>`,
    web: `<div class="mock-web">${bar}${gambar}</div>`,
    // aplikasi desktop: bingkai sama, cuma judulnya nama aplikasi, bukan alamat situs
    polos: `<div class="mock-web">${bar}${gambar}</div>`,
  };

  const isi = bingkai[kind === "desktop" ? "laptop" : kind] || bingkai.web;
  return `<figure class="mockup">${isi}${caption ? `<figcaption class="mockup__cap">${esc(caption)}</figcaption>` : ""}</figure>`;
}

/* cover = gambar kartu di halaman depan saja */
function sampul(p) {
  return Array.isArray(p.cover) ? p.cover[0].src : p.cover;
}

/* galeri = halaman gambar di bagian atas halaman detail; semuanya pakai bingkai `tipe` */
function daftarSampul(p) {
  const arr = p.galeri && p.galeri.length ? p.galeri : [{ src: sampul(p) }];
  return arr.map((s) => ({ ...s, kind: p.tipe }));
}

/* Galeri berhalaman: satu gambar tampil, sisanya lewat tombol sebelumnya/berikutnya. */
function galeri(shots, url = "") {
  const slides = shots
    .map((s, i) => `<div class="galeri__slide${i ? "" : " aktif"}">${mockup({ ...s, url: s.url || url })}</div>`)
    .join("");
  const titik = shots
    .map((s, i) => `<button type="button" aria-label="Ke gambar ${i + 1}"${i ? "" : ' aria-current="true"'}></button>`)
    .join("");

  return `<div class="galeri" data-galeri tabindex="0" aria-roledescription="galeri gambar">
      <div class="galeri__panggung">${slides}</div>
      <div class="galeri__nav">
        <button type="button" class="galeri__btn" data-arah="-1">← Sebelumnya</button>
        <div class="galeri__tengah">
          <div class="galeri__titik">${titik}</div>
          <span class="galeri__hitung">1 / ${shots.length}</span>
        </div>
        <button type="button" class="galeri__btn" data-arah="1">Berikutnya →</button>
      </div>
    </div>`;
}

function pasangGaleri() {
  document.querySelectorAll("[data-galeri]").forEach((g) => {
    const slides = [...g.querySelectorAll(".galeri__slide")];
    // satu gambar: tombolnya tetap terlihat tapi mati, biar jelas halamannya bisa ditambah
    if (slides.length < 2) {
      g.querySelectorAll("[data-arah]").forEach((b) => (b.disabled = true));
      return;
    }

    const titik = [...g.querySelectorAll(".galeri__titik button")];
    const hitung = g.querySelector(".galeri__hitung");
    let i = 0;

    const ke = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, x) => s.classList.toggle("aktif", x === i));
      titik.forEach((t, x) => t.setAttribute("aria-current", x === i));
      hitung.textContent = `${i + 1} / ${slides.length}`;
    };

    g.querySelectorAll("[data-arah]").forEach((b) => b.addEventListener("click", () => ke(i + Number(b.dataset.arah))));
    titik.forEach((t, x) => t.addEventListener("click", () => ke(x)));
    g.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault(); // tanpa ini halaman ikut tergeser
      ke(i + (e.key === "ArrowRight" ? 1 : -1));
    });

    // geser jari di layar sentuh
    let x0 = null;
    let y0 = 0;
    g.addEventListener(
      "touchstart",
      (e) => {
        x0 = e.touches[0].clientX;
        y0 = e.touches[0].clientY;
      },
      { passive: true }
    );
    g.addEventListener(
      "touchend",
      (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        const dy = e.changedTouches[0].clientY - y0;
        // gulir ke bawah sambil serong tidak boleh ikut ganti halaman
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) ke(i + (dx < 0 ? 1 : -1));
        x0 = null;
      },
      { passive: true }
    );
  });
}

/* Klik gambar untuk memperbesar. <dialog> sudah menangani Esc dan latar gelapnya. */
function pasangZoom() {
  const d = document.createElement("dialog");
  d.className = "zoom";
  d.innerHTML = `<img alt=""><span class="zoom__tutup">Tutup ✕</span>`;
  document.body.append(d);
  const besar = d.querySelector("img");

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.tagName !== "IMG" || !t.closest(".mockup")) return;
    besar.src = t.currentSrc || t.src;
    besar.alt = t.alt;
    d.showModal();
  });
  d.addEventListener("click", () => d.close());
}

/* Tombol saring proyek. Hanya teknologi yang dipakai lebih dari satu proyek. */
function pasangFilter(wadah, grid) {
  const hitung = {};
  projects.forEach((p) => p.stack.forEach((t) => (hitung[t] = (hitung[t] || 0) + 1)));
  const teknologi = Object.keys(hitung)
    .filter((t) => hitung[t] > 1)
    .sort((a, b) => hitung[b] - hitung[a]);
  if (!teknologi.length) return;

  wadah.innerHTML = ["Semua", ...teknologi]
    .map((t, i) => `<button type="button" class="saring__btn" data-teknologi="${t}"${i ? "" : ' aria-current="true"'}>${t}</button>`)
    .join("");

  wadah.addEventListener("click", (e) => {
    const b = e.target.closest("[data-teknologi]");
    if (!b) return;
    wadah.querySelectorAll("[data-teknologi]").forEach((x) => x.setAttribute("aria-current", x === b));
    [...grid.children].forEach((kartu, n) => {
      kartu.hidden = b.dataset.teknologi !== "Semua" && !projects[n].stack.includes(b.dataset.teknologi);
    });
  });
}

/* Bagian yang muncul perlahan saat digulir. */
function aktifkanReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("tampil");
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* Header dan footer sama di semua halaman. */
function pasangKerangka() {
  const inisial = profile.nama
    .split(" ")
    .map((k) => k[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<nav class="nav">
       <a class="nav__mark" href="index.html">${inisial}<b>.</b></a>
       <div class="nav__links">
         <a href="index.html#tentang">Tentang</a>
         <a href="index.html#keahlian">Keahlian</a>
         <a href="index.html#pengalaman">Pengalaman</a>
         <a href="index.html#proyek">Proyek</a>
         <a class="nav__cta" href="index.html#kontak">Kontak</a>
       </div>
     </nav>`
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="footer">
       <span>© ${new Date().getFullYear()} ${profile.nama}</span>
       <span>${profile.lokasi}</span>
     </footer>`
  );
}
