'use client'

import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

function page() {
  const {push} = useRouter();
  function handleAdd () {
    push("/add")
  }
  function handleUpdate () {
    push("/edit/043045623446340");
  }
  return (
    <>
    <div className='w-[100%] flex justify-center items-center'> {/* Parent container */ }
      <main className='mt-4 max-w-[1160px] w-[100%] border-2 border-black rounded-2xl p-2'> {/* Main container */ }
      <header className='w-[100%] flex justify-around items-center bg-black p-2'>
        <h1 className='text-3xl font-bold text-white'>TODO LIST</h1>
        <button onClick={handleAdd} className='bg-blue-500 hover:cursor-pointer font-[500] rounded-[0.3rem] hover:bg-blue-400 text-white flex p-1 items-center w-[6rem] justify-around text-[1rem]'>
          Add <FaPlus/>
        </button>
      </header>
        <div className='w-[100%]  mt-1.5 relative rounded-[0.5rem] p-3 flex bg-emerald-600'> {/* Todo container */}
          <div className='text-white'>
            <h2 className=' capitalize text-4xl font-[500]'>Title</h2>
            <p className='text-2xl '>Description</p>
          </div>
          <div className='flex text-[1rem] capitalize text-white absolute top-1 right-1 '>
            <button onClick={handleUpdate} className='hover:cursor-pointer capitalize hover:border-[1px] border-white p-1 flex font-bold gap-0.5'>
              edit
            <FaPen className='text-black text-[1.25rem]'/>
            </button>
            <button className='hover:cursor-pointer hover:border-[1px] capitalize gap-1.5 border-white p-1 flex font-bold gap-0.5'>
              delete
            <MdDelete className='text-red-600 text-2xl'/>
            </button>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default page