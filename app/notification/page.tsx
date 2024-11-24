'use client'

import { NextPage } from 'next'
import { useEffect, useState } from 'react'

// ダミーデータの読み込み
import dummyNotification from '@/app/data/dummyNotification.json'

// お知らせの型指定
type Notification = {
  id: number
  title: string
  breakdown: string
  createdAt: string
  owner: string
}

/**
 * お知らせ一覧を表示するページ
 * @returns お知らせ一覧
 */
const Notification: NextPage = () => {

  // アンケートを状態管理する配列
  const [notifications, setNotifications] = useState<Notification[]>([])

  /**
   * データベースから取得したお知らせを
   * 状態管理変数に代入する
   */
  useEffect(() => {
    const notificationTemp: any[] = []

    dummyNotification.map((notification: Notification) => {
      notificationTemp.push(notification)
    })

    setNotifications(notificationTemp)
  }, [])

  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-xl md:text-2xl font-thin'>お知らせ一覧</h1>
        <p>お知らせはまだありません。</p>
      </section>
    </main>
  )
}

export default Notification