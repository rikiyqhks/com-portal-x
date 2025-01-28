'use client'

import { NextPage } from 'next'
import Image from 'next/image'
import Barcode from '@/public/test_barcode.svg'
import QRcode from '@/public/test_qrcode.png'

/**
 * ユーザーIDバーコードを表示するページ
 * @returns ユーザーIDバーコード
 */
const User_Barcode: NextPage = () => {
  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col justify-start items-center shadow'>
        <section className='w-full h-auto flex flex-col justify-center items-center bg-amber-500 text-white border border-amber-500 rounded-t-md px-4 py-2'>
          <h2>バーコード</h2>
          <p>ユーザーID：0000000000</p>
        </section>
        <section className='w-full h-auto flex flex-col justify-center items-center text-white border border-amber-500 rounded-b-md px-4 py-2'>
          <Image
            className='pt-10'
            src={Barcode}
            alt='バーコード'
          />
          <hr className='w-full border-slate-900 my-10' />
          <Image
            className='pb-10'
            src={QRcode}
            alt='QRコード'
          />
        </section>
      </section>
    </main>
  )
}

export default User_Barcode