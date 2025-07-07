'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className='animate-spin text-blue-500' />
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 min-w-full">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-center text-3xl font-bold">Dashboard</h1>
          <p className="mb-2 text-center text-lg">
            Selamat datang, <strong>{session.user?.name || session.user?.email}</strong>!
          </p>
          <p className="mb-6 text-center text-gray-600">
            Anda telah berhasil login. Ini adalah halaman yang dilindungi.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">
              Go to Home
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })} // Redirect ke homepage setelah logout
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null; // Tidak menampilkan apa-apa jika belum terautentikasi dan belum direfresh
}