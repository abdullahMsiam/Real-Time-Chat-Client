import React, { useState } from 'react';

const LoginPage = () => {
    const [isShow, setShow] = useState(true);


    const clickShow = c => {
        setShow(!isShow)
    }

    const handleLogin = event => {
        event.preventDefault();
        console.log(event);
    }
    return (
        <div>
            <div className="hero bg-neutral-800">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-slate-950">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-xl">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered bg-slate-700" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-xl">Password</span>
                                </label>
                                {/* show button */}
                                <div className='input-group w-full '>
                                    <input type={isShow ? `password` : `text`} name='password' placeholder="password" className="input w-full input-bordered bg-slate-700" required />
                                    <button className="btn font-mono bg-slate-900 text-white border-none hover:bg-slate-700" onClick={clickShow}>
                                        {
                                            isShow ? `Show` : `Hide`
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <input type="submit" className="text-white btn btn-block bg-neutral-900 hover:bg-slate-700" value="Login" />
                            </div>
                            <div className='mt-3'>
                                <input type="submit" className="text-white btn btn-block bg-neutral-900 hover:bg-slate-700" value="Guest" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;