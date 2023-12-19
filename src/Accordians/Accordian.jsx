import React from 'react'
import Question from './Question'
import { questions } from './data'

const Accordian = () => {
    return (
    <>
    <div className="container bg-dark rounded rounded p-4 col-lg-7 mx-auto mt-3 shadow">
        <h1 className="display-1 text-center text-white">
            Accordians
            </h1>
            {questions.map((data) => {
                return <Question key={data.id} {...data}/>
            })}
    </div>
    </>
    )
}

export default Accordian