# Frappe QOL (Quality of Life) Settings 

Custom App Frappe yang dirancang khusus untuk meningkatkan pengalaman pengguna (UX) dan antarmuka (UI) di ERPNext/Frappe. Aplikasi ini menghadirkan beberapa penyesuaian *Quality of Life* yang sangat dibutuhkan untuk membuat navigasi lebih lancar, menghemat klik, dan memaksimalkan ruang layar Anda.

Semua fitur bersifat modular dan dapat diaktifkan atau dimatikan secara instan melalui menu *Single DocType* khusus.

## ✨ Fitur Utama

### 1. Custom Width (Fluid) Layout
Bosan dengan lebar kontainer bawaan yang sempit saat dibuka di monitor besar? Fitur ini menimpa *layout* bawaan Frappe dan memaksa tampilan melebar 100% (*fluid width*). 
* Memaksimalkan ruang layar Anda.
* Sangat cocok untuk melihat laporan yang kompleks, *dashboard*, dan *child table* yang banyak kolomnya tanpa harus berdesakan.

### 2. Auto-Uncheck "Private" saat Upload File
Secara bawaan (default), Frappe selalu mencentang kotak "Private" setiap kali kita melampirkan file. Jika alur kerja perusahaan Anda membutuhkan lampiran agar bersifat publik secara *default*, fitur ini akan secara otomatis menghilangkan centang pada kotak tersebut—menghemat satu klik ekstra yang menyebalkan setiap kali Anda mengunggah dokumen!

### 3. Auto-Close Sidebar
Buat layar Anda tetap bersih dan fokus pada data. Fitur ini secara otomatis melipat (*collapse*) sidebar sebelah kiri untuk memberi Anda ruang kerja yang lebih luas. Anda dapat memilih secara spesifik di halaman mana saja *sidebar* harus otomatis menutup:
* **Workspaces**
* **List Views**

## ⚙️ Cara Penggunaan & Konfigurasi
Tidak perlu bongkar-bongkar kode (*hardcoding*)! Anda memiliki kendali penuh atas fitur mana saja yang aktif langsung dari antarmuka ERPNext.
1. Buka *Awesome Bar* (Ctrl + G) dan cari **QOL Settings**.
2. Navigasi melalui tab yang tersedia (Sidebar, Attach File, Responsive).
3. Centang atau hilangkan centang pada fitur yang ingin Anda atur.
4. Klik **Save** (Perubahan akan langsung diterapkan pada saat halaman dimuat ulang / *reload*).

## 🛠️ Cara Install
Buka terminal di server Anda dan jalankan perintah *bench* berikut:
```bash
bench get-app [https://github.com/username_anda/nama_repo_anda.git](https://github.com/username_anda/nama_repo_anda.git)
bench --site nama_site_anda install-app nama_app_anda
bench build --app nama_app_anda
bench restart
bench clear-cache
