'use client'

import { NextPage } from 'next'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
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
  // 申請名のInputValue
  const [name, setName] = useState<string>('')
  // 各種申請を状態管理する配列
  const [applications, setApplications] = useState<Application[]>([])
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
  
  // ラジオボタン切り替えイベント
  const changeValue = (event: ChangeEvent<HTMLInputElement>) => setSelected(parseInt(event.target.value))
  // 申請名切り替えイベント
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)

  /**
   * 検索イベント
   * @param event イベントハンドラー
   */
  const search = (event: FormEvent<HTMLFormElement>) => {

    // ページを更新しない
    event.preventDefault()

    // 申請一覧の仮配列
    let applicationTemp: any[] = []

    // 初期データを展開させる
    resetData().map((application: Application) => {
      // 選択した承認状態を格納する変数の初期化
      let label: string = ''

      // 選択した承認状態を変数に入れる
      radioButtons.map((radioButton: Radio) => {
        if(radioButton.value == selected) {
          label = radioButton.label
        }
      })

      // 申請名を入力していた場合
      if(name) {
        // 申請一覧に存在している且つ、承認状態が同一のデータを配列に入れる
        if(application.name.indexOf(name) >= 0 && application.aprovalStatus == label) {
          applicationTemp.push(application)
        }

        // 申請一覧に存在している全てのデータを仮配列に入れる
        if(application.name.indexOf(name) >= 0 && label === '全て') {
          applicationTemp.push(application)
        }
      } else if(application.aprovalStatus == label) {
        // 申請名が存在しない場合は、選択された承認状態だけで検索を絞ってデータを仮配列に入れる
        applicationTemp.push(application)
      }

      // 申請名が存在していない且つ、承認状態が全てを選択している場合は初期データを仮配列に入れる
      if(!name && label === '全て') {
        applicationTemp = resetData()
      }
    })

    // 状態管理変数に入れる
    setApplications(applicationTemp)
  }

  /**
   * データを初期化する
   * @returns 初期データ
   */
  const resetData = () => {
    // 申請一覧の仮配列
    const applicationTemp: any[] = []

    // データを展開して仮配列に入れる
    dummynApplication.map((application: Application) => {
      applicationTemp.push(application)
    })

    // 仮配列を返す
    return applicationTemp
  }

  /**
   * データベースから取得した各種申請を
   * 状態管理変数に代入する
   */
  useEffect(() => {
    setApplications(resetData())
  }, [])

  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='w-full md:max-w-[800px] md:w-[800px] md:border md:border-slate-300 md:rounded-md'>
        <div className='bg-slate-200 md:bg-white border-y-2 md:border-b md:border-t-0 border-slate-300 py-3 md:py-5 px-3'>
          <h3 className='my-0 text-sm md:text-base'>
            <Image className='inline-block mr-2 pb-1' src={Search} width={20} alt='検索' />
            検索
          </h3>
        </div>
        <form className='py-5 px-3 md:p-0' onSubmit={search}>
          <table className='w-full border md:border-b md:border-t-0 md:border-x-0 border-slate-300'>
            <tbody>
              <tr>
                <th className='w-1/4 bg-slate-300 text-end text-xs md:text-sm py-3 px-1'>申請名</th>
                <td className='px-5'>
                  <input className='w-full text-xs md:text-sm border border-slate-300 rounded-md p-1' type='text' onChange={handleChangeInput} />
                </td>
              </tr>
              <tr>
                <th className='w-1/4 bg-slate-300 text-end text-xs md:text-sm py-3 px-1'>承認状態</th>
                <td className='px-5'>
                  {radioButtons.map((radio) => (
                    <label className='text-xs md:text-sm ps-5 cursor-pointer' key={radio.value}>
                      <input type='radio' value={radio.value} name='search_radio_application_aproval_status' checked={radio.value === selected} onChange={changeValue} />
                      &nbsp;{radio.label}
                    </label>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-center items-cenetr gap-10 py-2'>
            <button className='w-28 bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md text-sm md:text-base text-white py-1 rounded-md' type='submit'>検索</button>
            <button className='w-28 bg-slate-100 hover:bg-slate-200 duration-200 shadow hover:shadow-md text-sm md:text-base py-1 rounded-md border border-slate-300' type='reset'>リセット</button>
          </div>
        </form>
      </section>
      <section className='w-full md:max-w-[1000px] md:w-[1000px] md:border md:border-slate-300 md:rounded-md'>
        <div className='bg-slate-200 md:bg-white border-y-2 md:border-b md:border-t-0 border-slate-300 py-3 md:py-5 px-3'>
          <h3 className='my-0 text-sm md:text-base'>
            <Image className='inline-block mr-2 pb-1' src={Hamburger} width={20} alt='検索結果' />
            検索結果
          </h3>
        </div>
        <div className='flex flex-col gap-3 md:block py-5 px-10'>
          <div className='flex justify-between items-cenetr text-sm md:text-base'>
            <p>件数 : {applications.length} 件</p>
            <button className='w-28 bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md text-white py-1 rounded-md'>+ 新規申請</button>
          </div>
          <div className='flex items-cenetr gap-1'>
            <span className='w-3 h-3 bg-emerald-500 rounded-full' />
            <p className='text-xs md:text-sm'>未読</p>
          </div>
          <table className='w-full text-xs md:text-sm border border-slate-400 hidden md:table'>
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
          {/* ↓↓↓ スマホ画面 ↓↓↓ */}
          <div className='w-full flex flex-col gap-3 md:hidden text-xs md:text-sm'>
            {applications.map((application) => (
              <table className='border-t-2 border-slate-400 text-center' key={application.id}>
                <tbody>
                  <tr className='bg-amber-100'>
                    <th className='py-3 px-1'>申請番号</th>
                    <td className='py-1 text-center'>{application.id}&nbsp;</td>
                  </tr>
                  <tr className='bg-slate-100'>
                    <th className='w-1/2 py-3 px-1'>申請名</th>
                    <td className='py-1 px-5 text-amber-600'><Link href={'/'}>{application.name}</Link></td>
                  </tr>
                  <tr className='bg-slate-100'>
                    <th className='py-3 px-1'>承認状態</th>
                    <td className={`py-1 text-center ${application.aprovalStatus === '承認済' && 'font-bold text-amber-800'}`}>{application.aprovalStatus}</td>
                  </tr>
                  <tr className='bg-slate-100'>
                    <th className='py-3 px-1'>承認日</th>
                    <td className='py-1 text-center'>{application.date}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Applications