'use client'

import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, ChangeEvent } from 'react'
import Detail from '@/public/detail.svg'

// ダミーデータの読み込み
import dummyCourse from '@/app/data/dummyCourse.json'

// コースの子配列の型指定
type Course = {
  subjectID: number
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
const Attendance_Sheet: NextPage = () => {
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
   * コースごとに履修単位数を計算して合計を状態管理する変数に代入する
   */
  useEffect(() => {
    let temp = 0
    courses?.map((course: Course) => {
      temp += course.credits
    })
    setAcademicCredits(temp)
  }, [courses])

  /**
   * 選択されている年度もしくは学期が変更されるとそれに合致したデータを状態管理する配列に代入する
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

  /**
   * 成績評価から合否を判定する
   */
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
   */
  const handleAcademicYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedAcademicYear(value)
  }

  /**
   * 学期を選択すると状態管理する変数に代入される
   */
  const handleSemesterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedSemester(value)
  }

  return (
    <main className='min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* 学生情報テーブル */}
        <section className='mb-8'>
          <div className='overflow-x-auto rounded-lg shadow'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead>
                <tr className='bg-amber-400'>
                  <th className='px-4 py-3 text-[10px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>氏名</th>
                  <th className='px-4 py-3 text-[10px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>学籍番号</th>
                  <th className='px-4 py-3 text-[10px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>所属</th>
                  <th className='px-4 py-3 text-[10px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>学年</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                <tr>
                  <td className='whitespace-nowrap px-4 py-3 text-[10px] md:text-sm sm:px-6 lg:px-8'>山田 太郎</td>
                  <td className='whitespace-nowrap px-4 py-3 text-[10px] md:text-sm sm:px-6 lg:px-8'>0000000000</td>
                  <td className='px-4 py-3 text-[10px] md:text-sm sm:px-6 lg:px-8'>スーパーゲームＩＴ科 ホワイトハッカー専攻</td>
                  <td className='whitespace-nowrap px-4 py-3 text-[10px] md:text-sm sm:px-6 lg:px-8'>4年</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 年度・学期選択 */}
        <section className='mb-8'>
          <div className='overflow-x-auto rounded-lg shadow'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead>
                <tr className='bg-amber-400'>
                  <th className='px-4 py-3 text-[10px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>年度</th>
                  <th className='px-4 py-3 text-[10px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>学期</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                <tr>
                  <td className='px-4 py-3 sm:px-6 lg:px-8'>
                    <select
                      className='w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-[10px] md:text-sm'
                      onChange={handleAcademicYearChange}
                      defaultValue='2024'
                    >
                      <option value='2025'>2025年度</option>
                      <option value='2024'>2024年度</option>
                      <option value='2023'>2023年度</option>
                      <option value='2022'>2022年度</option>
                      <option value='2021'>2021年度</option>
                    </select>
                  </td>
                  <td className='px-4 py-3 sm:px-6 lg:px-8'>
                    <select
                      className='w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-[10px] md:text-sm'
                      onChange={handleSemesterChange}
                      defaultValue='前期'
                    >
                      <option value='前期'>前期</option>
                      <option value='後期'>後期</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 成績・出欠一覧 */}
        <section>
          <div className='overflow-x-auto rounded-lg shadow'>
            <div className='mb-4 space-y-1 px-4 py-3 sm:px-6 lg:px-8'>
              <p className='text-[10px] md:text-sm font-medium'>
                <span className='font-bold'>この学期の取得単位: </span>0.0単位
              </p>
              <p className='text-[10px] md:text-sm font-medium'>
                <span className='font-bold'>この学期の履修単位: </span>
                {academicCredits?.toFixed(1)}単位
              </p>
            </div>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead>
                <tr className='bg-gray-50'>
                  <th className='px-4 py-3 text-[9px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>授業名</th>
                  <th className='px-4 py-3 text-[9px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'>成績・出欠</th>
                  <th className='px-4 py-3 text-[9px] md:text-xs font-medium text-gray-900 sm:px-6 lg:px-8'></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {courses?.map((course: Course) => (
                  <tr key={course.subjectName}>
                    <td className='bg-gray-50 px-4 py-4 sm:px-6 lg:px-8'>
                      <div className='space-y-1'>
                        <p className='font-bold text-[10px] md:text-sm'>{course.subjectName}</p>
                        <p className='text-[10px] md:text-xs text-gray-600'>講師名: {course.instructor}</p>
                        <p className='text-[10px] md:text-xs text-gray-600'>単位数: {course.credits}</p>
                      </div>
                    </td>
                    <td className='px-4 py-4 sm:px-6 lg:px-8'>
                      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        <div className='overflow-hidden rounded-lg border border-sky-300'>
                          <div className='bg-sky-400 px-3 py-2 text-[10px] md:text-xs text-white'>授業数</div>
                          <div className='px-3 py-2 text-right'>
                            <span className='text-[10px] md:text-sm font-bold'>{course.class}</span>
                            <span className='text-[10px] md:text-xs'>コマ</span>
                          </div>
                        </div>
                        <div className='overflow-hidden rounded-lg border border-red-300'>
                          <div className='bg-red-400 px-3 py-2 text-[10px] md:text-xs text-white'>欠席数</div>
                          <div className='px-3 py-2 text-right'>
                            <span className='text-[10px] md:text-sm font-bold'>{course.absence}</span>
                            <span className='text-[10px] md:text-xs'>回</span>
                          </div>
                        </div>
                        <div className='overflow-hidden rounded-lg border border-green-300'>
                          <div className='bg-green-400 px-3 py-2 text-[10px] md:text-xs text-white'>成績評価</div>
                          <div className='px-3 py-2 text-right'>
                            <span className='text-[10px] md:text-sm font-bold'>{course.gradeRating}</span>
                            <span className='text-[10px] md:text-xs'>評価 (合格)</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-center sm:px-6 lg:px-8'>
                      <Link
                        href={`/attendance_sheet/${course.subjectID}`}
                        className='inline-flex items-center rounded-lg bg-gray-50 px-3 py-2 text-[10px] md:text-xs font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
                      >
                        <Image
                          className='mr-2 h-4 w-4'
                          src={Detail}
                          alt='詳細'
                        />
                        詳細
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Attendance_Sheet