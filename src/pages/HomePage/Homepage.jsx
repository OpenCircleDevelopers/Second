import React from 'react'
import './Style.css'
import { Link, useLoaderData } from 'react-router-dom'

const Homepage = () => {
    const data = useLoaderData()
    return (
        <div className='container mb-15'>
            <h1 className='title text-5xl mb-15'>Project Quiz</h1>
            <Link to="/create-quiz" className='mt-10 border px-5 py-3 rounded text-blue-400 active:text-blue-600' >Create New QUIZ</Link>
            <div className='quiz-group rounded'>
                <div className="mx-15 py-5 mt-15">
                    {data.map((question, index) => {
                        return (
                            <div className='flex align-items-center mb-5'>
                                <h1 className='inline my-auto'>{question.title}</h1>
                                <Link to={`/solve-quiz/${question.id}`} className=' ms-auto border px-5 py-3 rounded text-blue-400 active:text-blue-600'>Solve Me</Link >
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

const Loader = async () => {
    const response = await fetch("http://localhost:8000/quiz")
    return response.json()
}

export { Loader }
export default Homepage