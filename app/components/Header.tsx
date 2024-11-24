'use client'

import { NextPage } from 'next'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '@/public/profile.svg'

/**
 * 画面最上部のヘッダーコンポーネント
 * @returns ヘッダー
 */
const Header: NextPage = () => {

  // 現在開いているページURLパスを取得
  const pathname = usePathname()

  // プロフィールボタンをクリックした際のメニューの状態管理をする変数
  const [open, setOpen] = useState<boolean>(false)

  // サインアウト
  const signout = () => {
    return
  }

  /**
   * 現在開いているページURLパスによって
   * サブヘッダーの表記を変更する
   */
  switch(pathname) {
    // ロック画面では背景だけをヘッダーとする
    case '/lock':
      // メインコンテンツ
      return (
        <header className='w-full h-16 bg-amber-500 flex flex-row justify-between items-center py-2 px-5' />
      )
    default:
      // メインコンテンツ
      return (
        <header className='w-full h-16 bg-amber-500 flex flex-row justify-between items-center py-2 px-5' onClick={() => open && setOpen(false)}>
          <Link
            className='text-xl md:text-2xl font-bold text-white'
            href='/'
          >
            COM Portal <span className='text-3xl'>X</span> <span className='text-xs'>クロス</span>
          </Link>
          <button onClick={() => setOpen(!open)}>
            <Image
              className='border border-white rounded-full p-1 hover:bg-amber-600 duration-200'
              src={Profile}
              width={40}
              alt='Profile'
            />
          </button>
          <ul className={`w-40 h-36 flex flex-col absolute top-12 right-8 justify-between items-start bg-white
            border border-slate-200 rounded shadow-lg text-slate-900 p-5 duration-200 ${open ? 'visible opacity-100 delay-75' : 'invisible opacity-0'}`}>
            <Link href='/profile'>プロフィール</Link>
            <Link
              href='https://mysignins.microsoft.com/security-info/password/change'
              rel='noopener noreferrer'
              target='_blank'
            >
              パスワード変更
            </Link>
            <button onClick={() => signout()}>サインアウト</button>
          </ul>
        </header>
      )
  }
}

export default Header