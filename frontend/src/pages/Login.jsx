import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleLogin = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className='' onSubmit={handleLogin}>
      <h3 className='text-primary'>Login</h3>
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
      <button disabled={isLoading} className='btn btn-primary'>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default Login