import { FC } from 'react'

type Props = {
  icon: JSX.Element
  title: string
  description: string
}

const CardStatistic: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {icon}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  )
}

export default CardStatistic
