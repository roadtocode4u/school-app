import React, {useState} from 'react'
import "./AddStudent.css"
import axios from 'axios'

function AddStudent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [age, setAge] = useState('')

  const addStudent = async () => {
    if(!name || !email || !mobile || !age) {
      alert('Please enter all fields')
      return
    }

    const student = {
      name,
      email,
      mobile,
      age
    }

    const response = await axios.post('/student', student);

    alert(response.data.message)

    setName('')
    setEmail('')
    setMobile('')
    setAge('')
  }

  return (
    <div>
      <h1 className='text-center'>Add Student</h1>

      <form className='form-container'>

        <input type='text'
          placeholder='Name'
          className='form-input'
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }} />

        <input type='email'
          placeholder='Email'
          className='form-input'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }} />

        <input type='text'
          placeholder='Mobile'
          className='form-input'
          value={mobile}
          onChange={(e)=>{
            setMobile(e.target.value)
          }} />

        <input type='text'
          placeholder='Age'
          className='form-input'
          value={age}
          onChange={(e)=>{
            setAge(e.target.value)
          }} />

        <button
          type='button'
          className='form-btn'
          onClick={addStudent}
          >
            Add Student
          </button>
      </form>
    </div>
  )
}

export default AddStudent
