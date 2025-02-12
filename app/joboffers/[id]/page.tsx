import { ArrowLeft, Building2, MapPin, Clock, Calendar, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { jobs } from '@/app/data/dummyJobs'

export const generateStaticParams = async() => {
  return jobs.map((job) => ({
    id: job.id,
  }))
}

const JobDetail = ({ params }: { params: { id: string } }) => {
  const job = jobs.find(j => j.id === params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <Link href='/joboffers' className='text-amber-500 hover:text-amber-600 flex items-center gap-2 mb-6'>
          <ArrowLeft className='h-5 w-5' />
          求人一覧に戻る
        </Link>

        <div className='bg-white rounded-lg shadow-md p-8'>
          <div className='border-b pb-6 mb-6'>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>{job.title}</h1>
            <div className='flex items-center gap-4 text-gray-600 flex-wrap'>
              <div className='flex items-center gap-2'>
                <Building2 className='h-5 w-5' />
                {job.company}
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='h-5 w-5' />
                {job.location}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-xl font-semibold mb-4'>基本情報</h2>
              <dl className='space-y-4'>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>業種</dt>
                  <dd className='mt-1 text-gray-900'>{job.industry}</dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>職種</dt>
                  <dd className='mt-1 text-gray-900'>{job.jobType}</dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>雇用形態</dt>
                  <dd className='mt-1 text-gray-900'>
                    {job.employmentType === 'fulltime' ? '正社員' :
                     job.employmentType === 'contract' ? '契約社員' :
                     job.employmentType === 'parttime' ? 'アルバイト' : '未設定'}
                  </dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>給与</dt>
                  <dd className='mt-1 text-gray-900'>
                    {job.baseSalary.toLocaleString()}円/
                    {job.salaryType === 'monthly' ? '月' :
                     job.salaryType === 'yearly' ? '年' :
                     job.salaryType === 'hourly' ? '時' : '日'}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4'>勤務条件</h2>
              <dl className='space-y-4'>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>勤務時間</dt>
                  <dd className='mt-1 text-gray-900 flex items-center gap-2'>
                    <Clock className='h-5 w-5 text-gray-400' />
                    {job.workingHours}
                  </dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>休日・休暇</dt>
                  <dd className='mt-1 text-gray-900 flex items-center gap-2'>
                    <Calendar className='h-5 w-5 text-gray-400' />
                    {job.holidays}
                  </dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>保険</dt>
                  <dd className='mt-1 text-gray-900'>
                    <ul className='list-disc list-inside'>
                      {job.insurances.map((insurance, index) => (
                        <li key={index}>{insurance}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>仕事内容</h2>
            <p className='text-gray-700 whitespace-pre-wrap'>{job.description}</p>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>応募資格</h2>
            <ul className='list-disc list-inside space-y-2'>
              {job.requirements.map((req, index) => (
                <li key={index} className='text-gray-700'>{req}</li>
              ))}
            </ul>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>福利厚生</h2>
            <ul className='list-disc list-inside space-y-2'>
              {job.benefits.map((benefit, index) => (
                <li key={index} className='text-gray-700'>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>研修制度</h2>
            <p className='text-gray-700'>{job.trainingSystem}</p>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>選考プロセス</h2>
            <ol className='list-decimal list-inside space-y-2'>
              {job.selectionProcess.map((process, index) => (
                <li key={index} className='text-gray-700'>{process}</li>
              ))}
            </ol>
          </div>

          <div className='mt-8 border-t pt-8'>
            <h2 className='text-xl font-semibold mb-4'>お問い合わせ先</h2>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <p className='font-medium text-gray-900 mb-2'>{job.contactInfo.department}</p>
              <p className='text-gray-700 mb-4'>担当: {job.contactInfo.person}</p>
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-gray-600'>
                  <Phone className='h-5 w-5' />
                  <a href={`tel:${job.contactInfo.phone}`} className='hover:text-amber-500'>
                    {job.contactInfo.phone}
                  </a>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                  <Mail className='h-5 w-5' />
                  <a href={`mailto:${job.contactInfo.email}`} className='hover:text-amber-500'>
                    {job.contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail