/* Semua isi website ada di file ini. Edit di sini saja — HTML tidak perlu disentuh. */

const profile = {
    nama: "Ano Dwi Anggoro",
    peran: "Web Developer",
    lokasi: "Indonesia",
    foto: "assets/profil.png",
    situs: "https://portofolio-7ap.pages.dev",
    cv: "assets/CV_AnoDwiAnggoro.pdf",
    ringkas:
        "Saya membangun aplikasi yang mengambil alih pekerjaan manual — pencatatan, perhitungan, dan penjadwalan — tanpa membuat siapa pun harus percaya begitu saja pada hasilnya.",

    tentang: [
        "Saya Ano Dwi Anggoro, web developer. Saya membangun aplikasi web dan desktop untuk yayasan, sekolah, posyandu, dan usaha kecil — tempat yang datanya masih tersebar di buku tulis, grup WhatsApp, dan spreadsheet. Yang mereka butuhkan bukan aplikasi yang rapi di atas kertas, tapi yang benar-benar dipakai staf setiap hari.",
        "Tiga belas sistem sudah saya bangun dari nol: pendataan anggota, pengelolaan keuangan, penilaian, pemesanan online, sampai perhitungan yang menopang sebuah keputusan. Semuanya saya kerjakan sendiri — basis data, antarmuka, logika, laporan siap cetak, sampai mendampingi pemakaiannya di tempat klien. Teknologi menyesuaikan kebutuhan: PHP dan MySQL untuk sistem internal kantor, Next.js untuk yang harus cepat dibuka pelanggan dari HP.",
        "Dua hal yang tidak saya tawar: aplikasi harus bisa dipahami sejak pertama kali dibuka, tanpa pelatihan panjang, dan setiap angka yang tampil harus bisa ditelusuri asal perhitungannya saat ada yang bertanya.",
        "Saat ini saya terbuka untuk proyek baru — membangun dari awal maupun melanjutkan sistem yang sudah berjalan. Ceritakan kebutuhan Anda lewat email atau LinkedIn di bawah, nanti saya susun perkiraan lingkup dan waktu pengerjaannya.",
    ],

    fakta: [
        ["Aplikasi dibangun", "13"],
        ["Klien", "Yayasan, sekolah, posyandu, UMKM"],
        ["Lingkup", "Basis data sampai serah terima"],
        ["Status", "Terbuka untuk proyek baru"],
    ],

    skills: [
        {
            grup: "Antarmuka yang tidak perlu dijelaskan",
            catatan:
                "Tata letak yang jelas, tabel yang terbaca sekali lihat, dan halaman yang tetap enak dibuka dari HP.",
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind",
                "React",
                "Next.js",
                "Chart.js",
            ],
        },
        {
            grup: "Data dan logika di belakangnya",
            catatan:
                "Merancang tabel, menulis query, dan menjaga satu angka tidak berbeda antara dashboard dan laporan.",
            items: ["PHP", "MySQL", "MongoDB", "REST API", "JSON"],
        },
        {
            grup: "Analisis data jadi keputusan",
            catatan:
                "Sistem yang memeringkat, mengelompokkan, atau memprediksi dari data yang sudah ada — dengan langkah perhitungan yang bisa ditelusuri, bukan sekadar angka akhir.",
            items: ["Python", "YOLOv8", "OpenCV"],
        },
        {
            grup: "Aplikasi desktop",
            catatan:
                "Untuk pekerjaan yang harus jalan di komputer kantor apa adanya, tanpa bergantung internet.",
            items: ["Java", "Swing"],
        },
        {
            grup: "Alat kerja sehari-hari",
            catatan:
                "Yang saya buka setiap kali memulai proyek baru, sampai sistemnya sampai ke tangan klien.",
            items: ["Git", "GitHub", "VS Code", "XAMPP", "Vercel", "Figma"],
        },
    ],

    pengalaman: [
        {
            tahun: "Sep 2025 — Feb 2026",
            posisi: "Management Application Developer",
            tempat: "YPOK — Yayasan Pendidikan Olahraga Karate",
            detail: "Yayasan ini mengurus anggota di beberapa dojo, iuran dan ujian kenaikan tingkat, dokumen legalitas, sampai penjualan perlengkapan resmi. Saya bangun satu aplikasi yang menampung semuanya, lalu mengujinya berulang kali sampai stabil dipakai pengurus. Bagian yang paling menentukan justru bukan kodenya, melainkan duduk bareng mereka untuk tahu fitur mana yang benar-benar dipakai dan mana yang hanya terdengar bagus.",
        },
        {
            tahun: "2024 — sekarang",
            posisi: "Pengembang Aplikasi",
            tempat: "Proyek klien dan mandiri",
            detail: "Tiga belas aplikasi, dikerjakan sendirian dari nol: merancang basis datanya, membangun antarmukanya, menulis perhitungannya, sampai laporan yang siap dicetak. Lima memakai metode pendukung keputusan, tiga memakai data mining, satu memakai deteksi objek YOLOv8, satu lagi sistem pemesanan online multi-cabang. Semua yang ada di halaman ini lahir dari sini.",
        },
    ],

    kontak: {
        email: "anodwianggoro7@gmail.com",
        github: "https://github.com/anoanggoro",
        linkedin: "https://linkedin.com/in/anodwianggoro",
        instagram: "https://instagram.com/anoanggoro",
    },
};

/* Bingkai mockup yang tersedia: "web" (jendela browser), "laptop", "tablet", "mobile".
   "desktop" sama dengan "laptop".
     tipe  -> bingkai bawaan untuk gambar utama proyek
     cover  -> satu gambar untuk kartu di halaman depan saja
     galeri -> daftar { src, caption } untuk halaman gambar di bagian atas halaman
               detail. Semuanya memakai bingkai "tipe" di atas.
     shots -> gambar di bagian "Sekilas isinya". Tambah sebanyak yang kamu mau,
              halamannya otomatis bisa dibolak-balik lewat tombol Sebelumnya/Berikutnya. */
const projects = [
    {
        id: "apk-saw",
        nama: "Aplikasi SAW",
        tahun: "2025",
        tipe: "web",
        ringkas:
            "Analisis produk cepat dan lambat bergerak memakai metode Simple Additive Weighting.",
        peran: "Pengembangan Penuh",
        stack: ["PHP", "MySQL", "JavaScript", "Chart.js"],
        cover: "assets/logo-saw.webp",
        galeri: [
            {
                src: "assets/saw-1.webp",
                caption: "Login — masuk ke aplikasi SAW",
            },
            {
                src: "assets/saw-2.webp",
                caption: "Produk — daftar produk beserta data penjualannya",
            },
            {
                src: "assets/saw-3.webp",
                caption: "Penjualan — input penjualan tiap produk",
            },
            {
                src: "assets/saw-4.webp",
                caption: "Kriteria — delapan kriteria penilaian tiap produk",
            },
            {
                src: "assets/saw-5.webp",
                caption:
                    "Nilai Produk — input nilai tiap produk untuk delapan kriteria penilaian",
            },
            {
                src: "assets/saw-6.webp",
                caption:
                    "Analisis SAW — hasil perhitungan dan peringkat tiap produk",
            },
            {
                src: "assets/saw-7.webp",
                caption:
                    "Hasil SAW — peringkat produk dari nilai preferensi tertinggi",
            },
            {
                src: "assets/saw-8.webp",
                caption:
                    "Laporan — ringkasan hasil SAW siap dicetak atau diunduh PDF",
            },
        ],
        demo: "https://hijabeyli.rf.gd/",
        repo: "https://github.com/AnoAnggoro/Aplikasi_SAW.git",

        deskripsi: [
            "Aplikasi ini memilah produk mana yang cepat laku dan mana yang mengendap di gudang. Setiap penjualan dicatat per transaksi — jumlah terjual, harga, dan retur — lalu tiap produk dinilai dengan delapan kriteria: jumlah terjual, frekuensi, total margin, stok, retur, turnover, rata-rata transaksi, dan nilai.",
            "Perhitungan SAW ditampilkan terbuka: nilai mentah, nilai ternormalisasi, dan hasil kali bobot untuk tiap kriteria. Keluarannya berupa peringkat produk dengan label Fast Moving atau Slow Moving, sehingga keputusan restock tidak lagi mengandalkan perkiraan.",
        ],

        fitur: [
            "Data produk lengkap dengan kategori, stok, biaya, harga jual, dan jumlah terjual",
            "Pencatatan penjualan harian beserta jumlah retur",
            "Delapan kriteria yang bobot dan sifatnya (benefit/cost) bisa diatur sendiri",
            "Tabel perhitungan SAW yang menampilkan angka normalisasi dan pembobotan",
            "Peringkat produk dengan label Fast Moving dan Slow Moving",
            "Laporan produk, penjualan, analisis, dan keuntungan: unduh CSV atau cetak",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/saw.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/saw-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            { src: "assets/saw-mobile.webp", kind: "mobile", caption: "Di HP" },
        ],
    },

    {
        id: "ypok-management",
        nama: "YPOK Management",
        tahun: "2025",
        tipe: "web",
        ringkas:
            "Sistem manajemen organisasi bela diri: data anggota, pembayaran, legalitas, sampai toko perlengkapan.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "JSON"],
        cover: "assets/logo-ypok.webp",
        galeri: [
            {
                src: "assets/ypok-1.webp",
                caption: "login — masuk ke sistem dengan akun resmi YPOK",
            },
            {
                src: "assets/ypok-2.webp",
                caption: "Dashboard — tampilan utama setelah login",
            },
            {
                src: "assets/ypok-3.webp",
                caption:
                    "Data MSH — pencarian, filter, dan ringkasan data tiap anggota",
            },
            {
                src: "assets/ypok-4.webp",
                caption:
                    "Data Kohai — pencarian, filter, dan ringkasan data tiap kohai",
            },
            {
                src: "assets/ypok-5.webp",
                caption:
                    "Lokasi — daftar lokasi dan ringkasan data tiap lokasi",
            },
            {
                src: "assets/ypok-6.webp",
                caption: "Pembayaran — pemasukan ujian, KYU, dan rakernas",
            },
            {
                src: "assets/ypok-7.webp",
                caption: "Legalitas — dokumen resmi dan arsipnya",
            },
            {
                src: "assets/ypok-8.webp",
                caption:
                    "Pendaftaran — anggota baru dan ringkasan data terdaftar",
            },
            {
                src: "assets/ypok-9.webp",
                caption:
                    "Toko — katalog perlengkapan dan merchandise resmi, bisa diatur stoknya",
            },
            {
                src: "assets/ypok-10.webp",
                caption:
                    "Laporan Kegiatan — ringkasan kegiatan dan dokumentasinya",
            },
            {
                src: "assets/ypok-11.webp",
                caption:
                    "Laporan Keuangan — ringkasan pemasukan dan pengeluaran tiap bulan",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/YPOK_Management.git",

        deskripsi: [
            "YPOK Management menyatukan seluruh administrasi organisasi dalam satu tempat: data MSH dan kohai beserta tingkat Dan dan dojonya, lokasi cabang, pembayaran ujian dan iuran, arsip dokumen legalitas, pendaftaran anggota baru, penjualan perlengkapan resmi, sampai laporan kegiatan dan keuangan.",
            "Berandanya dirancang untuk menjawab pertanyaan pengurus dalam sekali lihat: berapa anggota yang aktif, berapa saldo kas, siapa yang pendaftarannya masih menunggu persetujuan, dan bagaimana arus keuangan enam bulan terakhir. Modulnya saling terhubung — pembayaran yang tercatat hari ini langsung ikut terhitung di laporan keuangan dan grafik dashboard.",
        ],

        fitur: [
            "Data MSH dan kohai lengkap dengan tingkat Dan, dojo, dan status keaktifan",
            "Data lokasi cabang beserta anggota yang terdaftar di masing-masing lokasi",
            "Pembayaran ujian, KYU, rakernas, dan iuran bulanan dengan status lunas dan sisa tagihan",
            "Pendaftaran anggota baru: unggah foto, lalu ekspor berkasnya ke PDF atau Excel",
            "Arsip dokumen legalitas beserta masa berlakunya",
            "Toko perlengkapan resmi: katalog, stok, harga, dan riwayat transaksi",
            "Laporan kegiatan dan laporan keuangan dengan saldo berjalan, siap dicetak",
        ],

        shots: [
            {
                src: "assets/ypok.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/ypok-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/ypok-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "yayasan-almawaddah",
        nama: "Yayasan Almawaddah",
        tahun: "2025",
        tipe: "web",
        ringkas:
            "Sistem informasi manajemen pendidikan: data murid, nilai, rapot, jadwal, sampai SPP.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "JSON"],
        cover: "assets/logo-yayasan.webp",
        galeri: [
            {
                src: "assets/yayasan-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi Yayasan Almawaddah",
            },
            {
                src: "assets/yayasan-2.webp",
                caption:
                    "Beranda — jadwal hari ini, jam berjalan, dan ringkasan data",
            },
            {
                src: "assets/yayasan-3.webp",
                caption:
                    "Guru — pencarian, filter, dan ringkasan data tiap guru",
            },
            {
                src: "assets/yayasan-4.webp",
                caption:
                    "Murid — pencarian, filter, dan ringkasan data tiap murid",
            },
            {
                src: "assets/yayasan-5.webp",
                caption:
                    "Absensi — input kehadiran tiap murid per hari dan ringkasan data",
            },
            {
                src: "assets/yayasan-6.webp",
                caption:
                    "Nilai — input nilai tiap murid untuk tiap aspek penilaian dan ringkasan data",
            },
            {
                src: "assets/yayasan-7.webp",
                caption:
                    "Rapot — ringkasan nilai tiap murid per aspek penilaian",
            },
            {
                src: "assets/yayasan-8.webp",
                caption:
                    "jadwal Kbm — input jadwal KBM tiap kelas dan ringkasan data",
            },
            {
                src: "assets/yayasan-9.webp",
                caption:
                    "Pembayaran — input pembayaran tiap murid dan ringkasan data",
            },
            {
                src: "assets/yayasan-10.webp",
                caption:
                    "Laporan — ringkasan data guru, murid, absensi, nilai, dan pembayaran siap dicetak atau diunduh PDF",
            },
            {
                src: "assets/yayasan-11.webp",
                caption:
                    "Pengunguman — input pengumuman dan ringkasan data tiap pengumuman",
            },
            {
                src: "assets/yayasan-12.webp",
                caption:
                    "Admin — pengaturan akun pengguna dan ringkasan data tiap akun",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/Yayasan_Almawaddah.git",

        deskripsi: [
            "Satu sistem untuk seluruh administrasi madrasah: data guru dan murid, absensi harian, penilaian, rapot, jadwal KBM, pembayaran SPP, laporan, pengumuman, dan manajemen akun pengguna.",
            "Berandanya menampilkan jadwal mengajar hari ini beserta statusnya, jadi guru langsung tahu mana yang sudah selesai. Penilaiannya memakai aspek dan predikat seperti Menguasai dan Sangat Menguasai — mengikuti cara penilaian RA, bukan dipaksa jadi angka.",
        ],

        fitur: [
            "Data guru dan murid dengan status aktif, lulus, pindah, dan keluar per angkatan",
            "Absensi harian dan jadwal KBM mingguan per kelompok",
            "Penilaian per aspek dengan predikat, terhubung langsung ke rapot yang bisa dicetak",
            "Pembayaran SPP: pantau siapa yang belum bayar bulan ini dan total pemasukan",
            "Laporan yang bisa ditampilkan, dicetak, atau diekspor ke Excel",
            "Pengumuman untuk wali murid dan manajemen akun administrator",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/yayasan.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/yayasan-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/yayasan-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "nom-comp",
        nama: "Nom Comp",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Media pembelajaran tata nama senyawa kimia dengan modul, kuis, dan permainan.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "JSON"],
        cover: "assets/logo-nomcomp.svg",
        galeri: [
            {
                src: "assets/nomcomp-1.webp",
                caption: "Halaman depan platform",
            },
            {
                src: "assets/nomcomp-2.webp",
                caption: "Login — masuk ke sistem dengan akun resmi Nom Comp",
            },
            {
                src: "assets/nomcomp-3.webp",
                caption: "Dashboard siswa — materi, kuis, skor, dan games",
            },
            {
                src: "assets/nomcomp-4.webp",
                caption:
                    "Materi — daftar materi dan ringkasan data tiap materi",
            },
            {
                src: "assets/nomcomp-5.webp",
                caption:
                    "Exercise — daftar latihan dan ringkasan data tiap latihan",
            },
            {
                src: "assets/nomcomp-6.webp",
                caption: "Forum Diskusi — siswa bertanya, guru menjawab",
            },
            {
                src: "assets/nomcomp-7.webp",
                caption: "Profil siswa dan ringkasan progres belajarnya",
            },
            {
                src: "assets/nomcomp-8.webp",
                caption:
                    "Pilih Kelas — filter siswa berdasarkan kelas dan jurusan untuk proses klasifikasi",
            },
            {
                src: "assets/nomcomp-9.webp",
                caption:
                    "Dashboard guru — keaktifan per modul dan lima siswa teratas",
            },
            {
                src: "assets/nomcomp-10.webp",
                caption:
                    "Kelola Materi — input dan pengelolaan materi pelajaran",
            },
            {
                src: "assets/nomcomp-11.webp",
                caption:
                    "Bank Soal PG — input dan pengelolaan soal pilihan ganda",
            },
            {
                src: "assets/nomcomp-12.webp",
                caption: "Tugas Essay — input dan pengelolaan tugas essay",
            },
            {
                src: "assets/nomcomp-13.webp",
                caption: "Pr/Homework — input dan pengelolaan pekerjaan rumah",
            },
            {
                src: "assets/nomcomp-14.webp",
                caption: "Quick/Quiz — input dan pengelolaan kuis singkat",
            },
            {
                src: "assets/nomcomp-15.webp",
                caption:
                    "Pengaturan Games — input dan pengelolaan permainan edukatif",
            },
            {
                src: "assets/nomcomp-16.webp",
                caption:
                    "Edit Intro Siswa — pengaturan tampilan awal untuk siswa",
            },
            {
                src: "assets/nomcomp-17.webp",
                caption: "Forum Diskusi — sisi guru, menjawab pertanyaan siswa",
            },
            {
                src: "assets/nomcomp-18.webp",
                caption:
                    "Data Siswa — pencarian, filter, dan ringkasan data tiap siswa",
            },
            {
                src: "assets/nomcomp-19.webp",
                caption: "Profil guru dan pengaturan akunnya",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/Nom_Comp.git",

        deskripsi: [
            "Nom Comp punya dua sisi. Siswa masuk ke panel belajar: membaca materi per modul dalam bentuk PDF, video YouTube, atau simulasi reaksi, mengerjakan kuis, tugas essay, dan PR, lalu bertanya di forum diskusi kelas.",
            "Guru masuk ke panel pengelola dan bisa memegang lebih dari satu kelas. Di sana ia mengunggah materi, menyusun bank soal pilihan ganda, membuat tugas dan PR, mengatur permainan, sampai menyunting halaman perkenalan yang dilihat siswa. Materi kimia yang biasanya kering dibungkus jadi simulasi reaksi dan permainan seperti ChemMatch dan Cari Kata.",
        ],

        fitur: [
            "Panel siswa dan panel guru terpisah, dengan akun demo untuk mencoba keduanya",
            "Satu guru bisa mengelola beberapa kelas sekaligus",
            "Materi per modul: PDF, video YouTube, dan simulasi reaksi senyawa",
            "Bank soal pilihan ganda, tugas essay, PR, serta Quiz dan Quick Quiz",
            "Tiga permainan: Simulasi reaksi, ChemMatch, dan Cari Kata",
            "Forum diskusi kelas dan pantauan progres belajar tiap siswa",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/nomcomp.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/nomcomp-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/nomcomp-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "mask-detection",
        nama: "Mask Detection",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Deteksi pemakaian masker dari foto maupun kamera langsung dengan YOLOv8.",
        peran: "Desain & Pengembangan",
        stack: ["Python", "YOLOv8", "OpenCV", "Flask"],
        cover: "assets/logo-mask.webp",
        galeri: [
            {
                src: "assets/mask-1.webp",
                caption: "halaman utama — mask detection",
            },
            {
                src: "assets/mask-2.webp",
                caption:
                    "Tampilan Kamera — mendeteksi wajah dan menampilkan status pemakaian masker",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/Mask_Detection_Yolo.git",

        deskripsi: [
            "Aplikasi ini menandai orang pada sebuah gambar dan menghitung berapa yang memakai masker dan berapa yang tidak. Cukup seret satu foto ke halaman, hasil deteksinya keluar beserta jumlah with_mask dan without_mask.",
            "Selain dari gambar, deteksinya bisa berjalan langsung dari webcam. Hitungan orang dengan dan tanpa masker diperbarui terus selama kamera menyala, alarm berbunyi begitu ada yang kedapatan tidak memakai masker, dan snapshot pelanggarnya otomatis tersimpan sebagai bukti.",
        ],

        fitur: [
            "Unggah gambar lewat seret-dan-lepas, hasil deteksi ditandai di fotonya",
            "Hitungan otomatis with_mask dan without_mask per gambar",
            "Deteksi langsung dari webcam dengan pilihan indeks kamera",
            "Alarm yang bisa dinyalakan atau dimatikan saat terdeteksi pelanggar",
            "Snapshot pelanggar tersimpan otomatis sebagai bukti",
            "Papan hitung: dengan masker, tanpa masker, dan total orang",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/mask.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/mask-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/mask-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "YPKIV",
        nama: "YPKIV",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Penilaian kinerja 48 guru dengan metode Simple Additive Weighting, tanpa reload halaman.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "JSON"],
        cover: "assets/logo-ypkiv.svg",
        galeri: [
            {
                src: "assets/ypkiv-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi perusahaan YPKIV",
            },
            {
                src: "assets/ypkiv-2.webp",
                caption:
                    "Dashboard — jumlah kriteria, guru, total bobot, dan peringkat teratas",
            },
            {
                src: "assets/ypkiv-3.webp",
                caption:
                    "kriteria — delapan kriteria penilaian untuk tiap guru dan bobotnya",
            },
            {
                src: "assets/ypkiv-4.webp",
                caption:
                    "Data Guru — pencarian, filter, dan ringkasan data tiap guru",
            },
            {
                src: "assets/ypkiv-5.webp",
                caption:
                    "Hasil — peringkat guru dari nilai preferensi tertinggi",
            },
            {
                src: "assets/ypkiv-6.webp",
                caption:
                    "Laporan — ringkasan hasil siap dicetak atau diunduh PDF",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/YPKIV.git",

        deskripsi: [
            "Yayasan menilai 48 guru memakai delapan kriteria berbobot seperti kedisiplinan, tanggung jawab, kehadiran, dan kemampuan mengajar. Kriterianya tidak dikunci di kode — bisa ditambah, diubah, atau dihapus sendiri, dengan validasi supaya total bobotnya tetap mendekati 1.",
            "Ada dua peran: admin yang boleh mengubah semua data, dan viewer yang hanya bisa melihat hasil dan laporan. Form nilai guru otomatis menyesuaikan kriteria yang sedang aktif, dan seluruh input serta perhitungan berjalan tanpa memuat ulang halaman.",
        ],

        fitur: [
            "Dua peran akses: admin dengan CRUD penuh, viewer hanya baca",
            "Kelola kriteria dan bobot dengan validasi total bobot mendekati 1",
            "Form nilai guru yang otomatis mengikuti kriteria aktif",
            "Perhitungan SAW langsung di halaman, tanpa reload",
            "Peringkat guru beserta detail perhitungan tiap orang",
            "Empat jenis laporan: hasil akhir, data kriteria, data guru, dan rekap nilai",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/ypkiv.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/ypkiv-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/ypkiv-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "pasar-jaya",
        nama: "Pasar Jaya",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Sistem pendukung keputusan kenaikan gaji karyawan dengan metode Weighted Product.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "JSON"],
        cover: "assets/logo-pasar.webp",
        galeri: [
            {
                src: "assets/pasar-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi perusahaan Pasar Jaya",
            },
            {
                src: "assets/pasar-2.webp",
                caption:
                    "Dashboard — ringkasan data karyawan, divisi, dan status kelengkapan nilai",
            },
            {
                src: "assets/pasar-3.webp",
                caption: "Kriteria dan bobot penilaian untuk tiap divisi",
            },
            {
                src: "assets/pasar-4.webp",
                caption:
                    "Divisi dan data karyawan beserta status kelengkapan nilai",
            },
            {
                src: "assets/pasar-5.webp",
                caption:
                    "Penilaian Karyawan — input nilai tiap karyawan untuk tiap kriteria penilaian",
            },
            {
                src: "assets/pasar-6.webp",
                caption:
                    "Proses Hitung WP — hasil perhitungan dan peringkat tiap karyawan",
            },
            {
                src: "assets/pasar-7.webp",
                caption:
                    "Rekomendasi Reward — satu penerima kenaikan gaji per divisi",
            },
            {
                src: "assets/pasar-8.webp",
                caption:
                    "Laporan Eksekutif — ringkasan hasil WP siap dicetak atau diunduh PDF",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/Pasar_Jaya.git",

        deskripsi: [
            "Sistem ini menilai 100 karyawan di tiga divisi memakai lima kriteria: kedisiplinan, tanggung jawab, kehadiran, kerja sama, dan kualitas kerja. Tiap karyawan diberi skor 1 sampai 5, lalu diolah dengan metode Weighted Product.",
            "Aturannya sengaja dibuat ketat — hanya satu karyawan terbaik per divisi yang direkomendasikan naik gaji. Perhitungannya dipecah jadi empat langkah yang bisa dibuka satu per satu: normalisasi bobot, vektor S, vektor V, lalu perangkingan. Jadi kalau hasilnya dipertanyakan, angkanya bisa ditelusuri.",
        ],

        fitur: [
            "Kelola divisi, data karyawan, dan bobot kriteria penilaian",
            "Matriks evaluasi skor 1–5 per karyawan dengan filter divisi dan pencarian",
            "Perhitungan Weighted Product empat langkah yang bisa ditelusuri",
            "Rekomendasi satu penerima reward per divisi, bukan daftar panjang",
            "Laporan eksekutif siap dicetak atau diekspor CSV",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/pasar.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/pasar-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/pasar-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "pln-electricity",
        nama: "PLN Electricity",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Penentuan penerima voucher loyalitas pelanggan dengan metode Weighted Product.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "JavaScript", "Chart.js"],
        cover: "assets/logo-pln.webp",
        galeri: [
            {
                src: "assets/pln-1.webp",
                caption: "Login — masuk ke aplikasi dengan akun resmi PLN",
            },
            {
                src: "assets/pln-2.webp",
                caption:
                    "Dashboard — grafik loyalitas dan ketentuan alokasi voucher",
            },
            {
                src: "assets/pln-3.webp",
                caption:
                    "Data Pelanggan — pencarian dan daftar pelanggan terdaftar",
            },
            {
                src: "assets/pln-4.webp",
                caption:
                    "Bobot dan Kriteria — pengaturan bobot tiap kriteria penilaian",
            },
            {
                src: "assets/pln-5.webp",
                caption:
                    "Input Nilai Matriks — input nilai tiap pelanggan untuk tiap kriteria",
            },
            {
                src: "assets/pln-6.webp",
                caption:
                    "Hitung WP Rinci — rumus dan angka tiap tahap perhitungan",
            },
            {
                src: "assets/pln-7.webp",
                caption:
                    "Pusat Laporan — ringkasan hasil WP siap dicetak atau diunduh PDF",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/PLN_Electricity.git",

        deskripsi: [
            "Sistem ini menentukan pelanggan mana yang berhak menerima voucher belanja sebagai reward loyalitas. Tiap pelanggan dinilai pada tiga kriteria berbobot: durasi langganan dan jumlah transaksi sebagai benefit, serta total tagihan bulanan sebagai cost.",
            "Perhitungannya sengaja dibuka apa adanya — rumus normalisasi bobot dan rumus vektor S ditampilkan berdampingan dengan angkanya, jadi hasil peringkat bisa ditelusuri kalau dipertanyakan. Peringkat akhir langsung dipetakan ke alokasi voucher: Juara 1 Rp150.000, Juara 2 Rp100.000, dan Juara 3–5 masing-masing Rp50.000, dibatasi anggaran reward yang sudah ditetapkan.",
        ],

        fitur: [
            "Data pelanggan beserta IDPEL dan alamatnya",
            "Kriteria penilaian dengan bobot 1–5 dan tipe benefit atau cost",
            "Matriks penilaian pelanggan pada skala 1–100",
            "Perhitungan Weighted Product bertahap, lengkap dengan rumus dan angka antaranya",
            "Grafik lima pelanggan dengan nilai preferensi tertinggi",
            "Alokasi voucher yang otomatis mengikuti peringkat dan anggaran reward",
            "Tiga jenis laporan: hasil & reward, matriks penilaian, dan rincian perhitungan",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/pln.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/pln-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/pln-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "smk-raflesia-depok",
        nama: "SMK Raflesia Depok",
        tahun: "2026",
        tipe: "polos",
        ringkas:
            "Aplikasi desktop untuk memprediksi kelulusan siswa dengan algoritma Naive Bayes.",
        peran: "Desain & Pengembangan",
        stack: ["Java", "Swing", "MySQL"],
        cover: "assets/logo-raflesia.webp",
        galeri: [
            {
                src: "assets/raflesia-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi SMK Raflesia Depok",
            },
            {
                src: "assets/raflesia-6.webp",
                caption:
                    "Beranda — total siswa, total data latih, dan total prediksi kelulusan",
            },
            {
                src: "assets/raflesia-2.webp",
                caption:
                    "Data siswa: nilai, sikap, absensi, dan prediksi kelulusan",
            },
            {
                src: "assets/raflesia-3.webp",
                caption: "Data latih yang jadi dasar perhitungan",
            },
            {
                src: "assets/raflesia-4.webp",
                caption:
                    "Perhitungan Naive Bayes: prior, probabilitas, hasil prediksi",
            },
            {
                src: "assets/raflesia-5.webp",
                caption:
                    "Cetak laporan siswa, data latih, penilaian, dan statistik",
            },
        ],
        demo: "",
        repo: "",

        deskripsi: [
            "Aplikasi Java desktop yang memprediksi kelulusan siswa dari enam indikator: nilai UTS, nilai UAS, sikap, ekstrakurikuler, absensi, dan nilai sidang. Modelnya dilatih dari 222 data siswa yang sudah diketahui hasil kelulusannya.",
            "Perhitungannya tidak disembunyikan. Prior probability, probabilitas kondisional tiap kriteria, dan hasil akhir prediksi ditampilkan berurutan, sehingga guru bisa melihat indikator mana yang membuat seorang siswa diprediksi tidak lulus — dan menindaklanjutinya sebelum terlambat.",
        ],

        fitur: [
            "Kelola data siswa dan data latih dalam satu aplikasi",
            "Perhitungan Naive Bayes yang menampilkan prior dan probabilitas kondisional",
            "Prediksi kelulusan per siswa beserta angka pendukungnya",
            "Beranda dengan ringkasan jumlah siswa, data latih, dan sebaran hasil prediksi",
            "Cetak laporan data siswa, data latih, hasil penilaian, dan statistik",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/raflesia.webp",
                kind: "desktop",
                caption: "Jendela aplikasi desktop",
            },
        ],
    },

    {
        id: "bolekaka-dimsum",
        nama: "Bolekaka Dimsum",
        tahun: "2026",
        tipe: "polos",
        ringkas:
            "Analisis pola belanja pelanggan dengan algoritma Apriori, dari riwayat transaksi.",
        peran: "Desain & Pengembangan",
        stack: ["Java", "Swing", "MySQL"],
        cover: "assets/logo-bolekaka.webp",
        galeri: [
            {
                src: "assets/bolekaka-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi Bolekaka Dimsum",
            },
            {
                src: "assets/bolekaka-6.webp",
                caption:
                    "Dashboard — tren transaksi dan lima aturan asosiasi teratas",
            },
            {
                src: "assets/bolekaka-2.webp",
                caption:
                    "Petugas — daftar petugas dan ringkasan data tiap petugas",
            },
            {
                src: "assets/bolekaka-3.webp",
                caption:
                    "Produk — daftar produk dan ringkasan data tiap produk",
            },
            {
                src: "assets/bolekaka-4.webp",
                caption:
                    "Transaksi — daftar transaksi dan ringkasan data tiap transaksi",
            },
            {
                src: "assets/bolekaka-5.webp",
                caption:
                    "Apriori — input parameter minimum support dan confidence untuk perhitungan",
            },
            {
                src: "assets/bolekaka-7.webp",
                caption:
                    "Laporan — ringkasan hasil Apriori siap dicetak atau diunduh PDF",
            },
        ],
        demo: "",
        repo: "",

        deskripsi: [
            "Aplikasi desktop yang mencari produk-produk yang sering dibeli bersamaan. Riwayat transaksi tidak perlu diketik ulang — bisa diimpor langsung dari file Excel kasir.",
            "Pengguna menentukan sendiri minimum support dan confidence, lalu Apriori menghasilkan aturan asosiasi lengkap dengan support, confidence, dan lift ratio. Aturan dengan lift di bawah 1 ditandai Lemah, jadi mana yang benar-benar layak dijadikan paket bundling langsung kelihatan tanpa perlu membaca seluruh tabel.",
        ],

        fitur: [
            "Impor riwayat transaksi langsung dari file Excel",
            "Kelola produk, stok, harga, dan akun petugas",
            "Proses Apriori dengan minimum support dan confidence yang bisa diatur",
            "Aturan asosiasi beserta support, confidence, lift ratio, dan penanda valid/lemah",
            "Dashboard tren transaksi harian dan lima aturan asosiasi teratas",
            "Laporan hasil Apriori siap dicetak",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/bolekaka.webp",
                kind: "desktop",
                caption: "Jendela aplikasi desktop",
            },
        ],
    },

    {
        id: "posyandu-tunas-harapan",
        nama: "Posyandu Tunas Harapan",
        tahun: "2026",
        tipe: "polos",
        ringkas:
            "Pemilihan menu makanan tambahan bergizi untuk posyandu dengan metode MOORA.",
        peran: "Desain & Pengembangan",
        stack: ["Java", "Swing", "MySQL"],
        cover: "assets/logo-posyandu.webp",
        galeri: [
            {
                src: "assets/posyandu-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi Posyandu Tunas Harapan",
            },
            {
                src: "assets/posyandu-7.webp",
                caption:
                    "Dashboard — grafik rangkuman data dan ringkasan hasil Moora",
            },
            {
                src: "assets/posyandu-2.webp",
                caption:
                    "Data Alternatif — daftar menu dan ringkasan data tiap menu",
            },
            {
                src: "assets/posyandu-3.webp",
                caption:
                    "Data Kriteria — daftar kriteria dan ringkasan data tiap kriteria",
            },
            {
                src: "assets/posyandu-4.webp",
                caption:
                    "Penilaian Moora — input nilai tiap menu untuk tiap kriteria penilaian",
            },
            {
                src: "assets/posyandu-5.webp",
                caption:
                    "Perhitungan Moora — hasil perhitungan dan peringkat tiap menu",
            },
            {
                src: "assets/posyandu-6.webp",
                caption:
                    "Cetak Laporan — ringkasan hasil Moora siap dicetak atau diunduh PDF",
            },
        ],
        demo: "",
        repo: "",

        deskripsi: [
            "Aplikasi ini membantu kader posyandu memilih menu makanan tambahan yang gizinya paling baik. Tiap menu dinilai pada tujuh kriteria — karbohidrat, protein, vitamin A, kalori, mineral, serat, dan vitamin D — yang masing-masing punya bobot berbeda.",
            "Metode MOORA mengubah nilai gizi mentah menjadi matriks ternormalisasi, lalu menghitung nilai optimasi tiap menu. Hasilnya satu rekomendasi menu terbaik beserta peringkat lengkapnya, sehingga pilihan menu punya dasar angka, bukan kebiasaan.",
        ],

        fitur: [
            "Kelola daftar menu dan kriteria gizi beserta bobotnya",
            "Input nilai gizi tiap menu untuk setiap kriteria",
            "Perhitungan MOORA: matriks keputusan, normalisasi, dan nilai optimasi",
            "Peringkat menu dengan satu rekomendasi terbaik",
            "Dashboard grafik rangkuman data dan ringkasan hasil",
            "Cetak laporan hasil perhitungan",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/posyandu.webp",
                kind: "desktop",
                caption: "Jendela aplikasi desktop",
            },
        ],
    },

    {
        id: "smkn-39-jakarta",
        nama: "SMKN 39 Jakarta",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Klasifikasi kinerja PKL siswa dengan Naive Bayes, dari nilai mata pelajaran kejuruan.",
        peran: "Desain & Pengembangan",
        stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "JSON"],
        cover: "assets/logo-smk-jakarta.webp",
        galeri: [
            {
                src: "assets/smk-jakarta-1.webp",
                caption:
                    "Login — masuk ke sistem dengan akun resmi SMKN 39 Jakarta",
            },
            {
                src: "assets/smk-jakarta-2.webp",
                caption:
                    "Dashboard — akurasi model, progres klasifikasi, dan sebaran kelas",
            },
            {
                src: "assets/smk-jakarta-3.webp",
                caption:
                    "Daftar Siswa — pencarian, filter, dan ringkasan data tiap siswa",
            },
            {
                src: "assets/smk-jakarta-4.webp",
                caption:
                    "Data Training — pencarian, filter, dan ringkasan data tiap training",
            },
            {
                src: "assets/smk-jakarta-5.webp",
                caption:
                    "Proses Naive Bayes — perhitungan prior dan posterior tiap kelas",
            },
            {
                src: "assets/smk-jakarta-6.webp",
                caption: "Hasil Klasifikasi — rekap kelas kinerja tiap siswa",
            },
            {
                src: "assets/smk-jakarta-7.webp",
                caption:
                    "Laporan Prediksi — ringkasan hasil siap dicetak atau diunduh PDF",
            },
        ],
        demo: "",
        repo: "https://github.com/AnoAnggoro/SMKN_39_Jakarta.git",

        deskripsi: [
            "Sistem ini mengelompokkan kinerja PKL siswa menjadi tiga kelas — Sangat Baik, Baik, dan Kurang Baik — berdasarkan nilai PKK, TAV, dan DM. Modelnya dilatih dari 271 data siswa angkatan sebelumnya, dengan akurasi 99,3%.",
            "Guru bisa memasukkan nilai satu per satu atau mengimpor seluruh kelas sekaligus dari file CSV/XLSX. Setiap hasil klasifikasi menampilkan prior dan posterior tiap kelas beserta rekomendasi penempatan, jadi keputusannya bisa dijelaskan ke siswa dan pembimbing, bukan sekadar label.",
        ],

        fitur: [
            "Impor data siswa dan data latih dari file CSV/XLSX",
            "Klasifikasi Naive Bayes dengan rincian prior dan posterior tiap kelas",
            "Rekomendasi penempatan PKL yang mengikuti hasil klasifikasi",
            "Dashboard akurasi model, progres pemrosesan, dan sebaran kelas",
            "Rekap hasil dengan filter kelas dan tahun ajaran",
            "Laporan prediksi siap cetak PDF atau ekspor Excel",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/smk-jakarta.webp",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/smk-jakarta-tablet.webp",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/smk-jakarta-mobile.webp",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },

    {
        id: "bw-hairstyle",
        nama: "BW Hairstyle",
        tahun: "2026",
        tipe: "web",
        ringkas:
            "Situs booking barbershop empat cabang — pilih capster, treatment, dan jam yang masih kosong.",
        peran: "Desain & Pengembangan",
        stack: ["Next.js", "React", "Tailwind", "MongoDB", "Cloudinary"],
        cover: "assets/logo-bw.png",
        galeri: [
            {
                src: "assets/bw-1.png",
                caption:
                    "Beranda — jam buka, jumlah cabang, dan jalan pintas ke booking",
            },
            {
                src: "assets/bw-2.png",
                caption:
                    "About us — cerita salon dan cara kerja yang dipegang capster",
            },
            {
                src: "assets/bw-3.png",
                caption:
                    "Lokasi — empat cabang dengan alamat, jumlah capster, dan jam buka",
            },
            {
                src: "assets/bw-4.png",
                caption:
                    "Capster — pencarian nama atau spesialisasi, difilter per cabang",
            },
            {
                src: "assets/bw-5.png",
                caption:
                    "Service — daftar harga pria, wanita, dan perawatan lain",
            },
            {
                src: "assets/bw-6.png",
                caption: "Galeri — hasil potong capster, difilter per gaya",
            },
            {
                src: "assets/bw-7.png",
                caption:
                    "Masuk — akun untuk riwayat booking, opsional bagi pelanggan",
            },
            {
                src: "assets/bw-8.png",
                caption:
                    "Booking — lima langkah dari pilih cabang sampai isi data",
            },
        ],
        demo: "https://bw-hairstyle.vercel.app/",
        repo: "https://github.com/AnoAnggoro/Barbershop.git",

        deskripsi: [
            "Situs booking untuk Black White Hairstyle, barbershop dengan empat cabang di Jakarta Selatan dan Depok. Pemesanan jalan lima langkah — cabang, capster, treatment, tanggal dan jam, lalu data pemesan — dan jam yang ditawarkan dibaca langsung dari jadwal capster yang dipilih, per 30 menit dari jam 10.00 sampai 22.00, lengkap dengan alasan kalau satu slot tidak bisa diambil.",
            "Tiap capster punya spesialisasi dan daftar treatment yang benar-benar dikuasainya, jadi pilihan menyempit mengikuti siapa yang dipilih, bukan menampilkan semua service ke semua orang. Tidak ada bayar di muka: setelah booking, pelanggan pegang kode yang bisa dicek tanpa akun, dan yang mau riwayatnya tersimpan tinggal mendaftar dengan nomor HP yang sama.",
        ],

        fitur: [
            "Booking lima langkah: cabang, capster, treatment, tanggal dan jam, data pemesan",
            "Slot jam per 30 menit mengikuti jadwal capster, dengan keterangan kenapa satu jam tidak tersedia",
            "Profil capster berisi spesialisasi, treatment yang dikuasai, dan harga mulai — bisa dicari dan difilter per cabang",
            "Daftar service dengan harga dan durasi, terbagi pria, wanita, dan perawatan lain",
            "Cek booking pakai kode tanpa akun, atau masuk untuk melihat seluruh riwayat",
            "Galeri hasil potong yang bisa difilter per gaya",
            "Halaman cabang dengan alamat, peta, capster, dan service yang tersedia",
            "Jalur cadangan lewat WhatsApp untuk yang malas mengisi form",
        ],

        tantangan: [],

        shots: [
            {
                src: "assets/bw.png",
                kind: "laptop",
                caption: "Di layar laptop",
            },
            {
                src: "assets/bw-tablet.png",
                kind: "tablet",
                caption: "Di tablet",
            },
            {
                src: "assets/bw-mobile.png",
                kind: "mobile",
                caption: "Di HP",
            },
        ],
    },
];
