import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Profile(){
  const [profile,setProfile]=useState(null)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get('http://localhost:8000/api/users/me',{headers:{Authorization:`Bearer ${token}`}})
      .then(r=>setProfile(r.data))
  },[])

  if(!profile) return <div className="p-6">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="mt-4">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      </div>
    </div>
  )
}
