'use client'

import { NextPage } from 'next'

// ダミーデータの読み込み
import dummyAttendance from '@/app/data/dummyAttendance.json'

/**
 * 出席状況の詳細一覧を確認できるページ
 * @returns 出席状況詳細一覧
 */
const Attendance_Rate_Detail: NextPage = () => {
  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-2xl font-thin'>出席状況詳細一覧</h1>
        <div className='flex flex-col gap-3 overflow-x-scroll'>
          <p className='sticky left-0 text-xl mt-5'>期間毎出欠状況</p>
          {/* テーブルコンテンツ 1つめ */}
          <table className='w-full table-fixed text-xs text-center'>
            <thead>
              <tr className='bg-amber-400'>
                <th className='w-40 px-7 py-3'>期間</th>
                <th className='w-28 px-7 py-3'>出席率</th>
                <th className='w-24 px-7 py-3'>出席</th>
                <th className='w-24 px-7 py-3'>公欠</th>
                <th className='w-24 px-7 py-3'>欠席</th>
                <th className='w-24 px-7 py-3'>遅刻</th>
                <th className='w-24 px-7 py-3'>早退</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>2024年度出席率</td>
                <td className='px-7 py-3'>77.6%</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.attendance + dummyAttendance[1].data.attendance}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.officialAbsence + dummyAttendance[1].data.officialAbsence}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.absence + dummyAttendance[1].data.absence}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.lateness + dummyAttendance[1].data.lateness}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.early + dummyAttendance[1].data.early}</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>前期出席率</td>
                <td className='px-7 py-3'>78.2%</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.attendance}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.officialAbsence}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.absence}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.lateness}</td>
                <td className='px-7 py-3'>{dummyAttendance[0].data.early}</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>後期出席率</td>
                <td className='px-7 py-3'>78.2%</td>
                <td className='px-7 py-3'>{dummyAttendance[1].data.attendance}</td>
                <td className='px-7 py-3'>{dummyAttendance[1].data.officialAbsence}</td>
                <td className='px-7 py-3'>{dummyAttendance[1].data.absence}</td>
                <td className='px-7 py-3'>{dummyAttendance[1].data.lateness}</td>
                <td className='px-7 py-3'>{dummyAttendance[1].data.early}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex flex-col gap-3 overflow-x-scroll'>
          <p className='sticky left-0 text-xl mt-5'>履修講義毎出欠状況</p>
          {/* テーブルコンテンツ 2つめ */}
          <table className='w-full table-fixed text-xs text-center'>
            <thead>
              <tr className='bg-amber-400'>
                <th className='w-60 px-7 py-3'>履修講義</th>
                <th className='w-28 px-7 py-3'>出席率</th>
                <th className='w-24 px-7 py-3'>出席</th>
                <th className='w-24 px-7 py-3'>公欠</th>
                <th className='w-24 px-7 py-3'>欠席</th>
                <th className='w-24 px-7 py-3'>遅刻</th>
                <th className='w-24 px-7 py-3'>早退</th>
                <th className='w-28 px-7 py-3'>成績評価</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>ﾌﾟﾛｸﾞﾗﾑ基礎2</td>
                <td className='px-7 py-3'>64.7%</td>
                <td className='px-7 py-3'>14</td>
                <td className='px-7 py-3'>8</td>
                <td className='px-7 py-3'>12</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>A</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>プログラミングⅣ</td>
                <td className='px-7 py-3'>86.7%</td>
                <td className='px-7 py-3'>24</td>
                <td className='px-7 py-3'>2</td>
                <td className='px-7 py-3'>4</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>A</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>エンジニアリング</td>
                <td className='px-7 py-3'>66.7%</td>
                <td className='px-7 py-3'>14</td>
                <td className='px-7 py-3'>2</td>
                <td className='px-7 py-3'>8</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>A</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>プログラム演習Ⅲ</td>
                <td className='px-7 py-3'>85.7%</td>
                <td className='px-7 py-3'>22</td>
                <td className='px-7 py-3'>2</td>
                <td className='px-7 py-3'>4</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>A</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>ビジネストレーニング</td>
                <td className='px-7 py-3'>76.5%</td>
                <td className='px-7 py-3'>18</td>
                <td className='px-7 py-3'>8</td>
                <td className='px-7 py-3'>8</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>A</td>
              </tr>
              <tr className='hover:bg-slate-100'>
                <td className='px-7 py-3'>ポートフォリオ</td>
                <td className='px-7 py-3'>91.7%</td>
                <td className='px-7 py-3'>20</td>
                <td className='px-7 py-3'>2</td>
                <td className='px-7 py-3'>2</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>0</td>
                <td className='px-7 py-3'>A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Attendance_Rate_Detail