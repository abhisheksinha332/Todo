import React from 'react';


const Form = () => {
    return(
        <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        // <div className="todo-container">
        //     <ul className="todo-list"></ul>
        // </div>

    );
};


export default Form;