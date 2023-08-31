import TodoItem from '../features/posts/TodoItem'
import React, { useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import { fetchTodos, selectAllTodos } from "../features/posts/postsSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useLogout } from '../hooks/useLogout'



function Index() {
  return (
    <div className='h-full flex'>
      <div className='m-auto flex flex-col gap-y-4'>
        <h1 className='text-xl font-semibold'>mern-template-auth</h1>
        <div className='flex justify-center gap-x-4 text-lg'>
          <Link to='/login'>
            <h2 className='link link-primary'>Log in</h2>
          </Link>
          <span>or</span>
          <Link to='/signup'>
            <h2 className='link link-primary'>Sign up</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index