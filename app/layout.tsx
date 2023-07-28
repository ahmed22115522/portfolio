"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from 'next-themes'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmed.dev',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme='dark' enableSystem={false} attribute='class'>{children}</ThemeProvider>
        </body>
    </html>
  )
}
