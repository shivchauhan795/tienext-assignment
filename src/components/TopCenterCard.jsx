import React from 'react'
import DownCircleArrow from '../icons/downCircleArrow'
import topCircleImage from '../assets/topCircleImage.png'
import Bag from '../icons/bag'
import Location from '../icons/location'
import Button from '../components/Button'
import Edit from '../icons/edit'
import RightArrow from '../icons/rightArrow'
const TopCenterCard = () => {
    return (
        <>
            <div className='w-[420px] rounded-t-2xl h-64 flex flex-col bgimage'>
                <div className='flex justify-between p-4'>
                    <div>
                        <img src={topCircleImage} alt='topCircleImage' />
                    </div>
                    <div className='flex justify-evenly items-center gap-2'>
                        <div className='flex flex-col justify-center items-center w-fit h-fit px-3 py-1 rounded-2xl bg-[#EEF4FF]'>
                            <div className='font-bold'>100K</div>
                            <div>Following</div>
                        </div>
                        <div className='flex flex-col justify-center items-center w-fit h-fit px-3 py-1 rounded-2xl bg-[#EEF4FF]'>
                            <div className='font-bold'>100K</div>
                            <div>Followers</div>
                        </div>
                        <div className='w-fit h-fit rounded-2xl p-2 bg-[#EEF4FF]'>
                            <DownCircleArrow size={'size-6'} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-end'>

                    <div className='flex flex-col gap-1 p-4'>

                        <div className='text-white font-sm'>
                            Cristopher Nolen
                        </div>
                        <div className='text-red-600 font-xs'>
                            @cristopher_23
                        </div>
                        <div className='text-white flex gap-2 font-sm'>
                            <Bag size={'size-6'} />
                            Entrepreneur
                        </div>
                        <div className='text-white flex gap-2 font-sm'>
                            <Location size={'size-6'} />
                            Noida, Sector-18....
                        </div>
                    </div>
                    <div className='bg-black w-fit text-white p-2 mb-4 mr-2 border rounded-xl'>
                        <Button text={'Edit Profile'} startIcon={<Edit size={'size-6'} />} />
                    </div>
                </div>
            </div>
            <div className='w-[420px] rounded-b-2xl h-16 flex flex-col justify-center bg-white'>
                <div className='flex justify-between items-center w-fit rounded-full ml-2 p-3 bg-[#E7EDF2]'>
                    <div className='flex flex-col'>
                        <div className='font-light text-xs'>Attached link</div>
                        <div className='font-semibold text-xs'>http://muziplex.com/re...</div>
                    </div>
                    <div>
                        <RightArrow size={'size-6'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCenterCard
