import React, {useState} from 'react'
import axios from 'axios'

export default function Login(){
  const [email,setEmail]=useState('user@example.com')
  const [password,setPassword]=useState('password')
  const [error,setError]=useState('')

  async function submit(e){
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:8000/api/auth/login',{email,password})
      localStorage.setItem('token', res.data.access_token)
      window.location.href = '/dashboard'
    }catch(err){
      setError('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={submit}>
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        <label className="block text-sm">Email</label>
        <input className="w-full border p-2 rounded mb-3" value={email} onChange={e=>setEmail(e.target.value)} />
        <label className="block text-sm">Password</label>
        <input type="password" className="w-full border p-2 rounded mb-3" value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button className="w-full bg-sky-600 text-white py-2 rounded">Sign in</button>
      </form>
    </div>
  )
}
