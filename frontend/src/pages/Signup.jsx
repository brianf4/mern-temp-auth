import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)

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
      <button disabled={isLoading} className='btn btn-primary'>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default Signup