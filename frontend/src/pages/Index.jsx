import TodoItem from '../features/posts/TodoItem'
import React, { useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import { fetchTodos, selectAllTodos } from "../features/posts/postsSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useLogout } from '../hooks/useLogout'

function Index() {
  return (
    <h1>Index</h1>
  )
}

export default Index