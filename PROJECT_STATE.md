# DOKUMENTASI STATE PROYEK & LOG PENGEMBANGAN (PROJECT STATE & CONTEXT HANDOVER)

> **Catatan Penting untuk AI / Pengembang Selanjutnya:**  
> File ini adalah sumber kebenaran (*single source of truth*) mengenai status, arsitektur, keputusan desain, dan seluruh pekerjaan yang telah diselesaikan pada repositori ini. Jika Anda melanjutkan pengembangan proyek ini di masa mendatang atau melakukan debugging, baca file ini terlebih dahulu agar tidak terjadi kehilangan konteks (*mis-context*).  
>  
> 📌 **GOLDEN RULE PENGEMBANGAN:** Setiap kali kita melakukan modifikasi, debugging, penambahan fitur, atau revisi desain apa pun di repositori ini, file **PROJECT_STATE.md** ini WAJIB selalu diperbarui secara berkala pada bagian status dan tabel Changelog di Bagian 9.

---

## 1. RINGKASAN PROYEK & TUJUAN UTAMA

- **Nama Proyek:** GoPay "Budget & Spend" Interactive Mobile Prototype
- **Tipe Output:** Website dengan pengalaman tampilan mobile (*mobile-view website experience*).
  - Tampilan Desktop: Menampilkan frame smartphone modern yang realistis (status bar, dynamic island, notch, home indicator, bayangan ambient).
  - Tampilan Layar HP: Otomatis responsif 100% layar penuh (*full-bleed viewport* 100vw, 100dvh).
- **Tujuan Produk:** Prototipe interaktif *high-fidelity* untuk evaluasi akademik/desain produk perguruan tinggi. Prototipe ini mendemonstrasikan konsep *enhancement* pada fitur **Laporan Keuangan GoPay** yang sudah ada, mengubah pencatatan pengeluaran pasif menjadi **perencanaan anggaran aktif (*Personal Budget Planning*)**.
- **Kondisi Khusus (Zero-Backend):** Prototipe bekerja sepenuhnya di sisi klien (*client-side deterministic state*) tanpa backend, database, autentikasi, ataupun koneksi API GoPay/GoFood riil.

---

## 2. ATURAN BISNIS & LOGIKA INTI (BERDASARKAN `brief.md`)

1. **Kategori Pengeluaran Murni (TIDAK ADA KATEGORI TABUNGAN / NO SAVING):**
   - 100% budget bulanan hanya dibagi ke kategori pengeluaran riil:
     - **Makan & Minum (Food):** 30% = Rp900.000
     - **Umum & Transfer (General):** 20% = Rp600.000
     - **Transportasi (Transport):** 20% = Rp600.000
     - **Belanja & Tagihan (Shopping):** 15% = Rp450.000
     - **Gaya Hidup & Hiburan (Lifestyle):** 15% = Rp450.000
     - **Total:** Tepat Rp3.000.000 (100%).
   - *Peringatan Kritis:* Jangan pernah menambahkan tabungan (*saving*), investasi, atau dana darurat ke dalam alokasi budget ini.

2. **Simulasi Budget Harian (Deterministic Daily Allowance):**
   - Menghitung batas aman belanja harian dari sisa budget bulanan untuk September 2026.
   - Rumus pembobotan hari:
     - Bobot Hari Kerja (*Weekday*): `1.0`
     - Bobot Akhir Pekan (*Weekend*): `1.25`
     - Sisa hari di bulan September: 15 weekday & 5 weekend (Total hari berbobot = `15 * 1 + 5 * 1.25 = 21.25`).
   - Label jujur di UI: *"Simulasi budget harian dihitung dari sisa budget bulan ini."*

3. **Dynamic Budget Reallocation (Realokasi Anggaran Dinamis):**
   - Jika satu kategori minus/melebihi budget (contoh: Makan & Minum terpakai Rp930.000 dari budget Rp900.000, defisit Rp30.000):
   - Sistem meminta user memilih kategori sumber yang masih surplus (misal *Umum* sisa Rp180.000).
   - Memindahkan Rp30.000 dari *Umum* ke *Makan & Minum*.
   - Budget Makan & Minum menjadi Rp930.000, budget Umum berkurang menjadi Rp570.000.
   - **Total budget bulanan TIDAK BERTAMBAH (tetap Rp3.000.000).** Ini murni redistribusi anggaran *zero-sum*.

4. **Rekomendasi Kontekstual Hemat:**
   - Menampilkan rekomendasi makanan/transportasi yang harganya berada di bawah sisa kuota harian (contoh: *Sei Sapi Sambal Matah Rp18.000 ⭐ 4.8* saat sisa kuota harian makan Rp18.000).

5. **Notifikasi Reminder Suportif (Non-Judgmental):**
   - Pasca-transaksi (simulasi GoFood Rp28.000), toast meluncur dari atas dengan nada ramah:
     *"Baru saja makan pakai GoFood 🍜 • Budget makanan hari ini tersisa Rp12.000. Masih aman untuk 1x makan ringan hari ini."* (Bukan mempermalukan user seperti "Kamu boros").

---

## 3. ACUAN VISUAL DESAIN (FOLDER `IMPORTANT PAGES`)

Desain antarmuka dibuat sangat presisi meniru visual aplikasi GoPay asli:
- **Tema Warna:** Dark Slate Theme GoPay (`#0e1216`, kartu `#161c24` / `#1b2129`, border `rgba(255,255,255,0.07)`).
- **Aksen GoPay:** GoPay Cyan (`#00aed6`), GoPay Green (`#00aa13` / `#00d618`), Alert Coral (`#ff4343`), Warning Amber (`#f59e0b`).
- **Signature Card:** Kartu ringkasan bulanan dengan border gradasi cyan-ke-hijau (`linear-gradient(135deg, #00AED6, #00AA13)`).
- **Ruler / Dial Bulan:** Penunjuk kalender "Agu 2026 | Sep 2026" lengkap dengan garis skala milimeter dan jarum merah tengah.
- **Grafik Mingguan:** Chart bar ganda dengan bar belang diagonal (*Bulan sebelumnya*) dan bar solid toska (*Bulan ini*).
- **Navigation Bar:** Floating dark glass bar dengan tombol tengah QRIS elevated bercahaya toska.

---

## 4. TECH STACK & DEPENDENCIES

- **Framework:** Vite 6 + React 18 + TypeScript
- **Styling:** Scoped Vanilla CSS dengan GoPay tokens ([theme.css](file:///d:/gabuting/gopaypay/src/styles/theme.css))
- **Icons:** `lucide-react` (SVG icons)
- **State Management:** React Context API ([BudgetContext.tsx](file:///d:/gabuting/gopaypay/src/context/BudgetContext.tsx))
- **Status Build:** `npm run build` sukses 100% tanpa error TypeScript (0 warning/error).

---

## 5. STRUKTUR FOLDER & ARSITEKTUR FILE

```
d:\gabuting\gopaypay\
├── IMPORTANT PAGES/                 # Screenshot referensi aplikasi GoPay asli
│   ├── GoPay Home Page/             # homepage1.jpeg, homepage2.jpeg
│   ├── Report Page/                 # reportpage_1.jpeg s/d reportpage_4.jpeg
│   └── page_info.md                 # Keterangan urutan scroll referensi
├── brief.md                         # Dokumen brief produk dan spesifikasi lengkap
├── PROJECT_STATE.md                 # (File ini) Dokumen handover status proyek
├── package.json                     # Konfigurasi npm, dependencies, scripts
├── tsconfig.json                    # Konfigurasi TypeScript
├── vite.config.ts                   # Konfigurasi Vite dev server
├── index.html                       # Entry HTML dengan Google Fonts Plus Jakarta Sans
└── src/
    ├── main.tsx                     # React root mount
    ├── App.tsx                      # App wrapper dengan BudgetProvider
    ├── types/
    │   └── budget.ts                # Tipe data TypeScript (CategoryBudget, Transaction, DemoState, dll)
    ├── styles/
    │   └── theme.css                # Desain sistem lengkap, tokens, animasi, mobile frame chassis
    ├── context/
    │   └── BudgetContext.tsx        # State store: data kategori, simulasi transaksi, realokasi, reset
    ├── components/
    │   ├── MobileFrame.tsx          # Frame smartphone, status bar 15.10, bottom nav, evaluator dock
    │   ├── CategoryDetailSheet.tsx  # Bottom sheet detail kategori & rumus weekday vs weekend
    │   ├── BudgetReallocationSheet.tsx # Bottom sheet realokasi surplus antar kategori
    │   ├── RecommendationSheet.tsx  # Bottom sheet rekomendasi hemat pas budget
    │   └── PitchGuideSheet.tsx      # Sheet panduan evaluator kampus & 5 pilar dalam 2 menit
    └── screens/
        ├── HomePage.tsx             # Halaman Beranda GoPay (saldo, spending pill, 8 layanan, kontak)
        └── ReportPage.tsx           # Halaman Laporan Keuangan (kartu gradasi, chart mingguan, 5 kategori)
```

---

## 6. FITUR INTERAKTIF & CARA PENGUJIAN (EVALUATOR DEMO)

Pengguna atau evaluator dapat menguji alur demo melalui dua cara:
1. **Navigasi Langsung di Dalam Aplikasi:**
   - Di Beranda, klik kartu: `ılı Rp1.820.000 sudah terpakai di Sep... >` -> berpindah ke Laporan Keuangan.
   - Klik kategori **Makan & Minum** -> membuka sheet rumus alokasi harian weekday vs weekend.
   - Klik tombol simulasi di halaman laporan atau banner rekomendasi -> memicu transaksi GoFood Rp28.000.
   - Jika over-budget, klik **"Atur ulang budget"** -> pilih kategori sumber *Umum* -> konfirmasi pemindahan Rp30.000.
2. **Evaluator Presentation Dock (Toolbar Melayang di Bawah Layar):**
   - **[Beranda]**: Kembali ke Beranda GoPay kapan saja.
   - **[Laporan Budget]**: Langsung ke Laporan Keuangan.
   - **[Simulasi GoFood (28k)]**: Memicu pembelian makanan, mengupdate sisa harian & bulanan, serta memunculkan toast ramah.
   - **[Tes Over-Budget]**: Memicu skenario defisit Makan & Minum (+Rp30.000) dan memunculkan banner peringatan merah.
   - **[Reset]**: Mereset seluruh data kembali ke kondisi awal evaluasi.
   - **[Konsep & Pitch]**: Membuka ringkasan 2 menit tentang konsep produk dan 5 pilar inovasi untuk evaluasi akademik.
   - **[Maximize/Minimize Frame]**: Toggle tampilan frame smartphone atau layar penuh.

---

## 7. CARA MENJALANKAN PROYEK

- **Menjalankan Server Lokal (Dev Server):**
  ```powershell
  npm run dev
  ```
  Server berjalan di `http://localhost:5173/`.

- **Mengecek Kompilasi & Build Produksi:**
  ```powershell
  npm run build
  ```

---

## 8. STATUS TAHAP SAAT INI & LANGKAH SELANJUTNYA

- **Tahap Sekarang:** `TAHAP 1 SELESAI (Prototype Complete & Fully Interactive)`.
- Seluruh spesifikasi dari [brief.md](file:///d:/gabuting/gopaypay/brief.md) dan referensi dari [IMPORTANT PAGES](file:///d:/gabuting/gopaypay/IMPORTANT%20PAGES) telah diimplementasikan, diverifikasi visual, dan berhasil di-build.
- **Menunggu:** Pengujian mandiri oleh user dan *feedback* lanjutan jika ada penyesuaian teks, angka, animasi, atau penambahan interaksi tertentu.

---

## 9. RIWAYAT PERUBAHAN & LOG AKTIVITAS (CHANGELOG)

> ⚡ **ATURAN WAJIB SETIAP SESI:** Setiap ada perubahan kode, perbaikan fitur, atau penyesuaian UI dari feedback user, tambahkan entri log baru di bawah ini beserta tanggal & rincian perubahannya.

| Tanggal & Waktu | Status / Versi | Ringkasan Pekerjaan yang Dilakukan |
| :--- | :--- | :--- |
| **03 Sep 2026 - 16:15** | `v1.0.0` (Inisiasi & Prototipe Lengkap) | • Inisialisasi Vite + React + TypeScript.<br>• Implementasi desain dark mode GoPay & mobile frame responsif.<br>• Halaman Beranda (Home) dengan balance, spending hero pill, 8 layanan, dan promo.<br>• Halaman Laporan Keuangan dengan kartu ringkasan gradasi, dial bulan, chart mingguan, dan 5 kategori anggaran.<br>• Alur Cek Kuota Harian (Weekday vs Weekend) & Bottom Sheet.<br>• Alur Simulasi Transaksi GoFood (Rp28k) & Toast Notification ramah.<br>• Alur Simulasi Defisit Over-Budget (Rp30k) & Realokasi Anggaran zero-sum.<br>• Evaluator Presentation Dock & Panduan Pitch 2 Menit.<br>• Verifikasi visual & build lulus 100%. |
| **03 Sep 2026 - 22:45** | `v1.0.1` (Dokumentasi & Handover Log) | • Pembuatan file [PROJECT_STATE.md](file:///d:/gabuting/gopaypay/PROJECT_STATE.md) sebagai *single source of truth*.<br>• Penetapan aturan wajib update berkala untuk setiap sesi/AI selanjutnya.<br>• Server dev standby di port 5173 untuk pengujian mandiri user. |
| **03 Sep 2026 - 22:55** | `v1.0.2` (Perbaikan Feedback User) | • **Sinkronisasi Saldo:** Saldo utama di HomePage (`mainBalance`) kini reaktif dan berkurang otomatis saat simulasi transaksi GoFood dilakukan (Rp3.482.000 -> Rp3.454.000).<br>• **Pembersihan Beranda:** Hapus teks kecil biru di pill pengeluaran & hapus box 'Pengingat' (Simpanan/Nabung).<br>• **Pembersihan Laporan Keuangan:** Hapus card 'Cashback Emas 3%' & card 'Sekilas info dari Dira'.<br>• **Chart Mingguan Rapi:** Pisahkan label sumbu Y (600rb, 400rb, 200rb, 0) ke kolom tersendiri di sebelah kiri sehingga tidak lagi menabrak bar chart.<br>• **Nama Merchant Riwayat:** Ganti 'Institut Teknologi Bandung' menjadi 'Universitas Indonesia' & 'Desy Rahmawati' menjadi 'Daniel Adrian'.<br>• **Logika Rekomendasi Adaptif:** Teks dan rekomendasi makanan di Laporan Keuangan & Sheet kini dinamis mengikuti sisa kuota harian riil (berubah otomatis saat kuota habis/berkurang). |
| **03 Sep 2026 - 23:01** | `v1.0.3` (Logika Dinamis Toast Notifikasi) | • **Perbaikan Logika Notif:** Teks notifikasi GoFood kini 100% dinamis dan reaktif. Jika ditekan berkali-kali, notifikasi menghitung sisa kuota harian riil, memperingatkan jika kuota hari ini habis (Rp0), dan jika terus ditekan hingga melebihi budget bulanan akan menampilkan alert warning over-budget.<br>• **Animasi Re-Trigger Toast:** Penambahan reactive key pada toast notifikasi agar setiap kali simulasi ditekan ulang, toast langsung memunculkan animasi slide-down baru tanpa macet. |
| **03 Sep 2026 - 23:05** | `v1.0.4` (Sinkronisasi Kuota Harian Makanan Awal) | • **Kalibrasi Angka Kuota Makanan Awal:** Kuota harian awal makan (*daily allowance*) diset tepat di Rp40.000 (hari ini belum jajan / Rp0 terpakai). Sehingga saat tombol 'Simulasi GoFood (28k)' diklik pertama kali: Rp40.000 - Rp28.000 = **sisa pas Rp12.000** dan notifikasi pertama muncul ramah. Klik kedua menghabiskan sisa menjadi Rp0 dan memicu notifikasi kuota habis. |
| **03 Sep 2026 - 23:42** | `v1.1.0` (Refaktor Tab Pengeluaran vs Pemasukan) | • **Pemisahan Logika Tab:** Memindahkan seluruh fitur inovasi *Personal Budget Planning* ke section **PEMASUKAN** (karena budget planning adalah cara user mengalokasikan pemasukannya untuk dibelanjakan).<br>• **Tab Pengeluaran (Standard Asli GoPay):** Tampilan murni seperti aplikasi GoPay aslinya di folder screenshot (total pengeluaran Rp1.820.000, weekly bar chart, kategori pengeluaran standar dengan % terpakai, dan riwayat belanja tanpa kontrol budget).<br>• **Tab Pemasukan (Pusat Inovasi Budget & Spend Planner):** Menampilkan kartu total pemasukan (Rp3.000.000 / Rp5.000.000 preset simulasi), fitur interaktif atur persentase per kategori secara bebas (*pure dari user* dengan tombol `[-]` dan `[+]`), sistem otomatis menerjemahkan % menjadi nominal Rupiah secara real-time, simulasi kuota harian, rekomendasi hemat pas budget, dan riwayat transaksi pemasukan riil (+Rp2jt Top Up BCA, +Rp850rb Honor, +Rp100rb Cashback Coins, +Rp50rb Bunga Jago).<br>• **Toolbar Presentasi Fleksibel:** Tombol cepat di toolbar bawah kini memiliki akses instan ke `[Pemasukan (Planner)]` dan `[Pengeluaran (Asli)]`. |
| **04 Sep 2026 - 00:08** | `v1.1.1` (Penyempurnaan Visual & Navigasi Default) | • **Navigasi Default ke Pengeluaran:** Klik spending pill di Beranda kini otomatis membuka tab **Pengeluaran** terlebih dahulu (sesuai ekspektasi alur normal GoPay). Tab Pemasukan diakses saat user memilih tab Pemasukan atau tombol toolbar.<br>• **Pembersihan Kartu Pemasukan:** Menghapus badge 'Budget & Spend Planner' dan tombol preset 3jt/5jt di kartu pemasukan agar tampilan rapi, bersih, dan fokus pada angka Rp3.000.000 murni.<br>• **Perapihan Sizing Box Kuota Harian:** Mengatur ulang placing teks judul 'Simulasi Kuota Harian' dengan pill 'Hari Ini' di kanan, serta memindahkan rumus pembobotan 'Weekday 1.0x • Weekend 1.25x' ke baris kedua dengan tipografi elegan yang tidak lagi berdesakan.<br>• **Audit Kesinambungan Logika & Tampilan:** Memverifikasi sinkronisasi 100% antara saldo utama di Beranda, total spent, pengeluaran kategori, sisa kuota harian, riwayat transaksi belanja vs pemasukan, dan bottom sheets. |
| **04 Sep 2026 - 00:15** | `v1.1.2` (Inisiasi Git & Push ke GitHub) | • **Konfigurasi Git & .gitignore:** Menyiapkan `.gitignore` profesional (mengecualikan `node_modules`, `dist`, `.tsbuildinfo`, dll.).<br>• **Konfigurasi Vercel (vercel.json):** Menyiapkan rewrites SPA agar routing dan refresh di browser HP / Vercel tidak mengalami 404.<br>• **Push ke GitHub:** Berhasil inisialisasi branch `main` dan melakukan push 100% tuntas ke remote `https://github.com/andreas916/paygopaygo.git`. Siap dihubungkan ke Vercel untuk deployment otomatis. |
| **04 Sep 2026 - 00:27** | `v1.1.3` (Solusi FAB Responsif Khusus HP) | • **Sembunyikan Dock Panjang di HP:** Di layar smartphone (`max-width: 767px`), toolbar dock panjang yang menutupi konten otomatis disembunyikan sepenuhnya.<br>• **Implementasi FAB (Floating Action Button) Mini:** Digantikan oleh satu tombol bundar kecil elegan berukuran 42px dengan ikon `⚡` di pojok kanan bawah (`bottom: 84px`), tepat di atas navigation bar GoPay dan bebas dari tab utama.<br>• **Modal Sheet Panel Evaluator:** Saat tombol FAB ditekan, muncul bottom sheet kaca transparan berisi kontrol cepat (Beranda, Pengeluaran, Pemasukan, GoFood 28k, Over-Budget 30k, Reset, Pitch Guide). Saat ditutup, layar HP kembali 100% bersih seperti aplikasi GoPay asli.<br>• **Desktop Tetap Utuh:** Di layar laptop/desktop (`min-width: 768px`), toolbar horizontal di bawah frame HP tetap muncul seperti biasa untuk kenyamanan evaluasi. |
| **04 Sep 2026 - 00:43** | `v1.2.0` (Replika Lengkap Homepage Gojek & Interkoneksi App) | • **Replika Presisi Gojek Home Page (`GojekHomePage.tsx`):** Dibuat sepersis mungkin berdasarkan screenshot `gojek_homepage1.jpeg`.<br>  - Header pencarian 'Bakso', tombol emas 'Yuk, join!', dan avatar profil hijau.<br>  - Hero banner mint 'Kapan Terakhir Kali? Pulang Masih Lihat Matahari & Ga Mikir Masak Apa'.<br>  - Kartu saldo GoPay melayang dengan tombol Bayar, Riwayat, dan **Lainnya (badge 8)**.<br>  - Grid 8 layanan Gojek: GoRide (~5RB), GoCar (8rb), GoFood (Rp1), GoSend (7rb), GoMart (30MINS), GoPay Later, GOJEK7AN (Rp7), dan Lainnya.<br>  - Banner promo hijau 'Mau tarif GoRide lebih hemat? 7rb'.<br>  - Kartu streak Hadiah Harian 7 hari lengkap dengan binder hinges dan tombol 'Klaim'.<br>  - Bottom navigation bar native Gojek (Beranda, Promo, Pesanan, Chat).<br>• **Interkoneksi GoPay ⟷ Gojek:**<br>  - Klik ikon 'Gojek' (badge MURAAAH) di Beranda GoPay ➜ berpindah penuh ke aplikasi Gojek.<br>  - Klik tombol **Lainnya** pada kartu saldo GoPay di halaman Gojek ➜ otomatis kembali ke Beranda GoPay.<br>• **Adaptasi Status Bar:** Status bar otomatis mengadaptasi warna ikon & jam menjadi gelap saat berada di halaman Gojek (karena latar belakang Gojek hijau muda terang). |
| **04 Sep 2026 - 00:52** | `v1.2.1` (Perbaikan Tampilan Gojek: Bottom Nav & Status Bar) | • **Perbaikan Bottom Nav Gojek Melebar:** Memindahkan Gojek bottom navigation bar ke dalam kontainer `.mobile-device-frame` (`position: absolute; bottom: 0; left: 0; right: 0`), sehingga di mode desktop/laptop navbar Gojek terkunci rapi di dalam chassis frame mobile dan tidak lagi tumpah keluar memenuhi monitor.<br>• **Status Bar Konsisten & Opaque:** Menjadikan status bar selalu berwarna putih bersih (`#ffffff`, fill `#ffffff`) dengan latar belakang solid gelap (`#0e1216`) dan z-index tinggi, sehingga jam, dynamic island, sinyal 4G, wifi, dan baterai selalu terlihat jelas, senada, dan tidak pernah hilang di mode Gojek maupun GoPay.<br>• **Sinkronisasi Saldo Real-Time:** Saldo GoPay di Gojek Home Page (`state.mainBalance`) terverifikasi 100% reaktif dan selalu sama dengan saldo di Beranda GoPay saat ada transaksi simulasi. |
| **04 Sep 2026 - 01:06** | `v1.2.2` (Privasi & Keamanan: Abaikan IMPORTANT PAGES) | • **Proteksi Aset Pribadi (.gitignore):** Menambahkan aturan `IMPORTANT PAGES/` ke `.gitignore` dan menghapus seluruh riwayat pelacakan git (*git untrack*) untuk folder tersebut.<br>• **File Lokal Tetap Utuh:** File screenshot tetap tersimpan aman di direktori lokal komputer Anda untuk referensi, namun **100% dihapus dan dicegah ter-push ke GitHub** publik demi menjaga kerahasiaan & privasi tangkapan layar akun. |
| **04 Sep 2026 - 23:25** | `v1.3.0` (Replika Lengkap Alur GoRide & GoFood di Gojek) | • **Alur Pemesanan GoRide (3 Halaman):**<br>  - `GoRide1Page`: Greeting malam, kartu cashback, peta preview radius driver, pencarian tujuan & riwayat lokasi (ITB & Mie Gacoan Dago). Klik ITB lanjut ke tahap 2.<br>  - `GoRide2Page`: Peta jalan 3D mendeteksi titik jemput otomatis 'Kos Panros', tombol konfirmasi titik jemput.<br>  - `GoRide3Page`: Peta rute Bandung-Jatinangor, pemilihan GoRide Cepat Rp58.500 vs Comfort Rp63.500. **Highlight Saldo Kurang:** Tampilan 'Sisa saldo: Rp13.971' berwarna merah jelas dan tidak terpotong (lebih kecil dari tarif Rp58.500).<br>• **Alur Pemesanan GoFood (3 Halaman):**<br>  - `GoFood1Page`: Banner hero merah GoFood, promo Murah Ongkir Rp1, daftar Menu Murah dengan target 'Ayam Bakar Madu Dada/Paha Rp22.000'.<br>  - `GoFood2Page`: Halaman resto 'Ayam Bakar Madu Ontohod Tubagus Ismail', 1 item masuk keranjang, floating green bottom bar Rp22.000.<br>  - `GoFood3Page`: Ringkasan pembayaran total Rp25.001 (setelah ongkir & diskon). **Highlight Saldo Kurang:** Strip hitam 'Sisa saldo: Rp13.971' dan sumber dana merah Rp13.971 yang lebih kecil dari tagihan Rp25.001.<br>• **Integrasi Seamless:** Tombol GoRide & GoFood di Beranda Gojek langsung mengarah ke flow ini, dengan tombol kembali bertingkat dan shortcut evaluator di desktop dock & mobile FAB. |
| **04 Sep 2026 - 23:48** | `v1.3.1` (Penyesuaian Visual & Teks GoFood & GoRide) | • **GoFood1Page:** Memperbaiki posisi tombol hijau konfirmasi di bawah dengan menambahkan section kartu 'Pilihan resto terpopuler' untuk mengisi ruang vertikal secara natural; mengubah teks menjadi '1 item' (14px tebal), menghapus subteks 'Diantar dari...', dan menyesuaikan harga menjadi Rp22.000.<br>• **GoFood2Page & GoFood3Page:** Menyesuaikan nama restoran menjadi 'Ayam Bakar Madu Lisa' di resto info, floating bar, dan header GoFood3Page.<br>• **GoRide1Page:** Mengubah sapaan menjadi 'Mau kemana, daniel?'; mengubah riwayat tujuan menjadi 'Universitas Indonesia', 'Mie Gacoan', dan menambahkan lokasi baru 'Uchi Parfume'.<br>• **GoRide2Page:** Mengubah pill menjadi 'Sering di sini', titik jemput menjadi 'Kos Daniel' dengan alamat Jakarta Timur ('Jl. Pemuda No. 28, Rawamangun, Pulo Gadung, Jakarta Timur'), dan menghapus kata Dago pada teks peta ('Dehakidz').<br>• **GoRide3Page:** Mengubah titik jemput menjadi 'Kos Daniel' dan tujuan 'Universitas Indonesia'; memperbarui peta rute (Lembang ➔ Depok, menghapus Bandung & Cileunyi, Rancaekek ➔ Mie Gacoan); menempatkan tombol Back dan pill 'Ganti tipe trip' sejajar berdampingan mengambang persis di atas bottom sheet sehingga tidak tertutup lagi. |












