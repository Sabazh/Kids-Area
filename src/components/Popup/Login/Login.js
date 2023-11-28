import { AppContext } from '@/context/AppContext'
import { useContext, useState } from 'react'

const MAIL = 'salome'
const PASSWORD = '123'

const Login = () => {
  const { loginHandler, isLoggedInHandler } = useContext(AppContext);
  const [form, setForm] = useState({
    mail: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (form.mail === MAIL && form.password === PASSWORD) {
      isLoggedInHandler();
      loginHandler(false);
    } else {
      setError(true);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='overflow-auto sm:flex w-39-0 sm:w-full h-full px-0-2 fixed top-0 left-0 bg-white sm:bg-white/[0.9] justify-center z-20'>
      <div className='max-w-[90rem] w-full h-45-0 bg-white rounded-1-0 px-1-0 sm:px-3-7 py-2-0 relative mt-0-5 sm:mt-21-0 border-solid border-0-1 border-black'>
        <button className='absolute top-2-0 right-2-0' onClick={() => loginHandler(false)}>
          <img src='/svg/close.svg' alt='X'className='w-3-0'/>
        </button>
        <div className='sm:pl-1-8 sm:pt-2-0'>
          <h1 className='font-fB text-2-6 sm:text-4-8 uppercase'>ავტორიცაზია</h1>
          <form onSubmit={handleLogin}>
            <div className='grid gap-2-0 mt-2-0 sm:w-46-0'>
              <input 
                  value={form.mail} 
                  name='mail' 
                  placeholder='ელფოსტა' 
                  onChange={onChange}
                  className='w-full h-6-0 pl-1-0 sm:pl-2-2 border-solid border-0-1 border-black rounded-1-2 text-3-0 font-fR outline-none'
              />
              <div className='flex pr-0-5 border-solid border-0-1 border-black rounded-1-2'>
                <input 
                  value={form.password} 
                  type={passwordVisible ? 'text' : 'password'} 
                  name='password'
                  placeholder='პაროლი' 
                  onChange={onChange}
                  className='w-full sm:w-41-0 h-6-0 pl-1-0 sm:pl-2-2 text-3-0 font-fR rounded-1-2 outline-none'
                />
                <button onClick={togglePasswordVisibility}><img src='/svg/eye.svg'/></button>
              </div>
              <button className='flex justify-end font-fR text-1-6 uppercase'>პაროლის აღდგენა</button>
            </div>
            <div className='h-2-0'>
              {error && <button className='font-fB text-1-4 text-rose-600 mt-1-5'>Password or Email is not correct</button>}
            </div>
            <div className='flex justify-end'>
              <button className='mt-9-0 sm:mt-3-0 px-5-0 py-1-0 bg-blue-02 font-fR uppercase text-2-5 rounded-1-2 text-white'>შესვლა</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;