'use client'

import { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'

/**
 * 履修登録ができるページ
 * @returns 履修登録
 */
const Course_Registration: NextPage = () => {

  // 履修科目を選択しているか状態管理する配列
  const [selected, setSelected] = useState<boolean[]>([false, false, false, false])

  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='flex flex-col justify-center items-center gap-4 px-4 py-2'>
        <caption className='text-xl md:text-2xl font-thin'>履修登録</caption>
        <section className='flex flex-col justify-center items-center md:justify-start md:items-start'>
          {/* テーブルコンテンツ 1つめ */}
          <table className='w-[1000px] h-[120px] table-fixed text-[9px] md:text-xs text-center'>
            <thead>
              <tr className='bg-amber-400'>
                <th className='w-20 px-5 py-1 md:w-40 md:px-7 md:py-3'>氏名</th>
                <th className='w-20 px-5 py-1 md:w-28 md:px-7 md:py-3'>学籍番号</th>
                <th className='w-32 px-5 py-1 md:w-24 md:px-7 md:py-3'>所属</th>
                <th className='w-16 px-5 py-1 md:w-24 md:px-7 md:py-3'>学年</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-slate-300'>
                <td className='px-3 py-1 md:px-7 md:py-3'>前田 力哉</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>2104240029</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>スーパーゲームＩＴ科 ホワイトハッカー専攻</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>4年</td>
              </tr>
            </tbody>
          </table>
          {/* テーブルコンテンツ 2つめ */}
          <table className='w-[1000px] h-[120px] table-fixed text-[9px] md:text-xs text-center'>
            <thead>
              <tr className='bg-amber-400'>
                <th className='w-44 px-3 py-1 md:w-40 md:px-7 md:py-3'>年度・学期</th>
                <th className='w-44 px-3 py-1 md:w-28 md:px-7 md:py-3'>仮登録期限</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-slate-300'>
                <td className='px-3 py-1 md:px-7 md:py-3'>2025年 前期</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>2025年4月1日(火) 0時00分</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='flex flex-col overflow-x-scroll md:overflow-x-visible justify-start md:justify-center items-start md:items-center'>
          {/* テーブルコンテンツ 履修登録 */}
          <table className='w-[1400px] h-[800px] table-fixed text-[9px] md:text-xs text-center border-2'>
            <caption className='text-start py-1 md:hidden'>※横スクロールして全体を確認して下さい。</caption>
            <thead>
              {/* 1列目 */}
              <tr className='bg-slate-300 border-2'>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'></th>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'>月曜日</th>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'>火曜日</th>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'>水曜日</th>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'>木曜日</th>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'>金曜日</th>
                <th className='w-24 px-3 py-1 md:w-44 border-2 md:px-7 md:py-3'>土曜日</th>
              </tr>
            </thead>
            <tbody>
              {/* 2列目 */}
              <tr className='border-2'>
                <td className='bg-slate-300 border-2 px-7 py-3'>1限目<br />9：10 ~ 10：40</td>
                <td className='bg-sky-200 px-7 border-2 py-3'>
                  CEH（選択）<br />前田先生<br /><br />303A<br />
                  <span className='inline-block my-5'>
                    <label htmlFor='ceh-1-checkbox' className='w-full flex md:block flex-col py-3 text-[9px] md:text-xs text-slate-900 cursor-pointer'>
                      <input
                        id='ceh-1-checkbox'
                        type='checkbox'
                        checked={selected[1]}
                        className='scale-75 align-middle text-blue-600 bg-slate-300 border-2-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer'
                        // 選択したら状態管理変数に真偽値を代入
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const newSelected = [...selected]
                          newSelected[1] = e.target.checked
                          setSelected(newSelected)
                        }}
                      />
                      <span className='ps-1 md:ps-3'>講義を選択</span>
                    </label>
                  </span>
                </td>
                <td className='bg-amber-200 px-7 border-2 py-3'>Linux<br />8×9<br /><br />303C</td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='bg-sky-200 px-7 border-2 py-3'>
                  Webアプリ開発（選択）<br />鳥飼先生<br /><br />AIルーム<br />
                  <span className='inline-block my-5'>
                    <label htmlFor='web-app-checkbox' className='w-full flex md:block flex-col py-3 text-[9px] md:text-xs text-slate-900 cursor-pointer'>
                      <input
                        id='web-app-checkbox'
                        type='checkbox'
                        checked={selected[2]}
                        className='scale-75 align-middle text-blue-600 bg-slate-300 border-2-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer'
                        // 選択したら状態管理変数に真偽値を代入
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const newSelected = [...selected]
                          newSelected[2] = e.target.checked
                          setSelected(newSelected)
                        }}
                      />
                      <span className='ps-3'>講義を選択</span>
                    </label>
                  </span>
                </td>
                <td className='px-7 border-2 py-3'></td>
              </tr>
              {/* 3列目 */}
              <tr className='border-2'>
                <td className='bg-slate-300 border-2 px-7 py-3'>2限目<br />10：50 ~ 12：20</td>
                <td className='bg-sky-200 px-7 border-2 py-3'></td>
                <td className='bg-amber-200 px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='bg-sky-200 px-7 border-2 py-3'></td>
                <td className='bg-sky-200 px-7 border-2 py-3'>
                  CEH（選択）<br />前田先生<br /><br />AIルーム<br />
                  <span className='inline-block my-5'>
                    <label htmlFor='ceh-2-checkbox' className='w-full flex md:block flex-col py-3 text-[9px] md:text-xs text-slate-900 cursor-pointer'>
                      <input
                        id='ceh-2-checkbox'
                        type='checkbox'
                        checked={selected[3]}
                        className='scale-75 align-middle text-blue-600 bg-slate-300 border-2-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer'
                        // 選択したら状態管理変数に真偽値を代入
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const newSelected = [...selected]
                          newSelected[3] = e.target.checked
                          setSelected(newSelected)
                        }}
                      />
                      <span className='ps-3'>講義を選択</span>
                    </label>
                  </span>
                </td>
              </tr>
              {/* 4列目 */}
              <tr className='border-2'>
                <td className='bg-slate-300 border-2 px-7 py-3'>3限目<br />13：00 ~ 14：30</td>
                <td className='bg-amber-200 px-7 border-2 py-3'>ビジネストレーニング<br />織田先生<br /><br />302B</td>
                <td className='bg-amber-200 px-7 border-2 py-3'>OT<br />サイバーコマンド<br /><br />404A</td>
                <td className='bg-amber-200 px-7 border-2 py-3'>卒業研究<br />辻井先生<br /><br />404A</td>
                <td className='px-7 border-2 py-3'></td>
                <td className='bg-sky-200 px-7 border-2 py-3'>
                  Ruby（選択）<br />リバティ・フィッシュ<br /><br />404A<br />
                  <span className='inline-block my-5'>
                    <label htmlFor='ruby-checkbox' className='w-full flex md:block flex-col py-3 text-[9px] md:text-xs text-slate-900 cursor-pointer'>
                      <input
                        id='ruby-checkbox'
                        type='checkbox'
                        checked={selected[4]}
                        className='scale-75 align-middle text-blue-600 bg-slate-300 border-2-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer'
                        // 選択したら状態管理変数に真偽値を代入
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const newSelected = [...selected]
                          newSelected[4] = e.target.checked
                          setSelected(newSelected)
                        }}
                      />
                      <span className='ps-3'>講義を選択</span>
                    </label>
                  </span>
                </td>
                <td className='bg-sky-200 px-7 border-2 py-3'></td>
              </tr>
              {/* 5列目 */}
              <tr className='border-2'>
                <td className='bg-slate-300 border-2 px-7 py-3'>4限目<br />14：40 ~ 16：10</td>
                <td className='bg-amber-200 px-7 border-2 py-3'></td>
                <td className='bg-amber-200 px-7 border-2 py-3'></td>
                <td className='bg-amber-200 px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='bg-sky-200 px-7 border-2 py-3'></td>
                <td className='bg-amber-200 px-7 border-2 py-3'>ブロックチェーン<br />中島先生<br /><br />303A</td>
              </tr>
              {/* 6列目 */}
              <tr className='border-2'>
                <td className='bg-slate-300 border-2 px-7 py-3'>5限目<br />16：20 ~ 17：50</td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='bg-amber-200 px-7 border-2 py-3'>HR</td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='bg-amber-200 px-7 border-2 py-3'></td>
              </tr>
              {/* 7列目 */}
              <tr className='border-2'>
                <td className='bg-slate-300 border-2 px-7 py-3'>6限目<br />18：00 ~ 19：30</td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
                <td className='px-7 border-2 py-3'></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='flex flex-row justify-between items-center gap-20'>
          <button
            className='text-xs md:text-sm px-3 md:px-10 py-3 md:py-4 rounded-xl bg-slate-300 hover:bg-slate-300 border-2 border-2-slate-300 duration-200 shadow hover:shadow-md'
            onClick={() => alert('入力したデータを一時保存しました。')}
          >
            一時保存する
          </button>
          <button
            className='text-xs md:text-sm px-3 md:px-10 py-3 md:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md'
            onClick={() => alert('提出が完了しました。')}
          >
            提出する
          </button>
        </section>
      </section>
    </main>
  )
}

export default Course_Registration