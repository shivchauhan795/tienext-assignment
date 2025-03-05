import React from 'react'
import topCircleImage from '../assets/topCircleImage.png'
import Bag from '../icons/bag'
import Location from '../icons/location'
import Person from '../icons/person'
const RightSidebar = () => {
  return (
    <>
      <div className='w-56 rounded-l-2xl h-fit flex flex-col justify-center items-center gap-5 py-5 px-3 mt-3 bg-white'>


        <div className='font-semibold text-xl'>People might know</div>
        <div className='border-2 p-2 border-black bg-gray-200 rounded-2xl'>
          <div className='flex justify-between gap-3 items-center pb-3'>
            <div>
              <img width={60} src={topCircleImage} alt='topCircleImage' />
            </div>
            <div className='flex flex-col gap-1 text-sm font-semibold'>
              <div className='flex gap-1'>
                <Bag size="size-4" />Entrepreneur
              </div>
              <div className='flex gap-1'>
                <Location size="size-4" />Noida, Sect...
              </div>
            </div>
          </div>
          <div className='text-xl flex justify-between gap-9 items-center'>
            <div className='font-semibold'>
              Archi Maze
            </div>
            <div>
              <Person size="size-6" />
            </div>
          </div>
        </div>
        <div className='border-2 p-2 border-black bg-gray-200 rounded-2xl'>
          <div className='flex justify-between gap-3 items-center pb-3'>
            <div>
              <img width={60} src={topCircleImage} alt='topCircleImage' />
            </div>
            <div className='flex flex-col gap-1 text-sm font-semibold'>
              <div className='flex gap-1'>
                <Bag size="size-4" />Entrepreneur
              </div>
              <div className='flex gap-1'>
                <Location size="size-4" />Noida, Sect...
              </div>
            </div>
          </div>
          <div className='text-xl flex justify-between gap-9 items-center'>
            <div className='font-semibold'>
              Archi Maze
            </div>
            <div>
              <Person size="size-6" />
            </div>
          </div>
        </div>
        <div className='border-2 p-2 border-black bg-gray-200 rounded-2xl'>
          <div className='flex justify-between gap-3 items-center pb-3'>
            <div>
              <img width={60} src={topCircleImage} alt='topCircleImage' />
            </div>
            <div className='flex flex-col gap-1 text-sm font-semibold'>
              <div className='flex gap-1'>
                <Bag size="size-4" />Entrepreneur
              </div>
              <div className='flex gap-1'>
                <Location size="size-4" />Noida, Sect...
              </div>
            </div>
          </div>
          <div className='text-xl flex justify-between gap-9 items-center'>
            <div className='font-semibold'>
              Archi Maze
            </div>
            <div>
              <Person size="size-6" />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default RightSidebar
