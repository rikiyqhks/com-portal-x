'use client'

import { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'

type Course = {
  name: string
  teacher?: string
  room?: string
  isSelectable?: boolean
  type?: 'required' | 'elective'
}

type Schedule = {
  [key: number]: {
    [key: number]: Course | null
  }
}

const courseSchedule: Schedule = {
  0: { // 1限目
    0: { name: 'CEH', teacher: '前田先生', room: '303A', isSelectable: true, type: 'elective' },
    1: { name: 'Linux', teacher: '8×9', room: '303C', type: 'required' },
    2: null,
    3: null,
    4: { name: 'Webアプリ開発', teacher: '鳥飼先生', room: 'AIルーム', isSelectable: true, type: 'elective' },
    5: null
  },
  1: { // 2限目
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: { name: 'CEH', teacher: '前田先生', room: 'AIルーム', isSelectable: true, type: 'elective' }
  },
  2: { // 3限目
    0: { name: 'ビジネストレーニング', teacher: '織田先生', room: '302B', type: 'required' },
    1: { name: 'OT', teacher: 'サイバーコマンド', room: '404A', type: 'required' },
    2: { name: '卒業研究', teacher: '辻井先生', room: '404A', type: 'required' },
    3: null,
    4: { name: 'Ruby', teacher: 'リバティ・フィッシュ', room: '404A', isSelectable: true, type: 'elective' },
    5: null
  },
  3: { // 4限目
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: { name: 'ブロックチェーン', teacher: '中島先生', room: '303A', type: 'required' }
  },
  4: { // 5限目
    0: null,
    1: null,
    2: { name: 'HR', type: 'required' },
    3: null,
    4: null,
    5: null
  },
  5: { // 6限目
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  }
}

/**
 * 履修登録ができるページ
 * @returns 履修登録
 */
const Course_Registration: NextPage = () => {
  // 履修科目を選択しているか状態管理する配列
  const [selected, setSelected] = useState<boolean[]>(Array(10).fill(false))

  const renderCourseCell = (course: Course | null, periodIndex: number, dayIndex: number) => {
    if (!course) return null

    const bgColor = course.type === 'required' ? 'bg-amber-100' : 'bg-sky-100'
    const selectableIndex = `${periodIndex}-${dayIndex}`

    return (
      <div className={`${bgColor} p-2 rounded h-full`}>
        <div className='font-medium'>{course.name}{course.type === 'elective' && '（選択）'}</div>
        {course.teacher && <div className='text-sm'>{course.teacher}</div>}
        {course.room && <div className='text-sm text-gray-600'>{course.room}</div>}
        {course.isSelectable && (
          <label className='mt-2 flex items-center space-x-2 cursor-pointer'>
            <input
              type='checkbox'
              checked={selected[parseInt(selectableIndex)]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const newSelected = [...selected]
                newSelected[parseInt(selectableIndex)] = e.target.checked
                setSelected(newSelected)
              }}
              className='form-checkbox h-4 w-4 text-blue-600'
            />
            <span className='text-sm'>講義を選択</span>
          </label>
        )}
      </div>
    )
  }

  // メインコンテンツ
  return (
    <main className='min-h-screen w-full p-4 md:p-8 lg:p-12'>
      <div className='max-w-7xl mx-auto'>
        <section className='space-y-8'>
          <h1 className='text-xl md:text-2xl font-thin text-center'>履修登録</h1>
          
          {/* 学生情報テーブル */}
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[640px] mb-4 text-sm'>
              <thead>
                <tr className='bg-amber-400'>
                  <th className='p-3 md:p-4 text-left w-1/4'>氏名</th>
                  <th className='p-3 md:p-4 text-left w-1/4'>学籍番号</th>
                  <th className='p-3 md:p-4 text-left w-1/3'>所属</th>
                  <th className='p-3 md:p-4 text-left w-1/6'>学年</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-slate-100'>
                  <td className='p-3 md:p-4'>前田 力哉</td>
                  <td className='p-3 md:p-4'>2104240029</td>
                  <td className='p-3 md:p-4'>スーパーゲームＩＴ科 ホワイトハッカー専攻</td>
                  <td className='p-3 md:p-4'>4年</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 学期情報テーブル */}
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[640px] mb-4 text-sm'>
              <thead>
                <tr className='bg-amber-400'>
                  <th className='p-3 md:p-4 text-left w-1/2'>年度・学期</th>
                  <th className='p-3 md:p-4 text-left w-1/2'>仮登録期限</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-slate-100'>
                  <td className='p-3 md:p-4'>2025年 前期</td>
                  <td className='p-3 md:p-4'>2025年4月1日(火) 0時00分</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* コーススケジュールテーブル */}
          <div className='overflow-x-auto'>
            <p className='text-sm text-gray-600 mb-2 md:hidden'>※横スクロールして全体を確認して下さい。</p>
            <table className='w-full min-w-[1000px] text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-200'>
                  <th className='border p-3 md:p-4 w-20 md:w-24'>時限</th>
                  <th className='border p-3 md:p-4'>月曜日</th>
                  <th className='border p-3 md:p-4'>火曜日</th>
                  <th className='border p-3 md:p-4'>水曜日</th>
                  <th className='border p-3 md:p-4'>木曜日</th>
                  <th className='border p-3 md:p-4'>金曜日</th>
                  <th className='border p-3 md:p-4'>土曜日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '1限目', hours: '9：10 ~ 10：40' },
                  { time: '2限目', hours: '10：50 ~ 12：20' },
                  { time: '3限目', hours: '13：00 ~ 14：30' },
                  { time: '4限目', hours: '14：40 ~ 16：10' },
                  { time: '5限目', hours: '16：20 ~ 17：50' },
                  { time: '6限目', hours: '18：00 ~ 19：30' }
                ].map((slot, periodIndex) => (
                  <tr key={periodIndex} className='border'>
                    <td className='border bg-slate-200 p-2 md:p-3 text-center'>
                      <div className='font-medium'>{slot.time}</div>
                      <div className='text-xs md:text-sm'>{slot.hours}</div>
                    </td>
                    {[0, 1, 2, 3, 4, 5].map((dayIndex) => (
                      <td key={dayIndex} className='border p-2 md:p-3'>
                        <div className='min-h-[100px] flex flex-col justify-between'>
                          {renderCourseCell(courseSchedule[periodIndex][dayIndex], periodIndex, dayIndex)}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className='flex justify-center gap-4 md:gap-8 mt-8'>
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
          </div>
        </section>
      </div>
    </main>
  )
}

export default Course_Registration