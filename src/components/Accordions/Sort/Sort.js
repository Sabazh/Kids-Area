import { useState } from 'react'

const Sort = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    };

  return (
    <div>
        <div className='flex gap-8-0 w-25-6 font-fB text-2-0 uppercase pl-1-0 py-1-7 border-solid border-0-1 border-black/50 rounded-1-0'>
            <p>სორტირება</p>
            <button onClick={openHandler}><img src={!open ? '/svg/angle-down-small.svg' : '/svg/angle-up-small.svg'}/></button>
        </div>
        {open && (
            <div className='flex flex-col gap-2-0 mt-1-0 p-1-2 w-25-6 font-fB text-2-0 border-solid border-0-1 border-black/50 rounded-1-0 absolute bg-white z-10 cursor-pointer'>
                <p>ახალი დამატებული</p>
                <p>საუკეთესო შეთავაზება</p>
                <p>ფასი ქვემოდან ზემოთ</p>
                <p>ფასი ზემოდან ქვემოთ</p>
            </div>
        )}
    </div>
  )
}

export default Sort