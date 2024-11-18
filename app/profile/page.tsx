

const profile = () => {
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-2xl font-thin'>わたしのプロフィール</h1>
        <section className='flex flex-col justify-center items-center md:justify-start md:items-start'>
          <small>COM Portal Xに登録されているプロフィール情報です。</small>
          {/* 学校名 */}
          <div className='flex flex-col justify-center gap-2 my-5'>
            <label
              className='mb-2 inline-block text-sm text-gray-800 sm:text-base'
              htmlFor='school'
            >
              学校名
            </label>
            <input
              className='w-[300px] md:w-[600px] border-b px-3 py-2 text-gray-800 outline-none'
              type='text'
              value='ＯＣＡ大阪デザイン＆テクノロジー専門学校'
              name='school'
              disabled
            />
          </div>
          {/* 名前 */}
          <div className='flex flex-col justify-center gap-2 my-5'>
            <label
              className='mb-2 inline-block text-sm text-gray-800 sm:text-base'
              htmlFor='name'
            >
              名前
            </label>
            <input
              className='w-[300px] md:w-[600px] border-b px-3 py-2 text-gray-800 outline-none'
              type='text'
              value='前田 力哉'
              name='name'
              disabled
            />
          </div>
          {/* 学年 */}
          <div className='flex flex-col justify-center gap-2 my-5'>
            <label
              className='mb-2 inline-block text-sm text-gray-800 sm:text-base'
              htmlFor='grade'
            >
              学年
            </label>
            <input
              className='w-[300px] md:w-[600px] border-b px-3 py-2 text-gray-800 outline-none'
              type='text'
              value='4年'
              name='grade'
              disabled
            />
          </div>
          {/* 学科 */}
          <div className='flex flex-col justify-center gap-2 my-5'>
            <label
              className='mb-2 inline-block text-sm text-gray-800 sm:text-base'
              htmlFor='department'
            >
              学科
            </label>
            <input
              className='w-[300px] md:w-[600px] border-b px-3 py-2 text-gray-800 outline-none'
              type='text'
              value='スーパーゲームＩＴ科'
              name='department'
              disabled
            />
          </div>
          {/* 専攻 */}
          <div className='flex flex-col justify-center gap-2 my-5'>
            <label
              className='mb-2 inline-block text-sm text-gray-800 sm:text-base'
              htmlFor='major'
            >
              専攻
            </label>
            <input
              className='w-[300px] md:w-[600px] border-b px-3 py-2 text-gray-800 outline-none'
              type='text'
              value='ホワイトハッカー専攻'
              name='major'
              disabled
            />
          </div>
          {/* メールアドレス */}
          <div className='flex flex-col justify-center gap-2 my-5'>
            <label
              className='mb-2 inline-block text-sm text-gray-800 sm:text-base'
              htmlFor='email'
            >
              メールアドレス
            </label>
            <input
              className='w-[300px] md:w-[600px] border-b px-3 py-2 text-gray-800 outline-none'
              type='text'
              value='2104240029mr@edu.oca.ac.jp'
              name='email'
              disabled
            />
          </div>
        </section>
      </section>
    </main>
  )
}

export default profile