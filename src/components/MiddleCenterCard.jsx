import React from 'react'
import Button from './Button'
import midCenter1 from '../assets/midCenter1.svg'
import midCenter2 from '../assets/midCenter2.svg'
import midCenter3 from '../assets/midCenter3.svg'
import midCenter4 from '../assets/midCenter4.svg'
import midCenter5 from '../assets/midCenter5.svg'
import midCenter6 from '../assets/midCenter6.svg'

const MiddleCenterCard = () => {
    return (
        <div className='mt-5'>
            <div className='flex gap-3'>
                <div className='text-2xl font-bold'>Moments</div>
                <div className='bg-black text-white w-fit p-1 rounded-xl px-3 py-1'>
                    <Button text={"Today's"} />
                </div>
                <div className='border w-fit p-1 rounded-xl px-4 py-1'>
                    <Button text={"Saved"} />
                </div>
            </div>
            <div className='flex gap-3 mt-4'>
                <div>
                    <img src={midCenter1} alt='midCenter1' />
                </div>
                <div>
                    <img src={midCenter2} alt='midCenter2' />
                </div>
                <div>
                    <img src={midCenter3} alt='midCenter3' />
                </div>
                <div>
                    <img src={midCenter4} alt='midCenter4' />
                </div>
                <div>
                    <img src={midCenter5} alt='midCenter5' />
                </div>
                <div>
                    <img src={midCenter6} alt='midCenter6' />
                </div>
            </div>
        </div>
    )
}

export default MiddleCenterCard
