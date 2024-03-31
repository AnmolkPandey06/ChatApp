import React from 'react'
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import  {useSignup } from '../../hooks/useSignup';
import Heading from '../../components/Heading';
import google from '../../assets/google.png'
const SignUppage = () => {

	const {loading,signup}=useSignup();
    const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
		gender: "",
	});

    const handleCheckBoxChange=async(gender)=>{
		setInputs({...inputs,gender})
		
	}

	const handleSubmit=async(e)=>{
		e.preventDefault();
		console.log(inputs);
		await signup(inputs);
	}


	return (
		<div className=''>
			<Heading/>
			<div className='flex flex-col items-center justify-center mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> RapidChatter</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-lg font-semibold text-white' >Username</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' 
						onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-lg font-semibold text-white'>Email</span>
						</label>
						<input type='email' placeholder='johndoe@gmail.com' className='w-full input input-bordered h-10'
						onChange={(e)=>setInputs({...inputs,email:e.target.value})}/> 
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-lg font-semibold text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

					<Link to="/login" className='text-l hover:underline hover:text-blue-400 mt-2 text-gray-200 font-semibold inline-block'>
         Have Account ? Login then 
        </Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border bg-sky-500 hover:bg-blue-600 font-semibold text-white text-xl border-slate-700'
						
						disabled={loading}>
						
						{loading?<span className="loading loading-spinner"></span>:"Sign Up"}
						
						</button>
					</div>

				</form>
				
			</div>
		</div>
		</div>
		
	);
};
export default SignUppage;



// <div>
// 						<button className='btn flex items-center justify-center btn-block btn-sm mt-2  hover:bg-red-600 border border-slate-700 bg-red-500'
// 						disabled={loading}>
						
// 						{loading?<span className="loading loading-spinner"></span>:<div className='flex items-center'><img className='w-8 h-8 ' src={google} alt="" /><span className='text-white font-semibold text-lg'>SignUp By Google</span>
// 						</div>}
						
// 						</button>
// 					</div>