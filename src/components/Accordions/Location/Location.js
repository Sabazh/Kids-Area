import { useState } from 'react'

const Location = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    };

  return (
    <div>
        <div className='flex justify-between pl-11-0 w-35-0 font-fB text-2-4 uppercase px-1-0 py-1-7 border-solid border-0-1 border-black/30 rounded-1-0'>
            <p className='ml-2-6'>უბანი</p>
            <button onClick={openHandler}><img src={!open ? '/svg/angle-down-small.svg' : '/svg/angle-up-small.svg'}/></button>
        </div>
        {open && (
            <div className='flex flex-col text-center w-35-0 mt-1-0 font-fB text-2-4 border-solid border-0-1 border-black/30 rounded-1-0'>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>დიღომი</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>ვაკე</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>დიდუბე</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>მთაწმინდა</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>საბურთალო</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>გლდანი</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>კრწანისი</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>ნაძალადევი</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>ისანი</p>
                <p className='border-b-0-1 border-black/30 py-2-0 hover:text-blue-02'>სამგორი</p>
                <p className='py-2-0 hover:text-blue-02'>ვარკეთილი</p>
            </div>
        )}
    </div>
  )
}

export default Location