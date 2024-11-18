'use client'

// import { usePathname } from 'next/navigation'

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params
  // const pathName = usePathname()

  return (
    <div>{id}</div>
  )
}

export default page