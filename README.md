# Next.js Boilerplate

Ini adalah boilerplate Next.js modern yang dirancang untuk mempercepat pengembangan aplikasi web skala besar dan mudah di-maintain. Dibangun dengan fokus pada performa, pengalaman developer, dan skalabilitas menggunakan **App Router** Next.js 13/14, **TypeScript**, **Tailwind CSS**, dan berbagai library penting lainnya.

-----

## Fitur Utama

  * **Next.js 14+ (App Router)**: Pemanfaatan fitur terbaru Next.js untuk Server Components, Route Handlers, dan layout yang fleksibel.
  * **TypeScript**: Peningkatan kualitas kode dan deteksi *error* di awal.
  * **Tailwind CSS**: Utility-first CSS framework untuk styling yang cepat dan konsisten.
  * **Shadcn UI**: Koleksi komponen UI yang dapat di-*copy-paste* dan sangat mudah dikustomisasi, dibangun di atas Radix UI dan Tailwind CSS.
  * **NextAuth.js (Auth.js)**: Solusi autentikasi lengkap dengan dukungan *Credentials Provider* dan manajemen sesi JWT.
  * **TanStack Query (React Query)**: Untuk manajemen *state* server yang efisien (data fetching, caching, revalidation, optimistic updates).
  * **Axios**: HTTP client yang andal untuk melakukan permintaan API.
  * **ESLint & Prettier**: Untuk konsistensi gaya kode dan pencegahan *error*.
  * **Struktur Folder yang Terorganisir**: Memudahkan navigasi dan pemeliharaan proyek.

-----

## Struktur Folder

```
.
├── app/                  # Direktori utama untuk App Router (pages, layouts, route handlers)
│   ├── (auth)/           # Route Group untuk halaman terkait autentikasi (login, register)
│   ├── (home)/           # Route Group untuk halaman utama
│   ├── (dashboard)/           # Route Group untuk halaman dashboard
│   ├── api/              # Route Handlers (API endpoints)
│   ├── layout.tsx        # Root layout aplikasi
├── components/           # Komponen UI yang dapat digunakan kembali
│   ├── ui/               # Komponen dari Shadcn UI (button, input, dll.)
│   ├── common/           # Komponen umum (Navbar, Footer)
│   └── feature/          # Komponen spesifik fitur
├── lib/                  # Utilitas, helper, hooks, config, fetchers
│   ├── fetchers/         # Abstraksi untuk panggilan API (fetcherClient, fetcherServer)
│   ├── utils/            # Fungsi utilitas umum (authUtils)
│   ├── hooks/            # Custom React hooks
│   └── types/            # Definisi TypeScript global
├── public/               # Aset statis (gambar, ikon, font)
├── styles/               # File styling global (globals.css)
├── types/                # Definisi TypeScript kustom untuk proyek
├── middleware.ts         # Logic middleware Next.js (autentikasi, redirect)
├── next.config.js        # Konfigurasi Next.js
├── package.json          # Dependencies dan scripts
├── tsconfig.json         # Konfigurasi TypeScript
└── tailwind.config.ts    # Konfigurasi Tailwind CSS
```

-----

## Memulai Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan boilerplate ini di lingkungan lokal Anda.

### Prasyarat

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (versi LTS direkomendasikan) dan [npm](https://www.npmjs.com/) (atau [Yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/)) terinstal di sistem Anda.

### 1\. Kloning Repositori

```bash
git clone [URL_REPO_ANDA] nextjs-boilerplate
cd nextjs-boilerplate
```

### 2\. Instal Dependensi

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3\. Konfigurasi Environment Variables

Buat file `.env.local` di root proyek Anda dan tambahkan variabel lingkungan yang diperlukan:

```dotenv
# .env.local

# NextAuth.js Secret (HARUS KUAT & ACAK UNTUK PRODUKSI!)
# Generate dengan: openssl rand -base64 32
NEXTAUTH_SECRET="your_strong_and_random_secret_key_here"

# URL Aplikasi (sesuaikan untuk produksi)
NEXTAUTH_URL="http://localhost:3000"

# Kredensial untuk Credentials Provider (demo, ganti dengan data user sebenarnya di DB)
AUTH_USERNAME="user@example.com"
AUTH_PASSWORD="password123"

# URL Base API jika memanggil API eksternal
# NEXT_PUBLIC_API_CLIENT_BASE_URL="https://api.yourapp.com/v1"
# API_SERVER_BASE_URL="https://api.yourapp.com/v1"
```

**Penting**: `NEXTAUTH_SECRET` harus sangat kuat dan tidak boleh diekspos secara publik.

### 4\. Jalankan Aplikasi

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

-----

## Library Utama yang Digunakan

### 1\. NextAuth.js (Auth.js)

Digunakan untuk manajemen autentikasi dan sesi pengguna.

  * **Konfigurasi**: Lihat `app/api/auth/[...nextauth]/route.ts`
  * **Provider**: Menggunakan `CredentialsProvider` untuk login email/password. Dapat diperluas dengan *social providers* (Google, GitHub, dll.).
  * **Session Management**: Menggunakan strategi JWT.
  * **Integrasi di Root Layout**: `components/AuthProvider.tsx` digunakan untuk membungkus aplikasi agar sesi tersedia.
  * **Tipe TypeScript**: Definisi diperluas di `types/next-auth.d.ts` untuk properti user kustom.

### 2\. TanStack Query (React Query)

Untuk manajemen *state* data yang efisien dan performa tinggi.

  * **Instalasi**: `@tanstack/react-query` dan `@tanstack/react-query-devtools`.
  * **Konfigurasi**: `components/QueryProvider.tsx` untuk mengatur `QueryClientProvider` di seluruh aplikasi.
  * **Penggunaan**: Gunakan `useQuery`, `useMutation`, dll., di Client Components.

### 3\. Shadcn UI

Komponen UI yang dapat dikustomisasi dengan Tailwind CSS.

  * **Setup**: Dijalankan dengan `npx shadcn-ui@latest init`. Mengintegrasikan variabel CSS di `app/globals.css` dan konfigurasi di `tailwind.config.ts`.
  * **Menambah Komponen**: Gunakan `npx shadcn-ui@latest add [nama-komponen]` (misalnya, `npx shadcn-ui@latest add button`). Komponen akan ditambahkan ke `components/ui/`.
  * **Kustomisasi**: Langsung modifikasi kelas Tailwind di file komponen yang di-*copy*.

### 4\. Lucide React (Ikon)

Rekomendasi *library* ikon untuk Shadcn UI.

  * **Instalasi**: `npm install lucide-react`.
  * **Penggunaan**: Impor ikon spesifik (misalnya, `Mail`, `ChevronRight`) dan gunakan sebagai komponen React di mana Anda dapat menerapkan kelas Tailwind untuk *styling*.

### 5\. Middleware

Untuk otentikasi dan otorisasi *route* di sisi server.

  * **Lokasi**: `middleware.ts` di root proyek.
  * **Fungsi**: Melindungi *route* tertentu (`/dashboard`, `/profile`), mengalihkan pengguna yang belum *login* atau sudah *login* ke *route* yang relevan.
  * **Pengambilan Token**: Menggunakan `getToken` dari `next-auth/jwt` untuk memeriksa sesi user.
  * **Matcher**: Menggunakan `config.matcher` untuk menentukan *path* mana yang akan melewati middleware.

-----

## Panduan Pengembangan

### Autentikasi

  * **Halaman Login**: Lihat `app/signin/page.tsx` untuk contoh form signin yang menggunakan `signIn` dari `next-auth/react`.
  * **Akses Data Sesi**: Gunakan `useSession()` di Client Components untuk mendapatkan status dan data user yang sedang *login*.
  * **Proteksi Halaman**: Middleware akan otomatis melindungi halaman yang didefinisikan di `protectedRoutes`. Untuk halaman Client Component, gunakan `useEffect` bersama `useSession` untuk *redirect* jika user tidak terautentikasi (lihat `app/(dashboard)/page.tsx`).

<!-- ### Data Fetching

  * **Fetcher Client (`lib/fetchers/fetcherClient.ts`)**: Instance Axios dengan interceptor untuk menambahkan Bearer Token (diambil dari client-side, misal: localStorage atau NextAuth.js session). Digunakan untuk panggilan API dari Client Components.
  * **Fetcher Server (`lib/fetchers/fetcherServer.ts`)**: Fungsi yang mengembalikan instance Axios yang dikonfigurasi dengan Bearer Token (diambil dari request headers server). Digunakan untuk panggilan API dari Server Components, Route Handlers, atau Server Actions.
  * **Contoh React Query**: Lihat `app/dashboard/page.tsx` atau buat *custom hook* di `lib/hooks/` yang menggunakan `fetcherClient`. -->