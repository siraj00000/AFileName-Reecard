import { useRouter } from 'next/router'
import React from 'react'

type TabbarProps = {
  personalPathname: boolean
  businessPathname: boolean
}

const TabSection: React.FC<TabbarProps> = ({
  personalPathname,
  businessPathname,
}) => {
  const router = useRouter()

  // move to personal tab
  const moveToPersonalTab = () => router.push('/payment/personal')
  // move to business tab
  const moveToBusinessTab = () => router.push('/payment/business')
  return (
    <section
      className={`flex items-center justify-center ${
        businessPathname && 'flex-row-reverse'
      }`}
    >
      <button
        className={`${
          personalPathname
            ? 'text-primary border-primary border-r rounded-l-md'
            : 'text-black border-secondary border-l rounded-r-md'
        } p-2 px-5 border-2 leading-5 font-semibold`}
        onClick={moveToPersonalTab}
      >
        Personal
      </button>
      <button
        className={`${
          businessPathname
            ? 'text-primary border-primary border-r rounded-l-md'
            : 'text-black border-secondary border-l rounded-r-md'
        } p-2 px-5 border-2  leading-5 font-semibold`}
        onClick={moveToBusinessTab}
      >
        Business
      </button>
    </section>
  )
}

export default TabSection
