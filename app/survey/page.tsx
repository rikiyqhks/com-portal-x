'use client'

import { NextPage } from 'next'
import { useEffect, useState } from 'react'

// ダミーデータの読み込み
import dummySurvey from '@/app/data/dummySurvey.json'

// アンケートの型指定
type Survey = {
  id: number
  title: string
  contents: string
  applicant: string
  deadline: string
  reaction: number
}

/**
 * アンケート一覧を表示するページ
 * @returns アンケート一覧
 */
const Survey: NextPage = () => {

  // アンケートを状態管理する配列
  const [surveys, setSurveys] = useState<Survey[]>([])
  // リアクションのカウントを状態管理する
  const [reaction, setReaction] = useState<boolean[]>([])

  /**
   * データベースから取得したアンケートを
   * 状態管理変数に代入する
   */
  useEffect(() => {
    const surveyTemp: any[] = []
    const reactionTemp: boolean[] = []

    dummySurvey.map((survey: Survey) => {
      surveyTemp.push(survey)
      reactionTemp.push(false)
    })

    setSurveys(surveyTemp)
    setReaction(reactionTemp)
  }, [])

  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 px-4 py-2'>
        <h1 className='text-2xl font-thin'>アンケート一覧</h1>
        {/* お知らせ */}
        <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 px-4 py-2'>
          <ul className='flex flex-col justify-start gap-5'>
            {surveys.map((survey: Survey) => (
              <li
                className='w-auto h-auto flex flex-col justify-center gap-5 border border-slate-200 rounded-md shadow-md p-5'
                key={survey.id}
              >
                <h1 className='text-lg font-bold underline'>{survey.title}</h1>
                <p className='whitespace-pre-wrap'>{survey.contents}</p>
                <p className='font-bold'>アンケート募集者：{survey.applicant}</p>
                <button
                  className={`w-auto h-10 flex flex-row justify-center items-center bg-white border rounded-full mx-20 duration-200 ${reaction[survey.id - 1] ? 'bg-amber-300' : 'hover:bg-amber-100'}`}
                  onClick={() => setReaction((prevState) => 
                    prevState.map((bool: boolean, index: number) => (index === survey.id - 1 ? !bool : bool))
                  )}
                >
                  &#x1f44d;
                  <small className='font-bold'>
                    リアクション: {reaction[survey.id - 1] ? 1 : 0}
                  </small>
                </button>
                <small className='text-red-500 font-bold text-end'>アンケート締切日：{survey.deadline}</small>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  )
}

export default Survey