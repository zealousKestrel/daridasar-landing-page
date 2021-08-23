import { FC } from 'react'
import Image from 'next/image'

type Props = {
  img: string | JSX.Element
  title: string
  author: string
  price: string
}

const Card: FC<Props> = ({ img, title, author, price }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-md bg-white'>
      <div className='w-full h-48'>
        <Image
          src={img}
          alt={title}
          height='220'
          width='460'
          // layout='responsive'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='py-8 px-4'>
        <div className='font-bold'>{title}</div>
        <div className='text-sm text-gray-400'>{author}</div>
        <div className='mt-4 text-sm font-bold'>{price}</div>
      </div>
    </div>
  )
}

export default Card
