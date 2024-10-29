import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/app/globals.css'
import Header from '@/app/components/Header'
import Subheader from '@/app/components/Subheader'

// フォントSans
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
// フォントMono
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

// メタデータ
export const metadata: Metadata = {
  title: 'COM Portal X (クロス)',
  description: 'COM Portalサイトがリニューアル!',
}

/**
 * Next.jsのルートレイアウト設計
 * @param param0 Reactノードとパラム引数
 * @returns メインコンテンツ
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ヘッダー */}
        <Header />
        {/* サブヘッダー */}
        <Subheader />
        {/* メインコンテンツ */}
        {children}
      </body>
    </html>
  )
}
