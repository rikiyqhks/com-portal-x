'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, ChangeEvent } from 'react'
import Detail from '@/public/detail.svg'

// ダミーデータの読み込み
import dummyCourse from '@/app/data/dummyCourse.json'

// コースの子配列の型指定
type Course = {
  subjectName: string
  instructor: string
  credits: number
  class: number
  absence: number
  gradeRating: string
}

// コースの親配列の型指定
type Courses = {
  academicYear: string
  firstSemester: Course[]
  lastSemester: Course[]
}

/**
 * 成績と出欠確認ができるページ
 * @returns 成績・出欠確認表
 */
const Attendance_Sheet = () => {

  // コースを状態管理する配列
  const [courses, setCourses] = useState<Course[]>()
  // 選択された年度を状態管理する変数（初期値は今年度）
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string>('2024')
  // 選択された学期を状態管理する変数（初期値は前期）
  const [selectedSemester, setSelectedSemester] = useState<string>('前期')
  // 履修単位数を状態管理する変数
  const [academicCredits, setAcademicCredits] = useState<number>()
  // 合格か不合格か判定するための状態管理変数
  const [judges, setJudges] = useState<string[]>([])

  /**
   * コースごとに履修単位数を計算して
   * 合計を状態管理する変数に代入する
   */
  useEffect(() => {
    let temp = 0
    courses?.map((course: Course) => {
      temp += course.credits
    })
    setAcademicCredits(temp)
  }, [courses])

  /**
   * 選択されている年度もしくは学期が変更されると
   * それに合致したデータを状態管理する配列に代入
   * する
   */ 
  useEffect(() => {
    dummyCourse.map((courses: Courses) => {
      if(courses.academicYear === selectedAcademicYear) {
        switch(selectedSemester) {
          case '前期':
            setCourses(courses.firstSemester)
            courses.firstSemester.map((course: Course) => {
              calcIsPass(course.gradeRating)
            })
            break
          case '後期':
            setCourses(courses.lastSemester)
            break
          default:
            return null
        }
      }
    })
  }, [selectedAcademicYear, selectedSemester])

  const calcIsPass = (value: string) => {
    switch(value) {
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'S':
      case '認':
        setJudges([...judges, '合格'])
        break
      case 'F':
      case 'U':
        setJudges([...judges, '不合格'])
        break
      default:
        return null 
    }
  }

  /**
   * 年度を選択すると状態管理する変数に代入される
   * @param e イベントハンドラー
   */
  const handleAcademicYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedAcademicYear(value)
  }

  /**
   * 学期を選択すると状態管理する変数に代入される
   * @param e イベントハンドラー
   */
  const handleSemesterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedSemester(value)
  }

  // メインコンテンツ
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='flex flex-col justify-center items-center gap-4 px-4 py-2'>
        <section className='max-w-[300px] w-[300px] md:max-w-[600px] md:w-[600px]
          flex flex-col justify-center items-center md:justify-start md:items-start'>
          <table className='w-full table-fixed text-[9px] md:text-xs text-center'>
            <thead>
              <tr className='bg-amber-400'>
                <th className='w-20 px-5 py-1 md:w-40 md:px-7 md:py-3'>氏名</th>
                <th className='w-20 px-5 py-1 md:w-28 md:px-7 md:py-3'>学籍番号</th>
                <th className='w-32 px-5 py-1 md:w-24 md:px-7 md:py-3'>所属</th>
                <th className='w-16 px-5 py-1 md:w-24 md:px-7 md:py-3'>学年</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-slate-100'>
                <td className='px-3 py-1 md:px-7 md:py-3'>前田 力哉</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>2104240029</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>スーパーゲームＩＴ科 ホワイトハッカー専攻</td>
                <td className='px-3 py-1 md:px-7 md:py-3'>4年</td>
              </tr>
            </tbody>
          </table>
          <table className='w-full table-fixed text-[9px] md:text-xs text-center'>
            <thead>
              <tr className='bg-amber-400'>
                <th className='w-44 px-3 py-1 md:w-40 md:px-7 md:py-3'>年度</th>
                <th className='w-44 px-3 py-1 md:w-28 md:px-7 md:py-3'>学期</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-slate-100'>
                <td className='px-3 py-1 md:px-7 md:py-3'>
                  <select
                    className='border shadow px-8 py-3'
                    onChange={handleAcademicYearChange}
                    defaultValue={'2024'}
                  >
                    <option value='2025'>2025年度</option>
                    <option value='2024'>2024年度</option>
                    <option value='2023'>2023年度</option>
                    <option value='2022'>2022年度</option>
                    <option value='2021'>2021年度</option>
                  </select>
                </td>
                <td className='px-3 py-1 md:px-7 md:py-3'>
                  <select
                    className='border shadow px-8 py-3'
                    onChange={handleSemesterChange}
                    defaultValue={'前期'}
                  >
                    <option value='前期'>前期</option>
                    <option value='後期'>後期</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='max-w-[300px] w-[300px] md:max-w-[1500px] md:w-[1500px]
          flex flex-col overflow-x-scroll md:overflow-x-visible justify-start md:justify-center items-start md:items-center'>
          <table className='w-full table-fixed text-[9px] md:text-xs text-center border'>
            <caption className='text-start py-1'><b>この学期の取得単位 : </b>0.0単位</caption>
            {/* 小数第一位まで表示するようにtoFixedメソッドを使用 */}
            <caption className='text-start py-1'><b>この学期の履修単位 : </b>{academicCredits?.toFixed(1)}単位</caption>
            <thead>
              <tr className='bg-slate-100 border'>
                <th className='w-12 px-3 py-1 md:w-16 border md:px-7 md:py-3'>授業名</th>
                <th className='w-24 px-3 py-1 md:w-44 border md:px-7 md:py-3'>成績・出欠</th>
                <th className='w-12 px-3 py-1 md:w-16 border md:px-7 md:py-3'></th>
              </tr>
            </thead>
            <tbody>
            {/* 条件に合致したコースをすべて表示 */}
            {courses?.map((course: Course) => (
                <tr className='border' key={course.subjectName}>
                  <td className='bg-slate-300 px-3 py-3 md:py-5 font-bold'>
                    <p>{course.subjectName}</p>
                    <p>講師名: {course.instructor}</p>
                    <p>単位数: {course.credits}</p>
                  </td>
                  <td className='px-7 border py-3'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                      <section className='border border-sky-300'>
                        <div className='w-16 md:w-60 h-4 md:h-9 flex justify-center items-center bg-sky-400 text-white'>
                          <p>授業数</p>
                        </div>
                        <div className='w-16 md:w-60 h-4 md:h-9 flex justify-end items-center pr-2 md:pr-5'>
                          <p><span className='md:text-lg font-bold md:mx-2'>{course.class}</span>コマ</p>
                        </div>
                      </section>
                      <section className='border border-red-300'>
                        <div className='w-16 md:w-60 h-4 md:h-9 flex justify-center items-center  bg-red-400 text-white'>
                          <p>欠席数</p>
                        </div>
                        <div className='w-16 md:w-60 h-4 md:h-9 flex justify-end items-center pr-2 md:pr-5'>
                          <p><span className='md:text-lg font-bold md:mx-2'>{course.absence}</span>回</p>
                        </div>
                      </section>
                      <section className='border border-green-300'>
                        <div className='w-16 md:w-60 h-4 md:h-9 flex justify-center items-center  bg-green-400 text-white'>
                          <p>成績評価</p>
                        </div>
                        <div className='w-16 md:w-60 h-4 md:h-9 flex justify-end items-center pr-2 md:pr-5'>
                          <p><span className='md:text-lg font-bold md:mx-2'>{course.gradeRating}</span>評価 (合格)</p>
                        </div>
                      </section>
                    </div>
                  </td>
                  <td className='py-3'>
                    <Link
                      className='w-16 md:w-32 flex flex-row justify-center items-center gap-1 md:gap-2 text-[9px] md:text-xs
                        mx-auto px-2 md:px-5 py-2 md:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 duration-200 shadow hover:shadow-md'
                      href='#'
                    >
                      <Image
                        className='w-4 md:w-6'
                        src={Detail}
                        width={20}
                        alt='詳細'
                      />
                      詳細
                    </Link>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  )
}

export default  Attendance_Sheet