import React, { useState } from 'react';

const SignUpPage = () => {
    const [isShow, setShow] = useState(true);


    const clickShow = e => {
        e.preventDefault();
        setShow(!isShow)
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const pic = form.pic.value;
        console.log(email, name, password, pic);
    }
    return (
        <div>
            <div className="hero bg-neutral-800">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-slate-950">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-xl">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered bg-slate-700" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-xl">Upload Image</span>
                                </label>
                                <input type="file" name='pic' className="file-input bg-slate-700 file-input-bordered file-input-md w-full " required />
                            </div>
                            <div className='mt-3'>
                                <input type="submit" className="text-white btn btn-block bg-neutral-900 hover:bg-slate-700" value="Sign Up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;