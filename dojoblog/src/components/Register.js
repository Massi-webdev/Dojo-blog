import { useState } from "react";

const Register = () => {

    const [form, setForm] = useState({
        firstName:'Massinissa',
        lastName:'Ouiddir',
        email: 'OuiddirMassinissa@gmail.com'
    });

    return ( 
        <>
            <label>
                First name:
                <input value={form.firstName} onChange={ function(e){setForm({...form, firstName:e.target.value
                })}} />
            </label>

            <label>
                Last name:
                <input value={form.lastName} onChange={ function(e){setForm({...form, lastName:e.target.value
                })}} />
            </label>

            <label>
                Email:
                <input value={form.email} onChange={ function(e){setForm({...form, email:e.target.value
                })}} />
            </label>

            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                {form.email}
            </p>
        </>
     );
}
 
export default Register;