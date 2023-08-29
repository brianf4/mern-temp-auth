import { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email, password)

  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <h3 className='text-primary'>Sign up</h3>
      <div className='flex flex-col'>
      <label>Email:</label>
      <input 
        className='input w-full max-w-xs border-2 border-gray-200'
        type="email" 
        placeholder="Type here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input 
        className='input w-full max-w-xs border-2 border-gray-200'
        type="password" 
        placeholder="Type here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      </div>
      <button className='btn btn-primary'>Sign up</button>
    </form>
  )
}
export default Signup