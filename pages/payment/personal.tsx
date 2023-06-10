import React from 'react'
import BusinessTabContent from '@/components/payment/business_tab_content'
import PersonalTabContent from '@/components/payment/personal_tab_content'
import { useRouter } from 'next/router'
import TabSection from '@/components/payment/tab_section'

const PersonalPayment = () => {
  const { pathname } = useRouter()
  const personalPathname = ['/payment/personal'].includes(pathname)
  const businessPathname = ['/payment/business'].includes(pathname)
  return (
    <main className="md:p-20 p-5">
      {/* Tab section */}
      <TabSection
        personalPathname={personalPathname}
        businessPathname={businessPathname}
      />
      {/* Tab Content Section */}
      <section className="">
        {/* Personal Tab Content */}
        {personalPathname && <PersonalTabContent />}
        {/* Business Tab Content */}
        {businessPathname && <BusinessTabContent />}
      </section>
    </main>
  )
}

export default PersonalPayment
