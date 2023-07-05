import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000/api/todo/"

const initialState = {
  todos: [],
  status: 'idle',
  error: null
}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async (object) => {
  const textInfo = { ...object.text }

  try {
    const res = await fetch(BASE_URL + object.todoId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(textInfo)
    })
    const data = await res.json(textInfo)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const postsSlice = createSlice({
  name: 'todos',
  initialState,
  reducers:{

  },
  extraReducers(builder) {
    builder
      // *********** READ **************
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched todos to the array
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // ******* UPDATE **********
      .addCase(updateTodo.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched todos to the array
        const existingPost = state.todos.find((post) => post._id === action.payload._id)
        if (existingPost) {
          existingPost.title = action.payload.title
          existingPost.description = action.payload.description
        }
        
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllTodos = (state) => state.post.todos

// issue with selecting 
export const selectTodoById = (state, todoId) =>
  state.post.todos.find(todo => todo._id === todoId)

export const { todoUpdate } = postsSlice.actions

export default postsSlice.reducer