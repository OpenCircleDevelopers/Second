import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa"
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'



const CreateQuiz = () => {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ quizMarks, setQuizMarks ] = useState('');
    const [ quizTime, setQuizTime ] = useState('');

    const [quizQuestion, setQuizQuestion] = useState([])

    const addQuestion = () => {
        const questionDemo = {
            id: Date.now(),
            type: "text",
            value: "",
            placeholder: 'please input your question here',
            optionsType: "radio",
            options: [{index: Date.now(), value : "", placeholder: "please insert option here"}]

        }
        setQuizQuestion([...quizQuestion, questionDemo])
        console.log(quizQuestion)
    }

    const changeHandler = (e, quiz) => {
        const updateQuiz = () => {
            return quizQuestion.map((data) => {
                if (data.id === quiz.id) {
                    return { ...data, optionsType: e.target.value }
                }
                return data
            })
        }

        setQuizQuestion(updateQuiz)
        console.log(quizQuestion)
    }

    const addOption = (quiz) => {
        const updateOptions = () => {
            return quizQuestion.map((data) => {
                if(data.id === quiz.id) {
                    return{...data, options: [...data.options, {index: Date.now(), value : "", placeholder : 'please insert option here'}]}
                }
                return data
            })
        }
        setQuizQuestion(updateOptions)
    }

    const updateQuestion = (quiz, newValue) => {
        const updateQuestionValue = () => {
            return quizQuestion.map((data) => {
                if(data.id === quiz.id){
                    return {...data, value: newValue}
                }
                return data
        })
        }
        setQuizQuestion(updateQuestionValue)
    }

    const updateOption = (value, quiz, indexOfOpt) => {
        const updateOptionValue =  quizQuestion.map((question) => {
                if(question.id === quiz.id){
                    const updateOption = question.options.map((option) =>{
                        if(option.index === indexOfOpt){
                            return {...option, value: value}
                        }
                        return option
                    })
                    return {...question, options: updateOption }
                }
                return question
            })
        setQuizQuestion(updateOptionValue)
    }




    const checkRadioOptions = (quiz) => {
        return <div className='mt-5'>
            {quiz.options.map((opt, index) => {
                return(
                    <div key={index}>
                        <input type={quiz.optionsType} name="quiz-option1" />
                        <input type="text" placeholder={opt.placeholder} onChange={(e) => updateOption(e.target.value, quiz, opt.index)} className='ml-3' />
                        <br />
                    </div>
                )
            })}
            <button className='mt-3 border rounded px-2 ml-auto' onClick={() => addOption(quiz)}>+</button>
        </div>
    }

    const textBarOptions = (quiz) => {
        return <div className='mt-5'>
            {quiz.options.map((opt, index) => {
                return <div key={index}>
                    <input type={quiz.optionsType}  placeholder={opt.placeholder} onChange={(e) => updateOption(e.target.value, quiz, opt.index)} />
                    <br />
                </div>
            })}
            <button className='mt-3 border rounded px-2 ml-auto' onClick={() => addOption(quiz)}>+</button>
        </div>
    }

    const submitButton = () => {
        // console.log(title)
        // console.log(description)
        // console.log(quizMarks)
        // console.log(quizTime)
        // quizQuestion.forEach((q, index) => {
        //     console.log(`question:${index += 1} = ${q.value}`)
        //     q.options.forEach((opt, index) => {
        //         console.log(`option:${index += 1} = ${opt.value}`)
        //     })
        // })

        console.log(quizQuestion)
    }




    return (
        <div className='bg-primary w-80 mx-auto mt-15'>
            <Link to="/" className='inline-flex m-4'><FaArrowLeft /><h1 className='ml-1' style={{ marginTop: '-2px' }}>back</h1></Link>
            <div className='form'>
                <input type="text" name="quiz-title" placeholder='Input your title here' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <textarea name="quiz-description" placeholder="input quiz description here" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <input type="number" name="quiz-marks" placeholder='input full marks of quiz' value={quizMarks} onChange={(e) => setQuizMarks(e.target.value)}/>
                <br />
                <input type="number" name="quiz-time" placeholder='input time of quiz' value={quizTime} onChange={(e) => setQuizTime(e.target.value)}/>
                <br />
                <div className='flex'>
                    <h3 className='inline'>Questions: </h3>
                    <button className='ml-auto border p-1' onClick={addQuestion}><FaPlus /></button>
                </div>
                {quizQuestion.map((quiz, index) => {
                    return (
                        <div key={index} id={index} className='mt-5'>
                            <input type={quiz.type} name="quiz-question" onChange={(e) => {updateQuestion(quiz, e.target.value)}} placeholder={quiz.placeholder} />
                            <select name="option-type" className='border ml-2 rounded' value={quiz.optionsType} onChange={(e) => changeHandler(e, quiz)}>
                                <option value="radio">radio</option>
                                <option value="checkbox">checkbox</option>
                                <option value="text">text</option>
                            </select>
                            {quiz.optionsType === 'text' ? textBarOptions(quiz) : checkRadioOptions(quiz)}
                        </div>
                    )
                })}
            <button onClick={submitButton} className='mt-3 border rounded px-2 ml-auto'>Submit</button>
            </div>
        </div>
    )
}

export default CreateQuiz