import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Dashboard(){
  const [profile,setProfile]=useState(null)
  const [recs,setRecs]=useState([])

  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get('http://localhost:8000/api/users/me',{headers:{Authorization:`Bearer ${token}`}})
      .then(r=>setProfile(r.data))
    axios.get('http://localhost:8000/api/recommendations/1')
      .then(r=>setRecs(r.data.recommendations))
  },[])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div>
            <a href="/profile" className="mr-4">Profile</a>
            <button onClick={()=>{localStorage.removeItem('token');window.location.href='/login'}}>Sign out</button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded shadow"> 
            <h2 className="text-lg font-semibold">Welcome</h2>
            <p className="mt-2">{profile ? `Hello ${profile.name}` : 'Loading...'}</p>
            <div className="mt-4">
              <h3 className="font-medium">Skill Radar (sample)</h3>
              <div className="h-40 bg-slate-100 rounded mt-2 flex items-center justify-center">Radar chart placeholder</div>
            </div>
          </div>
          <aside className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Recommended Courses</h3>
            <ul className="mt-3 space-y-2">
              {recs.length? recs.map((r,i)=>(<li key={i} className="p-2 border rounded">{r.title}</li>)) : <li className="text-sm text-slate-500">Loading...</li>}
            </ul>
          </aside>
        </section>
      </div>
    </div>
  )
}
