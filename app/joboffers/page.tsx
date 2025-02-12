'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { jobs } from '@/app/data/dummyJobs'
import type { JobType } from '@/app/types/job'

const JobOffers = () => {
  const [searchParams, setSearchParams] = useState({
    fiscalYear: '',
    keyword: '',
    industry: '',
    jobType: '',
    employmentType: '',
    salaryType: '',
    baseSalary: '',
    location: ''
  })

  const [filteredJobs, setFilteredJobs] = useState<JobType[]>(jobs)

  const handleSearch = () => {
    const filtered = jobs.filter(job => {
      const matchesYear = !searchParams.fiscalYear || job.fiscalYear.toString() === searchParams.fiscalYear
      const matchesKeyword = !searchParams.keyword || 
        job.title.toLowerCase().includes(searchParams.keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(searchParams.keyword.toLowerCase())
      const matchesIndustry = !searchParams.industry || job.industry === searchParams.industry
      const matchesJobType = !searchParams.jobType || job.jobType === searchParams.jobType
      const matchesEmploymentType = !searchParams.employmentType || job.employmentType === searchParams.employmentType
      const matchesSalaryType = !searchParams.salaryType || job.salaryType === searchParams.salaryType
      const matchesLocation = !searchParams.location || job.location.includes(searchParams.location)
      const matchesBaseSalary = !searchParams.baseSalary || job.baseSalary >= parseInt(searchParams.baseSalary)

      return matchesYear && matchesKeyword && matchesIndustry && matchesJobType && 
             matchesEmploymentType && matchesSalaryType && matchesLocation && matchesBaseSalary
    })
    setFilteredJobs(filtered)
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Search Section */}
      <div className='container mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-4'>求人検索</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>求人年度</label>
              <select
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                value={searchParams.fiscalYear}
                onChange={(e) => setSearchParams({...searchParams, fiscalYear: e.target.value})}
              >
                <option value=''>全て</option>
                <option value='2024'>2024年度</option>
                <option value='2023'>2023年度</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>キーワード</label>
              <input
                type='text'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                placeholder='職種名、会社名など'
                value={searchParams.keyword}
                onChange={(e) => setSearchParams({...searchParams, keyword: e.target.value})}
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>業種</label>
              <select
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                value={searchParams.industry}
                onChange={(e) => setSearchParams({...searchParams, industry: e.target.value})}
              >
                <option value=''>全て</option>
                <option value='IT・通信'>IT・通信</option>
                <option value='製造'>製造</option>
                <option value='サービス'>サービス</option>
                <option value='医療'>医療</option>
                <option value='物流'>物流</option>
                <option value='不動産'>不動産</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>契約形態</label>
              <select
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                value={searchParams.employmentType}
                onChange={(e) => setSearchParams({...searchParams, employmentType: e.target.value})}
              >
                <option value=''>全て</option>
                <option value='fulltime'>正社員</option>
                <option value='contract'>契約社員</option>
                <option value='parttime'>アルバイト</option>
                <option value='unspecified'>未設定</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>給与形態</label>
              <select
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                value={searchParams.salaryType}
                onChange={(e) => setSearchParams({...searchParams, salaryType: e.target.value})}
              >
                <option value=''>全て</option>
                <option value='monthly'>月給</option>
                <option value='yearly'>年俸</option>
                <option value='hourly'>時給</option>
                <option value='daily'>日給</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>基本給（以上）</label>
              <input
                type='number'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                placeholder='例: 250000'
                value={searchParams.baseSalary}
                onChange={(e) => setSearchParams({...searchParams, baseSalary: e.target.value})}
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>勤務地</label>
              <input
                type='text'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500'
                placeholder='例: 東京都'
                value={searchParams.location}
                onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
              />
            </div>

            <div className='md:col-span-2 lg:col-span-4'>
              <button
                onClick={handleSearch}
                className='w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center gap-2'
              >
                <Search className='h-5 w-5' />
                検索する
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className='mt-8'>
          <h2 className='text-xl font-semibold mb-4'>検索結果: {filteredJobs.length}件</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredJobs.map(job => (
              <div key={job.id} className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-lg font-semibold text-amber-500'>{job.title}</h3>
                <p className='text-gray-600 mt-2'>{job.company}</p>
                <div className='mt-4 space-y-2'>
                  <p className='text-sm text-gray-500'>
                    <span className='font-medium'>勤務地:</span> {job.location}
                  </p>
                  <p className='text-sm text-gray-500'>
                    <span className='font-medium'>給与:</span> {job.baseSalary.toLocaleString()}円/{
                      job.salaryType === 'monthly' ? '月' :
                      job.salaryType === 'yearly' ? '年' :
                      job.salaryType === 'hourly' ? '時' : '日'
                    }
                  </p>
                  <p className='text-sm text-gray-500'>
                    <span className='font-medium'>雇用形態:</span> {
                      job.employmentType === 'fulltime' ? '正社員' :
                      job.employmentType === 'contract' ? '契約社員' :
                      job.employmentType === 'parttime' ? 'アルバイト' : '未設定'
                    }
                  </p>
                </div>
                <Link
                  href={`/joboffers/${job.id}`}
                  className='mt-4 text-amber-500 hover:text-amber-600 text-sm font-medium inline-block'
                >
                  詳細を見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobOffers