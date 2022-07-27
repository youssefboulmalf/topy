import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 
import { useState } from 'react';

type LoginMail = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const [authenticationFail, setAuthenticationFail] = useState(false)

  const onSubmit = async (data: LoginMail) => {
    postData(`${server}/api/login`, {
      email: data.email,
      password: data.password
    }).then(r=>{
      console.log(register, r)
      window.location.replace("/")
    }).catch(e=>{
      console.log('e', e)
      setAuthenticationFail(true)
    })
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Admin log in</h2>
            {/* <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="Username" 
                  type="text" 
                  name="email"
                  ref={register({
                    required: true,

                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
                {authenticationFail? <p className="message message--error">Invalid credentials</p> : null}
              </div>


              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  