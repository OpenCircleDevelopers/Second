import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import FormState from './context/FormState'
import MainLayout from './layout/MainLayout'
import Homepage, { Loader } from './pages/HomePage/Homepage'
import CreateQuiz from './pages/CreateQuiz'



const App = () => {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />} loader={Loader}/>
        <Route path="/create-quiz" element={<CreateQuiz />} />
      </Route>
      )
  )


  return (
    <FormState>
      <RouterProvider router={Router} />
    </FormState>
  )
}

export default App