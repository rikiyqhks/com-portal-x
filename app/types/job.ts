export type JobType = {
  id: string
  fiscalYear: number
  title: string
  company: string
  industry: string
  jobType: string
  employmentType: 'fulltime' | 'contract' | 'parttime' | 'unspecified'
  salaryType: 'monthly' | 'yearly' | 'hourly' | 'daily'
  baseSalary: number
  location: string
  description: string
  requirements: string[]
  benefits: string[]
  workingHours: string
  holidays: string
  insurances: string[]
  trainingSystem: string
  selectionProcess: string[]
  contactInfo: {
    department: string
    person: string
    email: string
    phone: string
  }
}