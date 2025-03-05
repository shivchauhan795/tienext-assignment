import React, { useState } from 'react'
import Tick from '../icons/tick'
import Plus from '../icons/plus'
import topCircleImage from '../assets/topCircleImage.png'
import Location from '../icons/location'
import Bag from '../icons/bag'
import Calender from '../icons/calender'
import navigate from '../assets/navigate.svg'
import Button from './Button'
import bottomActivitiesImage from '../assets/bottomActivitiesImage.svg'
const BottomCenterCard = () => {
  const [activeTab, setActiveTab] = useState("requirements"); // Default to 'requirements'
  return (
    <>
      {/* 1st */}
      {activeTab === "about" &&
        <div className='mt-5 w-[420px] bg-white rounded-3xl p-3'>
          <div className='flex gap-2 font-semibold text-xl items-center'>
            <Tick size={'size-6'} />
            <div>
              Experiences
            </div>
            <div>
              <Plus size={'size-6'} />
            </div>
          </div>
          <div>
            <div className='mt-4'>
              <div className='flex gap-2 items-center ml-2'>
                <div className='rounded-full bg-[#39D2C0] p-2 h-fit w-fit'></div>
                <div className='font-semibold'>Mar 1, 2022 -{'>'} Mar 1, 2024</div>
              </div>
              <div className='p-4'>
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </div>
            </div>
            <div className='mt-4'>
              <div className='flex gap-2 items-center ml-2'>
                <div className='rounded-full bg-[#39D2C0] p-2 h-fit w-fit'></div>
                <div className='font-semibold'>Mar 1, 2022 -{'>'} Mar 1, 2024</div>
              </div>
              <div className='p-4'>
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </div>
            </div>
          </div>
        </div>
      }
      {/* 2nd */}
      {activeTab === "requirements" &&
        <div className='mt-5 w-[420px] bg-white rounded-3xl p-3 flex flex-col gap-2'>
          <div className='border-2 border-gray-300 p-3 rounded-2xl flex flex-col gap-3'>
            <div className='flex gap-2 justify-center items-center'>
              <div><img width={50} src={topCircleImage} alt='topCircleImage' /></div>
              <div>
                <div className='font-semibold text-sm'>
                  Searching for a cinematographer in urgent basis!!
                </div>
                <div className='font-normal text-xs'>
                  Posted by Archi
                </div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='flex gap-2 justify-center items-center text-xs'>
                <Location size={'size-5'} />
                Noida, Sector-18....
              </div>
              <div className='flex gap-2 justify-center items-center text-xs'>
                <Bag size={'size-5'} />
                Cinematographer
              </div>
              <div className='flex gap-2 justify-center items-center text-xs'>
                <Calender size={'size-5'} />
                25/11/24
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <div className='px-2 py-1 bg-gray-200 rounded-lg text-gray-500 w-fit text-xs flex justify-center items-center'>Applied</div>
                <div className='px-2 py-1 bg-gray-200 rounded-lg text-gray-500 w-fit text-xs flex justify-center items-center'>Fulfilled</div>
              </div>
              <div className='flex gap-2'>
                <div className='border px-2 py-1 w-fit rounded-lg'>
                  <img src={navigate} alt='navigate' />
                </div>
                <div className='bg-[#39D2C0] text-white w-fit rounded-lg text-md flex justify-center items-center pl-1 py-1'>
                  <Button text={"View"} />
                </div>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-300 p-3 rounded-2xl flex flex-col gap-3'>
            <div className='flex gap-2 justify-center items-center'>
              <div><img width={50} src={topCircleImage} alt='topCircleImage' /></div>
              <div>
                <div className='font-semibold text-sm'>
                  Searching for a cinematographer in urgent basis!!
                </div>
                <div className='font-normal text-xs'>
                  Posted by Archi
                </div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='flex gap-2 justify-center items-center text-xs'>
                <Location size={'size-5'} />
                Noida, Sector-18....
              </div>
              <div className='flex gap-2 justify-center items-center text-xs'>
                <Bag size={'size-5'} />
                Cinematographer
              </div>
              <div className='flex gap-2 justify-center items-center text-xs'>
                <Calender size={'size-5'} />
                25/11/24
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <div className='px-2 py-1 bg-gray-200 rounded-lg text-gray-500 w-fit text-xs flex justify-center items-center'>Applied</div>
                <div className='px-2 py-1 bg-gray-200 rounded-lg text-gray-500 w-fit text-xs flex justify-center items-center'>Fulfilled</div>
              </div>
              <div className='flex gap-2'>
                <div className='border px-2 py-1 w-fit rounded-lg'>
                  <img src={navigate} alt='navigate' />
                </div>
                <div className='bg-[#39D2C0] text-white w-fit rounded-lg text-md flex justify-center items-center pl-1 py-1'>
                  <Button text={"View"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {/* 3rd */}
      {activeTab === "activities" &&
        <div className='mt-5 w-[420px] bg-white rounded-t-3xl p-3 flex flex-col gap-2'>
          <div className='flex gap-2 items-center'>
            <div>
              <img width={50} src={topCircleImage} alt='topCircleImage' />
            </div>
            <div className='flex flex-col'>
              <div className='font-semibold'>Christopher Nolan</div>
              <div className='font-normal'>just a moment ago</div>
            </div>
          </div>
          <div className='font-light text-xs px-1'>
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
          <div>
            <img src={bottomActivitiesImage} alt='bottomActivitiesImage' />
          </div>
        </div>
      }

      <div className='flex flex-col gap-2 fixed bottom-12 right-[500px]'>
        <button
          onClick={() => setActiveTab("activities")}
          className={`border w-fit p-2 rounded-xl text-lg ${activeTab === "activities" ? "bg-black text-white" : ""}`}
        >
          Activities
        </button>
        <button
          onClick={() => setActiveTab("requirements")}
          className={`border w-fit p-2 rounded-xl text-lg ${activeTab === "requirements" ? "bg-black text-white" : ""}`}
        >
          Requirements
        </button>
        <button
          onClick={() => setActiveTab("about")}
          className={`border w-fit p-2 rounded-xl text-lg ${activeTab === "about" ? "bg-black text-white" : ""}`}
        >
          About
        </button>
      </div>
    </>
  )
}

export default BottomCenterCard
