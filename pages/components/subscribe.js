import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

// template_huvytlz
// service_eeaz1ie
// ryvK7pl1EHrprowrV
//kzD1•••••••••••••••••


const Subscribe = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({...form, [name]: value})

    }
    const handleSubmit = (e) => {
        e.preventDfault();
        setLoading(true);

        emailjs.send('service_eeaz1ie', 
            'template_huvytlz',
            {
                from_name: form.name,
                to_name: 'Aquelarre',
                from_email: form.email,
                to_email: 'andres@mainlydigitalworks.com',
                message: 'Un nuevo suscriptor!',
            },
            'ryvK7pl1EHrprowrV',
            )
            .then(() =>{
                setLoading(false);
                alert('Gracias por suscribirte!');
                setForm({
                    name: '',
                    email: '',
                })
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert('Algo ha salido mal.')
            })
    }

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
                  className='py-1 px-4 rounded-lg outlined-none border-none text-black'
                  />
                <div className='email-input-container'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Escribí tu correo aquí'
                  className='py-1 px-4 pl-9 rounded-lg outlined-none border-none text-black'
                  >
                  </input>
                </div>
                <button
                  type='submit'
                  className='bg-red-600 hover:bg-purple-900 rounded-lg py-1 px-[8px] max-w-[60%] self-center'
                  >
                    {loading ? 'Enviando...' : 'Suscribirme'}
                  </button>
            </form>
        </div>
    )
}

export default Subscribe