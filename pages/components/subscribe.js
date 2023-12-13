import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';


const Subscribe = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {}
    const handleSubmit = (e) => {}

    return(
        <div>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-4'
              >
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Escribí tu nombre aquí'
                  className='py-1 px-4 rounded-lg outlined-none border-none'
                  />
                <div className='email-input-container'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Escribí tu correo aquí'
                  className='py-1 px-4 pl-9 rounded-lg outlined-none border-none'
                  >
                  </input>
                </div>
                <button
                  type='submit'
                  className='bg-red-600 hover:bg-purple-900 rounded-lg py-1 px-[5px] max-w-[60%] self-center'
                  >
                    {loading ? 'Enviando...' : 'Suscribirme'}
                  </button>
            </form>
        </div>
    )
}

export default Subscribe