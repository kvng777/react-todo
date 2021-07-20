import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    //Create handler for inputText
    const inputTextHandler = (e) => {
        setInputText(e.target.value); //text entered will shoot into the state
    }
    

    //Create handler for the + button
    const submitToDoHandler = (e) => { //whats going to happen when you click the btn
        e.preventDefault(); //To stop it from refreshing
        setTodos([ //going to set the following properties 
            ...todos, {text: inputText, completed: false, id: Math.random() * 9000 }
        ])
        setInputText(''); //To clear the inputfield
    }

    return(
        <form>
            <input 
                value={inputText}
                onChange={inputTextHandler}
                type='text'
                className='todo-input' />
            <button onClick={submitToDoHandler} className="todo-button" type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todo" className="filter-todo">
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;