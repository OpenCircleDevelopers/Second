import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='container'>
            <h1 className='title text-5xl mb-15'>Project Quiz</h1>
            <Link to="/create-quiz" className='mt-10 border px-5 py-3 rounded text-blue-400 active:text-blue-600' >Create New QUIZ</Link>
            <div className='quiz-group rounded'>
                <div className="mx-15 py-5 mt-15">
                    <div className='flex align-items-center'>
                        <h1 className='inline my-auto'>heading1</h1>
                        <Link to={`/solve-quiz/`} className=' ms-auto border px-5 py-3 rounded text-blue-400 active:text-blue-600'>Solve Me</Link >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage