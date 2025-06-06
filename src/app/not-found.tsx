// src/app/not-found.tsx
'use client';

import { StarBackground } from '@/components/StarBackground';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=" bg-black overflow-x-hidden">
    <StarBackground />

    <div className="flex flex-col items-center justify-center min-h-screen my-auto text-center p-6">
    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h1 className="text-6xl font-bold text-primary-foreground my-10">🤣 Win Da5el ya 7alouf ​🤣​</h1>
      
      {/* <p className="text-xl mb-6 text-primary-foreground">Oops! La page que vous recherchez n&lsquo;existe pas.</p> */}
      <Link href="/" className="text-primary hover:underline text-2xl">
        Retour à l&lsquo;accueil
      </Link>
    </div>

    </div>
  );
}
