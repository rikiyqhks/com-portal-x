// ダミーデータの読み込み
import dummyNotification from '@/app/data/dummyNotification.json'

// お知らせの型指定
export type NotificationType = {
  id: number
  title: string
  breakdown: string
  createdAt: string
  owner: string
}

/**
 * データベースからお知らせ一覧を取得するメソッド
 * @returns お知らせ一覧
 */
export const getNotifications = () => {

  // アンケートを状態管理する配列
  const notifications: any[] = []

  dummyNotification.map((notification: NotificationType) => {
    notifications.push(notification)
  })

  return notifications
}