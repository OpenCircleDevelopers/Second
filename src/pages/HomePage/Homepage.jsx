import React, {useContext} from 'react'
import './Style.css'
import { Link, useLoaderData } from 'react-router-dom'
import FormState from '../../context/FormState'

const Homepage = () => {
    const data = useLoaderData()
    const FormData = useContext(FormState)
    return (
        <div className='container mb-15'>
            <h1 className='title text-5xl mb-15'>Project Quiz</h1>
            <Link to="/create-quiz" className='mt-10 border px-5 py-3 rounded text-blue-400 active:text-blue-600' >Create New QUIZ</Link>
            <div className='quiz-group bg-primary rounded'>
                <div className="lg:mx-25 md:mx-15 mx-5 mt-15 py-5">
                    {data.map((question) => {
                        return (
                            <div className='flex align-items-center mb-5'>
                                <h1 className='inline my-auto'>{question.title}</h1>
                                <Link to={`/solve-quiz/${question.id}`} className=' ms-auto border md:px-5 px-3 md:py-3 py-1 rounded text-blue-400 active:text-blue-600'>Solve Me</Link >
                            </div>
                        )
                    })}

                </div>
            </div>
            <h1>{FormData.name}</h1>
        </div>
    )
}

const Loader = async () => {
    const response = await fetch("http://localhost:8000/quiz")
    return response.json()
}

export { Loader }
export default Homepage