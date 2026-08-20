# Portofolio Sukamager — React Version

Hasil konversi dari HTML/CSS/JS statis menjadi React (Vite + React Router).

## Struktur halaman → routing

| Halaman asli | Route React |
|---|---|
| `index.html` (splash screen) | `/` |
| `home.html` | `/home` |
| `about.html` | `/about` |
| `show.html` | `/show` |
| `project.html` | `/project` |
| `contact.html` | `/contact` |
| `thanks.html` | `/thanks` |

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173`.

## Gambar / Assets

Semua gambar dari folder `img/` di project HTML lama (background.jpg, logo1.jpeg,
logo2.jpeg, logo-wayang.png, project0.png ... project8.png, show.jpg ... show7.jpeg,
favicon.ico) **harus kamu copy ke folder `public/img/`** di project React ini,
karena file gambar asli tidak ikut ter-upload. Path di kode (`/img/namafile`) sudah
disesuaikan supaya otomatis terbaca dari folder `public/img/`.

## Catatan penting

- **Font Awesome** & **Google Fonts (Poppins)** dimuat lewat CDN di `index.html`, sama seperti versi asli.
- **AOS** (animasi scroll) dipasang lewat package npm `aos` dan di-`init()` di setiap halaman lewat `useEffect`, menggantikan `<script src="aos.js">`.
- Efek **typewriter** di halaman Home ditulis ulang pakai `useState`/`useEffect`, tidak lagi manipulasi DOM langsung.
- Efek **particle & code rain** di splash screen (`index.html` asli) ditulis ulang dengan `useRef` + `useEffect`.
- Form di halaman Contact masih memakai `formsubmit.co` (submit biasa, redirect ke `_next`). Ganti value `_next` di `src/pages/Contact.jsx` ke domain hasil deploy React app kamu (misalnya `https://domainmu.com/thanks`).
- Navigasi antar-halaman pakai `react-router-dom` (`<NavLink>`), termasuk highlight menu aktif otomatis (menggantikan class `active` manual).

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/`, siap di-deploy ke Vercel, Netlify, GitHub Pages, dsb.
