import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
/**
 * 未ログインの際のロック画面
 * @returns ロック画面
 */
const Lock: NextPage = () => {

  // メインコンテンツ
  return (
    <main className='w-full h-[700px] flex flex-col justify-center items-center gap-5'>  
      {/* COM Portal X のマニュアル */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col justify-center items-center gap-10 px-4 py-2'>
        <Image
          src={Logo}
          width={100}
          alt='ロゴ'
        />
        <h1 className='text-4xl font-bold'>COM Portal X</h1>
        <button
          className='text-xs md:text-sm text-white font-bold px-3 md:px-10 py-3 md:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md'
        >
          サインイン画面へ
        </button>
        <Link
          className='flex flex-row justify-center items-center text-xs text-gray-500 hover:bg-gray-100 border rounded-lg border-gray-400 p-3 duration-200'
          href=''
        >
          サインインID・パスワードがわからない方へ
        </Link>
      </section>
    </main>
  )
}

export default Lock