import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa"
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';



const CreateQuiz = () => {

    const [quizQuestion, setQuizQuestion] = useState([])
    const [quizType,setQuizType] = useState('radio')

    const addQuestion = () => {
        const questionDemo = {
            type: "text",
            placeholder: 'please input your question here',
        }
        setQuizQuestion([...quizQuestion, questionDemo])
    }

    const changeHandler = (e) => {
        setQuizType(e.target.value)
    }
    return (
        <div className='bg-primary w-80 mx-auto mt-15'>
            <Link to="/" className='inline-block m-4'><FaArrowLeft /></Link>
            <div className='form'>
                <input type="text" name="quiz-title" placeholder='Input your title here' />
                <br />
                <textarea name="quiz-description" placeholder="input quiz description here"></textarea>
                <br />
                <input type="number" name="quiz-marks" placeholder='input full marks of quiz' />
                <br />
                <input type="number" name="quiz-time" placeholder='input time of quiz' />
                <br />
                <div className='flex'>
                    <h3 className='inline'>Questions: </h3>
                    <button className='ml-auto border p-1' onClick={addQuestion}><FaPlus /></button>
                </div>
                {quizQuestion.map((quiz, index) => {
                    return (
                        <div key={index} className='mt-5'>
                            <input type={quiz.type} name="quiz-question" placeholder={quiz.placeholder} />
                            <select name="option-type" className='border ml-2 rounded' value={quizType} onChange={changeHandler}>
                                <option value="radio">radio</option>
                                <option value="checkbox">checkbox</option>
                                <option value="text">text</option>
                            </select>
                            <div className='mt-5'>
                                <input type={quizType} name="quiz-option1" placeholder={quiz.option1} />
                                <input type={quizType} name="quiz-option2" placeholder={quiz.option2} />
                                <input type={quizType} name="quiz-option3" placeholder={quiz.option3} />
                                <input type={quizType} name="quiz-option4" placeholder={quiz.option4} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CreateQuiz