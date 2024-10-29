'use client'

/**
 * お知らせ一覧を表示するページ
 * @returns お知らせ一覧
 */
const Notifications = () => {
  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-2xl font-thin'>お知らせ一覧</h1>
        <p>お知らせはまだありません。</p>
      </section>
    </main>
  )
}

export default Notifications