# GoPay "Budget & Spend" Prototype (Mobile-View Experience)

Prototipe web interaktif (*mobile-view website prototype*) untuk inovasi fitur **Personal Budget Planning ("Budget & Spend")** pada aplikasi GoPay. Fitur ini mentransformasi pencatatan keuangan pasif menjadi alokasi anggaran aktif berbasis persentase mandiri (*user-driven*) dari total pemasukan.

---

## 🌟 Fitur Utama

1. **Pengalaman Mobile Native:** Tampilan mobile frame realistis di desktop dan otomatis responsif 100% layar penuh di smartphone.
2. **Pemisahan Logika Tab:**
   - **Tab Pengeluaran (Standard Asli GoPay):** Tampilan murni seperti aplikasi GoPay aslinya (total pengeluaran, chart mingguan rapi, kategori pengeluaran tanpa fitur budget eksperimental, dan riwayat transaksi).
   - **Tab Pemasukan (Pusat Inovasi Budget & Spend Planner):** 
     - Alokasi persentase mandiri per kategori belanja (Makan, Umum, Transport, Belanja, Gaya Hidup).
     - Penerjemahan otomatis dari persentase (%) ke nominal Rupiah secara *real-time*.
     - Simulasi kuota harian aman belanja (*Weekday 1.0x* vs *Weekend 1.25x*).
     - Rekomendasi kontekstual hemat pas kuota harian.
     - Riwayat pemasukan riil (Top Up BCA, Honor Gaji, Cashback Coins, Bunga Jago).
3. **Simulasi Transaksi & Notifikasi Dinamis:** Simulasi transaksi GoFood Rp28.000 dengan pengurangan saldo riil di Beranda dan notifikasi suportif ramah.
4. **Realokasi Anggaran Defisit (Zero-Sum Transfer):** Menangani kondisi over-budget dengan memindahkan surplus antar kategori tanpa menambah total anggaran bulanan.

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build
```

---

## 🌐 Panduan Deployment ke Vercel

Proyek ini sudah dikonfigurasi siap pakai (*out-of-the-box*) untuk deployment ke **Vercel**:
- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Routing Configuration:** Menggunakan `vercel.json` untuk *Single Page Application (SPA) rewrites*.

Cukup hubungkan repository GitHub `andreas916/paygopaygo` ke akun Vercel Anda, dan Vercel akan otomatis melakukan build serta deploy setiap kali ada *commit* atau *push* ke branch `main`.

---

## 📄 Dokumentasi Status & Log Pengembangan

Lihat file **[PROJECT_STATE.md](./PROJECT_STATE.md)** untuk dokumentasi arsitektur lengkap, riwayat versi (*changelog*), dan panduan handover.
