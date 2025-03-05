import React from 'react'
import Home from '../icons/home'
import Docs from '../icons/docs'
import Chat from '../icons/chat'
import Search from '../icons/search'
import Menu from '../icons/menu'
import Plus from '../icons/plus'
const Sidebar = () => {
  return (
    <>
      <div className='w-44 rounded-r-2xl h-fit flex flex-col gap-5 py-5 px-3 mt-3 bg-white'>
        <div className='flex gap-2 cursor-pointer'>
          <Home size={'size-6'} />
          HomePage
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <Docs size={'size-6'} />
          Requirenments
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <Chat size={'size-6'} />
          Chats
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <Search size={'size-6'} />
          Search
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <Menu size={'size-6'} />
          Setting
        </div>
      </div>
      <div className='w-44 rounded-r-2xl h-fit flex flex-col gap-5 py-5 px-3 mt-3 bg-white'>
        <div className='flex gap-2 cursor-pointer'>
          <Plus size={'size-6'} />
          Create
        </div>
      </div>
    </>
  )
}

export default Sidebar
