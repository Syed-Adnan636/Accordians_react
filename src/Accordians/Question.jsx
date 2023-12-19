import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import './styles.css'

const Question = ({id,question,answer}) => {
    const [isOpen,setIsOpen] =useState(false);
    const [icon,setIcon] =useState(<FaCaretDown size={25} color='yellow'/>);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setIcon(isOpen ? <FaCaretDown size={25} color='yellow'/> : <FaCaretUp size={25} color='red'/>);
    };

    return (
    <>
    <div className="border bg-info text-white rounded p-1 my-1">
        <div className="d-flex justify-content-between align-items-center">
        <div className="text">
            <h6>{question}</h6>
        </div>
        <div className="icon">
            <span onClick={handleToggle} style={{cursor: 'pointer'}}>
                {icon}
            </span>
        </div>
        </div>
        <div>
            <p className={`text-white ${isOpen ? 'show' : 'para'}`}>
                {
                    isOpen && answer
                        }
            </p>
        </div>
    </div>
    </>
    )
}

export default Question