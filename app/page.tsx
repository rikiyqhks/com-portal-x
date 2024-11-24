'use client'

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getNotifications, NotificationType } from './utils/getNotifications'
import Manual from '@/public/manual.svg'
import Attention from '@/public/attention.svg'
import HP from '@/public/hp.svg'
import Literacy from '@/public/literacy.svg'
import Joboffer from '@/public/joboffer.svg'
import Check from '@/public/check.svg'
import Application from '@/public/application.svg'
import Registration from '@/public/registration.svg'
import Survey from '@/public/survey.svg'
import Wifi from '@/public/wifi.svg'
import Barcode from '@/public/barcode.svg'

/**
 * サイトを開いた際に最初に表示されるホーム画面
 * @returns ホーム画面
 */
const Home: NextPage = () => {

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
      {/* COM Portal X のマニュアル */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-row justify-start items-center gap-4 border border-amber-600 rounded-md shadow px-4 py-2'>
        <Image
          src={Manual}
          width={30}
          alt='COM Portal X のマニュアル'
        />
        <Link
          className='underline'
          href='https://viscomp-prodv3-contents.s3.ap-northeast-1.amazonaws.com/contents/attention/compobook/book/index.html'
          rel='noopener noreferrer'
          target='_blank'
        >
          COM Portal X クロス のマニュアルはこちら
        </Link>
      </section>
      {/* 注意お知らせ */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-row justify-start items-center gap-4 border border-red-600 rounded-md shadow px-4 py-2'>
        <Image
          src={Attention}
          width={30}
          alt='注意お知らせ'
        />
        <Link
          className='underline'
          href='https://www.comportal.jp/info/mobile-browser/index2.html'
          rel='noopener noreferrer'
          target='_blank'
        >
          メニューの「メール」ボタンをタップしてもメール画面が開かない方へ
        </Link>
      </section>
      {/* COM Portal メニュー */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-md font-thin'>COM Portal X クロス メニュー</h1>
        <div className='flex flex-row flex-wrap justify-center items-center gap-5'>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='https://www.oca.ac.jp/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Image
              src={HP}
              width={40}
              alt='学校HP'
            />
            <p className='text-xs'>学校HP</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='https://itl.jikeigroup.net/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Image
              src={Literacy}
              width={40}
              alt='IT/DX リテラシー'
            />
            <p className='text-xs'>IT/DX ﾘﾃﾗｼｰ</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/'
          >
            <Image
              src={Joboffer}
              width={40}
              alt='求人票一覧'
            />
            <p className='text-xs'>求人票一覧</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/attendance_sheet'
          >
            <Image
              src={Check}
              width={40}
              alt='出欠確認表'
            />
            <p className='text-xs'>出欠確認表</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/'
          >
            <Image
              src={Application}
              width={40}
              alt='各種申請'
            />
            <p className='text-xs'>各種申請</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/course_registration'
          >
            <Image
              src={Registration}
              width={40}
              alt='履修登録'
            />
            <p className='text-xs'>履修登録</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/survey'
          >
            <Image
              src={Survey}
              width={40}
              alt='アンケート'
            />
            <p className='text-xs'>アンケート</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/application_wifi'
          >
            <Image
              src={Wifi}
              width={40}
              alt='校内Wi-Fi'
            />
            <p className='text-xs'>校内Wi-Fi</p>
          </Link>
          <Link
            className='w-24 h-24 flex flex-col justify-center items-center gap-3 hover:bg-slate-100 duration-200 border border-slate-200 rounded shadow p-1'
            href='/user_barcode'
          >
            <Image
              src={Barcode}
              width={40}
              alt='ユーザーIDバーコード'
            />
            <p className='text-xs'>ﾕｰｻﾞｰIDﾊﾞｰｺｰﾄﾞ</p>
          </Link>
        </div>
      </section>
      {/* お知らせ */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-xl font-thin'>お知らせ</h1>
        <div className='w-auto h-40 flex flex-col justify-between border border-slate-200 rounded-md shadow-md p-5'>
          <div className='flex flex-col justify-start'>
            {notifications.length !== 0 ? (
              <div
                className='flex flex-col justify-center gap-2'
              >
                <h1 className='text-sm md:text-lg font-bold'>{notifications[0].createdAt}</h1>
                <h1 className='text-sm md:text-lg text-red-400 font-bold'>{notifications[0].title}</h1>
              </div>
            ) : (
              <p>お知らせはありません。</p>
            )}
          </div>
          <Link
            className='flex flex-row justify-end items-center text-sm font-bold hover:underline'
            href='/notification'
          >
            お知らせ一覧へ
          </Link>
        </div>
      </section>
      {/* 出席率 */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-xl font-thin'>出席率</h1>
        <div className='w-auto h-68 flex flex-col justify-between border border-slate-200 rounded-md shadow-md p-5'>
          <section className='flex flex-row justify-between items-center px-8 md:px-28 py-3'>
            <p className='text-md font-semibold md:text-lg md:font-bold'>2025年度</p>
            <p className='text-xl font-semibold md:text-3xl md:font-bold'>78.2%</p>
          </section>
          <section className='flex flex-row justify-between items-center px-8 md:px-28 py-3'>
            <p className='text-md font-semibold md:text-lg md:font-bold'>前期</p>
            <p className='text-xl font-semibold md:text-3xl md:font-bold'>78.6%</p>
          </section>
          <section className='flex flex-row justify-between items-center px-8 md:px-28 py-3'>
            <p className='text-md font-semibold md:text-lg md:font-bold'>後期</p>
            <p className='text-xl font-semibold md:text-3xl md:font-bold'>70.0%</p>
          </section>
          <hr className='my-5' />
          <Link
            className='flex flex-row justify-end items-center text-xs font-semibold md:text-sm md:font-bold hover:underline'
            href='/attendance_rate_detail'
          >
            出席状況詳細一覧へ
          </Link>
        </div>
      </section>
      {/* ITリテラシー理解度テスト受験状況 */}
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-md font-thin underline'>ITリテラシー理解度テスト受験状況</h1>
        <div className='w-auto flex flex-row justify-between border border-amber-300 rounded-md shadow-md px-10 py-8 md:px-32 md:py-12'>
          <p className='text-md font-semibold md:text-lg md:font-bold'>結果</p>
          <p className='text-xl font-semibold md:text-2xl md:font-bold'>未受験</p>
        </div>
      </section>
    </main>
  )
}

export default Home