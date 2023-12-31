import './globals.css'
import React from 'react';
import type { Metadata } from 'next'

import Nav from "@/components/common/Nav";

import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Nav />
          </div>

          <div className="flex justify-center items-center w-full pl-40">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
