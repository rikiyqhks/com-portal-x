'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Home from '@/public/home.svg'

/**
 * 画面の上から二番目のサブヘッダーコンポーネント
 * @returns サブヘッダー
 */
const Subheader = () => {

  // 現在開いているページURLパスを取得
  const pathname = usePathname()

  /**
   * 現在開いているページURLパスによって
   * サブヘッダーの表記を変更する
   */
  switch(pathname) {
    // ホーム画面ではサブヘッダーを表示しない
    case '/':
      return null
    default:
      // メインコンテンツ
      return (
        <nav className='w-full h-8 bg-slate-200 flex flex-row justify-start items-center gap-3 text-xs py-2 px-5'>
          <Link
            className='flex justify-center items-center gap-2 hover:underline hover:decoration-amber-500'
            href='/'
          >
            <Image
              src={Home}
              width={20}
              alt='ホーム'
            />
            <p className='text-amber-500'>ホーム</p>
          </Link>
          <span className='text-slate-900'>&gt;</span>
          <span className='text-slate-900'>
            {/* ページURLパスの分岐処理 */}
            {pathname === '/notifications' ? (
              'お知らせ一覧'
            ) : pathname === '/attendance_rate_detail' ? (
              '出席状況詳細一覧'
            ) : pathname === '/course_registration' ? (
              '履修登録'
            ) : pathname === '/user_barcode' ? (
              'ユーザーIDバーコード'
            ) : pathname === '/attendance_sheet' ? (
              '成績・出欠確認表'
            ) : (
              ''
            )}
          </span>
        </nav>
      )
  }
}

export default Subheader