import TodoItem from '../features/posts/TodoItem'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { fetchTodos, selectAllTodos } from "../features/posts/postsSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Home() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const dispatch = useDispatch()
  const todos = useSelector(selectAllTodos)

  /* MIGHT HAVE TO USE REDUX-PERSIST */
  // mhttps://redux.js.org/introduction/ecosystem#persistence

  const postStatus = useSelector(state => state.post.status)

  useEffect(() => {
    if (user && postStatus === 'idle') {
      dispatch(fetchTodos(user))
    }
  }, [postStatus, dataFetched])
  
  // useEffect(() => {
  //   if (postStatus === 'idle') {
  //     dispatch(fetchTodos(user))
  //   }
  // }, [postStatus, dispatch])

  const todoItems = todos.map((todo) => {
    return (
      <TodoItem
        key={todo._id}
        todo={todo}
      />
    )
  })

  const handleClick = () => {
    logout()
  }


  
  return (
    <main className="flex flex-col items-center gap-y-20 border-2 border-red-400">
      
      <div className='p-2 flex flex-col gap-y-2'>
        <div className='flex gap-x-2 items-center'>
          <Link 
            to='/'
            className=''
          >
            <h1 className="text-4xl underline">My todo list</h1>
          </Link>
          
          <Link 
            to='add'
            className='btn btn-sm btn-primary'
          >
            Add +
          </Link>
          <a onClick={handleClick} className="link link-accent self-center">Logout</a>
        </div>
        
        <div className='flex justify-center'>
          {user && <h2 className='text-blue-400'>{user.email}</h2>}
        </div>
      </div>

      <section className="flex flex-col items-center gap-y-4 w-full">
        <section>
        </section>
        <section className="flex flex-wrap gap-4">
          {todoItems}
        </section>
      </section>
      <Outlet />  
    </main>
  )
}

export default Home