import BusinessTabContent from '@/components/payment/business_tab_content';
import PersonalTabContent from '@/components/payment/personal_tab_content';
import TabSection from '@/components/payment/tab_section';
import { useRouter } from 'next/router'
import React from 'react'

const BusinessPayment = () => {
  const { pathname } = useRouter()
  const personalPathname = ['/payment/personal'].includes(pathname)
  const businessPathname = ['/payment/business'].includes(pathname)
  return (
    <main className="p-20">
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

export default BusinessPayment
