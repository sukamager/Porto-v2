# Portfolio Sukamager - React.js Version

Portfolio website yang dibangun menggunakan **React.js** dan **Framer Motion** untuk animasi yang smooth dan modern.

## 🚀 Teknologi yang Digunakan

- **React.js 18** - Library JavaScript untuk membangun UI
- **Framer Motion** - Library animasi modern untuk React
- **CSS3** - Styling dengan Flexbox & Grid
- **Font Awesome** - Icons
- **Google Fonts (Poppins)** - Typography

## 📁 Struktur Project

```
portfolio-react/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── img/
│       ├── background.jpg
│       ├── logo-wayang.png
│       ├── logo1.jpg
│       ├── logo2.jpg
│       ├── show.jpg
│       ├── show2.jpg
│       ├── show3.jpg
│       ├── show4.jpg
│       ├── show5.jpeg
│       ├── project0.png
│       ├── project1.png
│       ├── project2.png
│       ├── project3.jpeg
│       ├── project4.jpeg
│       ├── project5.png
│       └── project6.png
├── src/
│   ├── components/
│   │   ├── SplashScreen.jsx
│   │   ├── Navigation.jsx
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ShowPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Fitur & Animasi

### 1. **Splash Screen**
- Partikel animasi terbang
- Code rain effect
- Logo floating animation
- Loading progress bar

### 2. **Navigation**
- Pill-style navbar modern
- Smooth hover effects
- Active state indicator
- Responsive untuk mobile

### 3. **Home Page**
- Typewriter effect otomatis
- Social media icons dengan rotate animation
- Profile image dengan pulsing glow
- Smooth entrance animations

### 4. **About Page**
- Image hover scale effect
- Text slide animations
- Spotify embeds terintegrasi
- Grid layout responsive

### 5. **Show & Projects Pages**
- Stagger animation untuk cards
- Hover lift effect
- Image zoom on hover
- Sequential loading

### 6. **Contact Page**
- Form dengan floating labels
- Sequential field animations
- Social links dengan bounce effect
- FormSubmit.co integration

## 🛠️ Cara Menjalankan Project

### Prerequisites
Pastikan Anda sudah menginstall:
- **Node.js** (versi 14 atau lebih baru)
- **npm** atau **yarn**

### Instalasi

1. **Clone atau download project ini**

2. **Masuk ke folder project**
   ```bash
   cd portfolio-react
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   atau jika menggunakan yarn:
   ```bash
   yarn install
   ```

4. **Copy folder img**
   - Copy semua gambar dari portfolio lama ke folder `public/img/`
   - Pastikan struktur folder sama seperti yang disebutkan di atas

5. **Jalankan development server**
   ```bash
   npm start
   ```
   atau:
   ```bash
   yarn start
   ```

6. **Buka browser**
   - Project akan otomatis terbuka di `http://localhost:3000`
   - Jika tidak, buka manual di browser

## 📦 Build untuk Production

Untuk membuat versi production yang siap deploy:

```bash
npm run build
```

Folder `build/` akan berisi file-file optimized yang siap di-deploy ke hosting.

## 🌐 Deploy ke GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Tambahkan di package.json**
   ```json
   "homepage": "https://sukamager.github.io/portfolio-react",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:
- **Desktop**: > 884px
- **Tablet**: 481px - 884px
- **Mobile**: < 480px

## ⚡ Performance

- **Lazy loading** untuk gambar
- **Code splitting** otomatis dengan React
- **Optimized animations** dengan Framer Motion
- **Smooth scrolling** di semua halaman

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Customization

### Mengubah Warna Tema
Edit file `src/App.css` dan cari `rgb(50, 132, 255)` untuk mengubah warna primary.

### Menambah Halaman Baru
1. Buat file component baru di `src/components/`
2. Import di `src/App.js`
3. Tambahkan case di function `renderPage()`
4. Tambahkan nama halaman di array `navItems` di Navigation.jsx

### Mengubah Animasi
Edit komponen yang diinginkan dan sesuaikan properties:
- `initial` - State awal
- `animate` - State akhir
- `transition` - Durasi dan easing
- `whileHover` - Efek saat hover
- `whileTap` - Efek saat di-klik

## 🐛 Troubleshooting

**Problem**: Gambar tidak muncul
- **Solution**: Pastikan semua gambar ada di folder `public/img/`

**Problem**: Animasi patah-patah
- **Solution**: Periksa performa browser dan tutup aplikasi yang tidak perlu

**Problem**: npm start error
- **Solution**: Hapus folder `node_modules` dan `package-lock.json`, lalu jalankan `npm install` lagi

## 📞 Contact

Jika ada pertanyaan atau issue:
- **Instagram**: [@_ilulmagerbgt](https://instagram.com/_ilulmagerbgt)
- **GitHub**: [@sukamager](https://github.com/sukamager)
- **Email**: basyarmuhammad13@gmail.com

## 📄 License

MIT License - Feel free to use this project for learning purposes.

---

**Dibuat dengan ❤️ oleh Sukamager**
