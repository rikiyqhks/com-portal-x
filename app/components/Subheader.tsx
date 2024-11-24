'use client'

import { NextPage } from 'next'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Home from '@/public/home.svg'
import Book from '@/public/book.svg'

/**
 * 画面の上から二番目のサブヘッダーコンポーネント
 * @returns サブヘッダー
 */
const Subheader: NextPage = () => {

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
    case '/lock':
      return (
        <nav className='w-full h-8 md:h-16 flex flex-row justify-end items-center text-xs md:text-sm py-14 md:py-16 px-8 md:px-10'>
          <Link
            className='flex flex-row justify-center items-center gap-3 text-gray-500 hover:bg-gray-100 border rounded-lg border-gray-400 p-2 md:p-3 duration-200'
            href='https://viscomp-prodv3-contents.s3.ap-northeast-1.amazonaws.com/contents/attention/compobook/book/index.html'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Image
              src={Book}
              width={30}
              alt='COM Portal X のマニュアル'
            />
            COM Portal X クロス マニュアル
          </Link>
        </nav>
      )
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
            {pathname === '/profile' ? (
              'プロフィール'
            ) : pathname === '/notification' ? (
              'お知らせ一覧'
            ) : pathname === '/attendance_rate_detail' ? (
              '出席状況詳細一覧'
            ) : pathname === '/attendance_sheet' ? (
              '成績・出欠確認表'
            ) : pathname === '/course_registration' ? (
              '履修登録'
            ) : pathname === '/survey' ? (
              'アンケート'
            ) : pathname === '/application_wifi' ? (
              '校内WiFiの利用規約と申請状況'
            ) : pathname === '/user_barcode' ? (
              'ユーザーIDバーコード'
            ) : (
              ''
            )}
          </span>
        </nav>
      )
  }
}

export default Subheader