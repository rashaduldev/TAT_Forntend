import { useState } from 'react'
import Calender from '../Calender/Calender'
import Button from '../../Button/Button'
import { formatDistance } from 'date-fns'

const RoomReservation = ({ room }) => {
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection',
  })

  const handleSelect = ranges => {
    setValue({ ...value })
  }
  console.log(value);

  // const totalDays=parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
  // console.log(totalDays);
  // // Total Prices
  // const totalPrices=totalDays*room?.price;
  // console.log(totalPrices);

  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {room?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        <Calender handleSelect={handleSelect} value={value} />
      </div>

      <hr />
      <div className='p-4'>
        <Button label='Reserve' />
      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {room?.price}</div>
      </div>
    </div>
  )
}

export default RoomReservation
