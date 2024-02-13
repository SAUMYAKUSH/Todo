import React, { useState } from 'react'

const AddTodo = ({ addNewTodoInList }) => {
    const [todoName, setTodoName] = useState('')
    const [todoPrice, setTodoPrice] = useState('')
    const [todoDate, setTodoDate] = useState('')
    const [urgent, setUrgent] = useState(false)
    const [todoCategory, setTodoCategory] = useState('1')
    const [todoColor, setColor] = useState("#ff0000")

    const handleTodoName = (e) => {
        setTodoName(e.target.value)
    }
    const handleTodoPrice = (e) => {
        setTodoPrice(e.target.value)
    }
    const handleTodoDate = (e) => {
        setTodoDate(e.target.value)
    }

    const handleTodoUrgency = (e) => {
        console.log(e)
        setUrgent(e.target.checked)
    }
    const handleTodoCategory = (e) => {
        setTodoCategory(e.target.value)
    }
    const handleTodoColor = (e) =>{
        setColor(e.target.value)
    }

    const addTodoHandler = () => {
        console.log(todoCategory, todoDate, todoName, todoPrice, urgent)
        const newTodo = {
            id: Math.random(),
            todo: todoName,
            todoAmount: todoPrice,
            isCompleted: false,
            todoCategory: todoCategory,
            todoDate: todoDate,
            urgent:urgent,
            color: todoColor
        }
        console.log(newTodo)
        addNewTodoInList(newTodo)
        setTodoName('')
        setTodoPrice('')
        setTodoDate('')
        setUrgent(false)
        setTodoCategory('1')
        setColor("#ff0000")
    }

    return (
        <div>
            <input type='text' onChange={(e) => handleTodoName(e)} value={todoName} placeholder='Todo Name' />
            <input type='number' onChange={(e) => handleTodoPrice(e)} value={todoPrice} placeholder='Todo Price' />
            <input type='date' onChange={(e) => handleTodoDate(e)} value={todoDate}></input>
            <input type='checkbox' onChange={(e) => handleTodoUrgency(e)} value={urgent}></input>
            <input type="color"  onChange={(e) =>handleTodoColor(e)} value={todoColor}/> 

            <select onChange={(e) => handleTodoCategory(e)} value={todoCategory}>
                <option value='1'>Select your category</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <button type='click' onClick={addTodoHandler}>Submit Todo</button>
        </div>
    )
}

export default AddTodo