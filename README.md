# nodejs-blog
blog website first
<img src="capture/Screenshot.png"></img>
```markdown
# Website Blog dengan Node.js dan MongoDB

Ini adalah panduan singkat untuk membuat website blog sederhana menggunakan Node.js dan MongoDB.

## Persyaratan

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Cara Memulai

1. Clone repositori ini ke dalam komputer Anda.

```bash
git clone https://github.com/fajarjulyana/nodejs-blog.git
cd namarepositori
```

2. Install dependencies dengan perintah berikut:

```bash
npm install
```

3. Buat file `.env` di direktori utama dan konfigurasi variabel lingkungan Anda seperti ini:

```plaintext
MONGO_URI=MONGODB_URI=mongodb+srv://fajarjulyana1:jza28AmlCbbUIYWM@fcluster.c3xpnet.mongodb.net/blog
SECRET_KEY=KunciRahasiaAnda
```

4. Jalankan aplikasi:

```bash
npm run dev
```

5. Aplikasi sekarang akan berjalan di [http://localhost:5000](http://localhost:5000). Anda dapat mengaksesnya melalui browser Anda.

## Menggunakan Aplikasi

- Aplikasi ini adalah website blog sederhana dengan fitur penambahan, pengeditan, dan penghapusan posting.
- Untuk mengelola posting, buka halaman admin di [http://localhost:5000/admin](http://localhost:5000/admin).
- Anda dapat menggunakan API endpoints untuk mengakses data atau mengintegrasikan dengan klien front-end yang lain.

## Kontribusi

Silakan berkontribusi dengan mengirimkan permintaan tarik (pull request) ke repositori ini.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - Lihat berkas [LICENSE](LICENSE) untuk detail lebih lanjut.
```
