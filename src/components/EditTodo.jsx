import React, { useState } from 'react'

const EditTodo = ({ updateTodo, setUpdateTodo,updateTodoList }) => {
    const [editTodoName, setEditTodoName] = useState(updateTodo.todo)
    const [editTodoPrice, setEditTodoPrice] = useState(updateTodo.todoAmount)
    const [editTodoDate, setEditTodoDate] = useState('')
    const [editTodoCategory, setEditTodoCategory] = useState('')
    const [editTodoUrgent, setEditTodoUrgent] = useState(false)

    const handleEditTodo = (e) => {
        setEditTodoName(e.target.value)
    }
    const handleEditTodoPrice = (e) => {
        setEditTodoPrice(e.target.value)
    }
    
    const handleEditTodoDate = (e) => {
        setEditTodoDate(e.target.value)
    }
    const handleEditTodoCategory = (e) => {
        setEditTodoCategory(e.target.value)
    }
    const handleEditTodoUrgent = (e) => {
        setEditTodoUrgent(e.target.value)
    }
    const updateTodoHandler = () => {
        const updatedTodo = {
            id: updateTodo.id,
            todo: editTodoName,
            todoAmount: editTodoPrice,
            isCompleted: false,
            todoCategory: editTodoCategory,
             todoDate: editTodoDate,
             todoUrgent: editTodoUrgent

        }
        updateTodoList(updatedTodo)
        setEditTodoName('')
        setEditTodoPrice('')
    }
    const cancelButtonHandler = () => {
        setEditTodoName('')
        setEditTodoPrice('')
        setUpdateTodo('')
    }

    return (
        <div>{updateTodo.todo}  <div>
            <input type='text' onChange={(e) => handleEditTodo(e)} value={editTodoName} placeholder='New Todo Name' />
            <input type='number' onChange={(e) => handleEditTodoPrice(e)} value={editTodoPrice} placeholder='New Todo Price' />
            <input type='date' onChange={(e) => handleEditTodoDate(e)} value={editTodoDate}></input>
            <input type='checkbox' onChange={(e) => handleEditTodoUrgent(e)} value={editTodoUrgent}></input>
            <select onChange={(e) => handleEditTodoCategory(e)} value={editTodoCategory}>
                <option value=''>Select your category</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <button type='click' onClick={updateTodoHandler}>Update Todo</button>
            <button type='click' onClick={cancelButtonHandler}>Cancel</button>
        </div></div>
    )
}

export default EditTodo