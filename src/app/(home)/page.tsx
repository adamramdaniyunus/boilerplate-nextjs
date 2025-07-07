"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16 bg-gray-50 text-gray-800">
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Header */}
      <div className="w-full max-w-screen-lg text-center mb-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Edit{" "}
              <code className="bg-muted px-2 py-1 rounded">
                src/app/(home)/page.tsx
              </code>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Start customizing your project now.
            </p>
            <Link href="/signin">
              <Button variant="link">Go to Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Boilerplate Info */}
      <div className="w-full max-w-screen-lg">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Welcome to My Next.js Boilerplate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-lg text-muted-foreground">
              This boilerplate is designed to help you kickstart your Next.js
              projects with ease.
            </p>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Next.js 15 with App Router</li>
                <li>TypeScript support</li>
                <li>Tailwind CSS for styling</li>
                <li>Pre-configured with ESLint and Prettier</li>
                <li>Authentication with NextAuth.js</li>
                <li>Shadcn UI components</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-screen-lg mt-16 text-center text-sm text-gray-400 border-t border-gray-200 pt-6">
        &copy; {new Date().getFullYear()} My Next.js Boilerplate. All rights
        reserved.
      </footer>
    </main>
  );
}
