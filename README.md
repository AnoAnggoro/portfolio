# Portofolio — Ano Dwi Anggoro

Situs portofolio pribadi berisi 12 proyek: aplikasi web, aplikasi desktop, dan sistem pendukung keputusan.

**Online:** https://portofolio-7ap.pages.dev

HTML, CSS, dan JavaScript murni. Tanpa framework, tanpa proses build, tanpa database.

---

## Cara membuka

Situs ini **harus dijalankan lewat server**, bukan diklik dua kali. Kalau dibuka sebagai `file:///`, browser memblokir sebagian isinya dan konsol penuh peringatan.

Pilih salah satu:

```bash
# 1. Python (paling ringan, tidak perlu pasang apa-apa)
python -m http.server 5500
# lalu buka http://localhost:5500

# 2. VS Code
# pasang ekstensi "Live Server", klik kanan index.html -> Open with Live Server

# 3. XAMPP
# taruh folder ini di htdocs, nyalakan Apache
# lalu buka http://localhost/portofolio/
```

Kalau memakai Live Server, pastikan folder yang dibuka di VS Code adalah folder ini — Live Server menyajikan folder root workspace, bukan berkas yang sedang aktif.

---

## Isi berkas

| Berkas | Isi |
|---|---|
| `data.js` | **Semua teks dan daftar gambar.** Ini satu-satunya berkas yang perlu diedit untuk mengubah isi situs. |
| `index.html` | Halaman depan: profil, keahlian, pengalaman, daftar proyek, kontak |
| `project.html` | Halaman detail proyek, dibuka lewat `project.html?id=...` |
| `app.js` | Bingkai mockup, galeri berhalaman, zoom gambar, tombol saring |
| `style.css` | Seluruh tampilan |
| `assets/` | Gambar (WebP), logo, dan CV |

---

## Mengubah isi

Semuanya di `data.js`. HTML tidak perlu disentuh.

### Data diri

```js
const profile = {
    nama: "...",
    peran: "...",
    foto: "assets/foto5.webp",
    cv: "assets/cv-anodwianggoro.pdf",
    tentang: [ "paragraf 1", "paragraf 2" ],
    fakta: [ ["Label", "Isi"] ],
    skills: [ { grup: "...", catatan: "...", items: ["..."] } ],
    pengalaman: [ { tahun, posisi, tempat, detail } ],
    kontak: { email, github, linkedin, instagram },
};
```

Isian yang dikosongkan akan disembunyikan sendiri — misalnya `cv: ""` membuat tombol Unduh CV tidak muncul.

### Menambah proyek

```js
{
    id: "nama-proyek",           // dipakai di URL, huruf kecil dan tanda hubung
    nama: "Nama Proyek",
    tahun: "2026",
    tipe: "web",                 // bingkai untuk galeri atas
    ringkas: "Satu kalimat untuk kartu di halaman depan.",
    peran: "Desain & Pengembangan",
    stack: ["PHP", "MySQL"],
    cover: "assets/logo-proyek.webp",   // gambar kartu di halaman depan
    galeri: [                            // galeri berhalaman di atas halaman detail
        { src: "assets/proyek-1.webp", caption: "Login" },
    ],
    demo: "",                    // kosongkan kalau belum online
    repo: "",                    // tautan GitHub-nya
    deskripsi: [ "paragraf 1", "paragraf 2" ],
    fitur: [ "..." ],
    tantangan: [ { judul: "...", isi: "..." } ],   // [] = bagian ini disembunyikan
    shots: [                                        // bagian "Sekilas isinya"
        { src: "assets/proyek.webp", kind: "laptop", caption: "Di layar laptop" },
    ],
}
```

### Bingkai mockup

`tipe` dan `kind` menerima nilai berikut:

| Nilai | Tampilan |
|---|---|
| `web` | Jendela browser, judulnya alamat situs |
| `polos` | Jendela biasa, judulnya nama aplikasi — untuk aplikasi desktop |
| `laptop` | Layar laptop beserta alasnya |
| `tablet` | Bezel tablet |
| `mobile` | Bingkai HP lengkap dengan status bar |

Tombol Sebelumnya/Berikutnya, titik penanda, dan penghitung halaman muncul sendiri begitu gambarnya lebih dari satu. Panah kiri/kanan di keyboard dan geser jari di layar sentuh juga jalan.

---

## Gambar

Semua gambar dalam format **WebP** (mutu 88, lebar maksimum 1600px). Seluruh folder `assets/` berukuran sekitar 8 MB.

Untuk gambar baru, kompres dulu sebelum dimasukkan:

```python
from PIL import Image
im = Image.open("tangkapan-layar.png")
if im.width > 1600:
    im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
im.convert("RGB").save("assets/nama.webp", "WEBP", quality=88, method=6)
```

Kalau gambar yang ditulis di `data.js` belum ada berkasnya, situs tidak rusak — muncul kotak bergaris yang menyebut nama berkas yang dicari.

`assets/og.jpg` sengaja tetap JPEG: WhatsApp dan Facebook belum bisa membaca WebP untuk pratinjau tautan.

---

## Menerbitkan ulang

Setelah mengubah isi, unggah ulang dari folder ini:

```bash
npx wrangler pages deploy . --project-name portofolio
```

Kalau alamat situsnya berganti, perbarui tiga tempat ini agar pratinjau tautan tetap benar:

- `situs` di `data.js`
- `og:url` dan `og:image` di `index.html` dan `project.html`
