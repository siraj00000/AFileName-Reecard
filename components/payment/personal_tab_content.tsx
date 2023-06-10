import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
type OfferCardProps = {
  title: string
  price: string
  planTitle: string
  billingDuration: string
  offerIncludes: Array<string>
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  price,
  planTitle,
  billingDuration,
  offerIncludes,
}) => (
  <aside className="xl:w-[380px] md:w-full rounded-xl shadow-2xl">
    <div className="p-6 border-b-2 border-[#EBEFF2]">
      <h1 className="text-md text-black font-semibold">{title}</h1>
    </div>

    <div className="flex flex-col text-center p-5 pb-14">
      <h1 className="text-4xl text-black font-manrope font-bold">{price}</h1>
      <h5 className="text-[14px] text-black my-1">{billingDuration}</h5>
      <div className="text-left mt-3 w-full pl-10 mx-auto h-[300px]">
        <h5 className="text-md tracking-wider text-black font-medium">{planTitle}</h5>
        <ul className='flex flex-col gap-1 mt-2'>
          {offerIncludes.map((i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckBoxIcon className=" text-primary !important" />
              <span className="text-md">{i}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-[#0066FF] font-medium capitalize text-white text-[14px] px-7 py-2 rounded-full mx-auto">
        Buy now
      </button>
    </div>
  </aside>
)

const PersonalTabContent = () => {
  return (
    <div className="flex flex-col items-center py-12 font-manrope">
      <h1 className="text-4xl font-semibold">Personal Plans</h1>
      <h5 className="text-2xl font-semibold">For personal use only</h5>
      <div className="flex items-center flex-wrap md:flex-col gap-10 mt-10">
        <OfferCard
          title="Premium"
          price="$2.99"
          billingDuration="Billed Monthly"
          planTitle="The Premium Plan includes"
          offerIncludes={[
            '5GB Max Per Each File',
            'Unlimited Files',
            'Unlimited Storage',
            'Save files in the cloud',
          ]}
        />
        <OfferCard
          title="Premium Pro"
          price="$4.99"
          billingDuration="Billed Monthly"
          planTitle="The Premium Plan includes"
          offerIncludes={[
            '5GB Max Per Each File',
            'Multi Part Files',
            `End to end encryption (on the desktop application)`,
            'Unlimited Storage',
            'Save files in the cloud',
            'API Access',
          ]}
        />
      </div>
    </div>
  )
}

export default PersonalTabContent
