import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
  const [students, setStudents] = useState([])

  const loadStudents = async () =>{
    const response = await axios.get("/students")
    setStudents(response?.data?.data)
  }

  useEffect(()=>{
    loadStudents();
  }, [])

  return (
    <div>
      <h1 className='text-center'>All Students</h1>

      {
        students?.map((student, index) => {
          const {name, email, age, mobile} = student

          return (
           <div key={index} className='student-card'>
              <h3>{name} ({age} years old)</h3>
              <p>✉️ {email}, 📞 {mobile}</p>
           </div>
          )
        })
      }

    </div>
  )
}

export default Home
