'use client'

import { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'

import Search from '@/public/search.svg'
import Hamburger from '@/public/hamburger.svg'

// ダミーデータの読み込み
import dummynApplication from '@/app/data/dummyApplication.json'
import Link from 'next/link'

// アンケートの型指定
type Application = {
  id: number
  name: string
  aprovalStatus: string
  date: string
}

// ラジオボタン設定
interface Radio {
  label: string
  value: number
}

const Applications: NextPage = () => {

  // 選択中のラジオボタンvalue
  const [selected, setSelected] = useState<number>(1)
  // ラジオボタン切り替えイベント
  const changeValue = (event: ChangeEvent<HTMLInputElement>) => setSelected(parseInt(event.target.value))
  // ラジオボタン
  const radioButtons: Radio[] = [
    {
        label: '全て',
        value: 1
    },
    {
        label: '未承認',
        value: 2
    },
    {
        label: '承認済み',
        value: 3
    },
    {
        label: '却下',
        value: 4
    },
    {
        label: 'キャンセル',
        value: 5
    }
  ]

    // 各種申請を状態管理する配列
    const [applications, setApplications] = useState<Application[]>([])
  
    /**
     * データベースから取得した各種申請を
     * 状態管理変数に代入する
     */
    useEffect(() => {
      const applicationTemp: any[] = []
  
      dummynApplication.map((application: Application) => {
        applicationTemp.push(application)
      })
  
      setApplications(applicationTemp)
    }, [])

  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='w-[700px] border border-slate-300 rounded-md'>
        <div className='border-b border-slate-300 py-5 px-3'>
          <h3 className='my-0'>
            <Image className='inline-block mr-2 pb-1' src={Search} width={20} alt='検索' />
            検索
          </h3>
        </div>
        <form>
          <table className='w-full border-b border-slate-300'>
            <tbody>
              <tr>
                <th className='w-1/4 bg-slate-300 text-end text-sm py-3 px-1'>申請名</th>
                <td className='px-5'>
                  <input className='w-full text-sm border border-slate-300 rounded-md p-1' type='text' />
                </td>
              </tr>
              <tr>
                <th className='w-1/4 bg-slate-300 text-end text-sm py-3 px-1'>承認状態</th>
                <td className='px-5'>
                  {radioButtons.map((radio) => (
                    <label className='text-sm ps-5 cursor-pointer' key={radio.value}>
                      <input type='radio' value={radio.value} name='search_radio_application_aproval_status' checked={radio.value === selected} onChange={changeValue} />
                      &nbsp;{radio.label}
                    </label>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-center items-cenetr gap-10 py-2'>
            <button className='w-28 bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md text-white py-1 rounded-md'>検索</button>
            <button className='w-28 bg-slate-100 hover:bg-slate-200 duration-200 shadow hover:shadow-md py-1 rounded-md border border-slate-300'>リセット</button>
          </div>
        </form>
      </section>
      <section className='w-[1000px] border border-slate-300 rounded-md'>
        <div className='border-b border-slate-300 py-5 px-3'>
          <h3 className='my-0'>
            <Image className='inline-block mr-2 pb-1' src={Hamburger} width={20} alt='検索結果' />
            検索結果
          </h3>
        </div>
        <div className='py-5 px-10'>
          <div className='flex justify-between items-cenetr'>
            <p>件数 : {applications.length} 件</p>
            <button className='w-28 bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md text-white py-1 rounded-md'>+ 新規申請</button>
          </div>
          <div className='flex items-cenetr gap-1'>
            <span className='w-3 h-3 bg-emerald-500 rounded-full' />
            <p className='text-sm'>未読</p>
          </div>
          <table className='w-full text-sm border border-slate-400'>
            <thead>
              <tr>
                <th className='bg-slate-300 py-3 px-1 border border-slate-400'>申請番号</th>
                <th className='w-1/2 bg-slate-300 py-3 px-1 border border-slate-400'>申請名</th>
                <th className='bg-slate-300 py-3 px-1 border border-slate-400'>承認状態</th>
                <th className='bg-slate-300 py-3 px-1 border border-slate-400'>承認日</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr className='bg-slate-100 border border-slate-400' key={application.id}>
                  <td className='py-1 text-center border border-slate-400'>{application.id}&nbsp;</td>
                  <td className='py-1 px-5 text-amber-600 border border-slate-400'><Link href={'/'}>{application.name}</Link></td>
                  <td className={`py-1 text-center border border-slate-400 ${application.aprovalStatus === '承認済' && 'font-bold text-amber-800'}`}>{application.aprovalStatus}</td>
                  <td className='py-1 text-center border border-slate-400'>{application.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Applications