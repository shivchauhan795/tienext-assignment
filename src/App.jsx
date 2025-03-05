import './App.css'
import Button from './components/Button'
import MiddleCenterCard from './components/MiddleCenterCard'
import BottomCenterCard from './components/BottomCenterCard'
import Navbar from './components/Navbar'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'
import TopCenterCard from './components/TopCenterCard'
import LeftArrow from './icons/leftArrow'
function App() {

  return (
    <div className='bg-gray-100 h-screen flex justify-center overflow-scroll'>
      <div className='fixed top-0 w-screen'>

        <Navbar />
      </div>
      <div className='fixed top-20 left-0'>
        <Sidebar />
      </div>
      <div className='fixed top-20 left-90 border py-2 bg-black text-white rounded-xl'>
        <Button text={"Go Back"} startIcon={<LeftArrow size={'size-5'} />} />
      </div>
      <div className='fixed top-10 w-fit overflow-auto'>
        <TopCenterCard />
        <MiddleCenterCard />
        <BottomCenterCard/>
      </div>
      <div className='right-0 fixed top-25'>
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
