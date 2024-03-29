import React from 'react'
import SearchInput from './SearchInput'
SearchInput
import Conversations from './Conversations'
import LogoutButton from './Logout'
const Sidebar = () => {
  return (
    <div>
      <div className='border-slate-500 p-6 flex flex-col mb-0'>
      <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <div className='mt-2'>
        <LogoutButton/>
        </div>
        

      </div>
       
    </div>
  )
}

export default Sidebar