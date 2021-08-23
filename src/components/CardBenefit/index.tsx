import { FC } from 'react'

type Props = {
  icon: JSX.Element
  title: string
  description: string
}

const CardBenefit: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col'>
      {icon}
      <div className='text-gray-900 font-extralight text-xl'>{title}</div>
      <div className='text-gray-700 font-medium'>{description}</div>
    </div>
  )
}

export default CardBenefit
