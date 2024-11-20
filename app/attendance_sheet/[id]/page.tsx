'use client'

// import { usePathname } from 'next/navigation'

const Course = ({ params }: { params: { id: string } }) => {
  const { id } = params
  // const pathName = usePathname()

  return (
    <div>{id}</div>
  )
}

export default Course