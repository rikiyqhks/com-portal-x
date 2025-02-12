'use client'

import { NextPage } from 'next'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ArrowLeft, Calendar, Clock, GraduationCap, User } from 'lucide-react'
import dummyCourse from '@/app/data/dummyCourse.json'

// 出席情報の型定義
type AttendanceDetail = {
  date: string
  startTime: string
  endTime: string
  status: '出席' | '欠席' | '遅刻' | '早退'
}

// 科目詳細の型定義
type CourseDetail = {
  subjectID: number
  subjectName: string
  instructor: string
  credits: number
  class: number
  absence: number
  gradeRating: string
  attendanceDetails: AttendanceDetail[]
}

/**
 * 科目詳細ページ
 * @returns 科目の詳細情報と出席状況
 */
const CourseDetailPage: NextPage = () => {
  const params = useParams()
  const [courseDetail, setCourseDetail] = useState<CourseDetail>()
  const [attendanceRate, setAttendanceRate] = useState<number>(0)

  /**
   * URLパラメータから科目IDを取得し、該当する科目の詳細情報を設定
   */
  useEffect(() => {
    // ダミーの出席詳細データ
    const dummyAttendanceDetails: AttendanceDetail[] = [
      { date: '2024-04-01', startTime: '09:00', endTime: '10:30', status: '出席' },
      { date: '2024-04-08', startTime: '09:00', endTime: '10:30', status: '欠席' },
      { date: '2024-04-15', startTime: '09:00', endTime: '10:30', status: '遅刻' },
      { date: '2024-04-22', startTime: '09:00', endTime: '10:30', status: '出席' },
      { date: '2024-05-06', startTime: '09:00', endTime: '10:30', status: '早退' },
    ]

    // 全期間の科目データから該当する科目を検索
    dummyCourse.forEach(year => {
      const firstSemesterCourse = year.firstSemester.find(
        course => course.subjectID === Number(params.id)
      )
      const lastSemesterCourse = year.lastSemester.find(
        course => course.subjectID === Number(params.id)
      )

      if (firstSemesterCourse) {
        setCourseDetail({
          ...firstSemesterCourse,
          attendanceDetails: dummyAttendanceDetails,
        })
      } else if (lastSemesterCourse) {
        setCourseDetail({
          ...lastSemesterCourse,
          attendanceDetails: dummyAttendanceDetails,
        })
      }
    })
  }, [params.id])

  /**
   * 出席率を計算
   */
  useEffect(() => {
    if (courseDetail?.attendanceDetails) {
      const totalClasses = courseDetail.attendanceDetails.length
      const attendedClasses = courseDetail.attendanceDetails.filter(
        detail => detail.status === '出席'
      ).length
      setAttendanceRate((attendedClasses / totalClasses) * 100)
    }
  }, [courseDetail])

  /**
   * 出席状況に応じたスタイルを返す
   */
  const getStatusStyle = (status: string) => {
    switch (status) {
      case '出席':
        return 'bg-green-100 text-green-800'
      case '欠席':
        return 'bg-red-100 text-red-800'
      case '遅刻':
        return 'bg-yellow-100 text-yellow-800'
      case '早退':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (!courseDetail) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p className='text-gray-500'>読み込み中...</p>
      </div>
    )
  }

  return (
    <main className='min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* 戻るボタン */}
        <Link
          href='/attendance_sheet'
          className='mb-8 inline-flex items-center text-sm text-gray-500 hover:text-gray-700'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          戻る
        </Link>

        {/* 科目概要 */}
        <div className='mb-8 rounded-lg bg-white p-6 shadow-lg'>
          <h1 className='mb-4 text-2xl font-bold text-gray-900'>{courseDetail.subjectName}</h1>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex items-center space-x-2'>
              <User className='h-5 w-5 text-gray-400' />
              <span className='text-sm text-gray-600'>{courseDetail.instructor}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <GraduationCap className='h-5 w-5 text-gray-400' />
              <span className='text-sm text-gray-600'>{courseDetail.credits}単位</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Calendar className='h-5 w-5 text-gray-400' />
              <span className='text-sm text-gray-600'>全{courseDetail.class}回</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Clock className='h-5 w-5 text-gray-400' />
              <span className='text-sm text-gray-600'>出席率: {attendanceRate.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* 出席状況サマリー */}
        <div className='mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='rounded-lg bg-green-50 p-4'>
            <p className='text-sm font-medium text-green-800'>出席</p>
            <p className='text-2xl font-bold text-green-900'>
              {courseDetail.attendanceDetails.filter(d => d.status === '出席').length}回
            </p>
          </div>
          <div className='rounded-lg bg-red-50 p-4'>
            <p className='text-sm font-medium text-red-800'>欠席</p>
            <p className='text-2xl font-bold text-red-900'>
              {courseDetail.attendanceDetails.filter(d => d.status === '欠席').length}回
            </p>
          </div>
          <div className='rounded-lg bg-yellow-50 p-4'>
            <p className='text-sm font-medium text-yellow-800'>遅刻</p>
            <p className='text-2xl font-bold text-yellow-900'>
              {courseDetail.attendanceDetails.filter(d => d.status === '遅刻').length}回
            </p>
          </div>
          <div className='rounded-lg bg-orange-50 p-4'>
            <p className='text-sm font-medium text-orange-800'>早退</p>
            <p className='text-2xl font-bold text-orange-900'>
              {courseDetail.attendanceDetails.filter(d => d.status === '早退').length}回
            </p>
          </div>
        </div>

        {/* 出席詳細 */}
        <div className='overflow-hidden rounded-lg bg-white shadow'>
          <div className='px-4 py-5 sm:px-6'>
            <h2 className='text-lg font-medium text-gray-900'>出席記録</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500'>日付</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500'>時間</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500'>状況</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {courseDetail.attendanceDetails.map((detail, index) => (
                  <tr key={index}>
                    <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
                      {detail.date}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                      {detail.startTime} - {detail.endTime}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusStyle(
                          detail.status
                        )}`}
                      >
                        {detail.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CourseDetailPage