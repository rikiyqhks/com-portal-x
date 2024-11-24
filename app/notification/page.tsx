'use client'

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getNotifications, NotificationType } from '@/app/utils/getNotifications'

/**
 * お知らせ一覧を表示するページ
 * @returns お知らせ一覧
 */
const Notification: NextPage = () => {

  // アンケートを状態管理する配列
  const [notifications, setNotifications] = useState<NotificationType[]>([])

  /**
   * データベースから取得したお知らせを
   * 状態管理変数に代入する
   */
  useEffect(() => {
    setNotifications(getNotifications)
  }, [])

  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-xl md:text-2xl font-thin'>お知らせ一覧</h1>
        {/* お知らせ */}
        <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 px-4 py-2'>
          <ul className='flex flex-col justify-start gap-5'>
            {notifications.length !== 0 ? notifications.map((notification: NotificationType) => (
              <li
                className='w-auto h-auto flex flex-col justify-center gap-5 border border-slate-200 rounded-md shadow-md p-5'
                key={notification.id}
              >
                <h1 className='text-base md:text-lg font-bold'>{notification.createdAt}</h1>
                <h1 className='text-base md:text-lg text-red-400 font-bold underline'>{notification.title}</h1>
                <p className='whitespace-pre-wrap text-sm md:text-base'>{notification.breakdown}</p>
                <p className='text-sm md:text-base font-bold'>講師：{notification.owner}</p>
              </li>
            )) : (
              <li>お知らせはありません。</li>
            )}
          </ul>
        </section>
      </section>
    </main>
  )
}

export default Notification