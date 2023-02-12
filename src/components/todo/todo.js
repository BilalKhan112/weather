import React, { useState, useEffect } from 'react'
import './todo.css'

// get local storage data
const getLocalData = () => {
    const lists = localStorage.getItem("myTodo");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}
const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem , setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItem = () => {
        if (!inputdata) {
            alert("Fill todo ");
        } else if(inputdata && toggleButton){
           setItems(
            items.map((currElem)=>{
            if(currElem.id === isEditItem) {
                return {...currElem, name:inputdata}
            }
            return currElem;
            })
           );
           setInputData("");
           setIsEditItem(null);
           setToggleButton(false);
        }
      
         else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };

    // Edit items
      const editItem=(id)=>{
        const items_todo_edited = items.find((currElem)=>{
              return currElem.id === id;
        });
        setInputData(items_todo_edited.name);
        setIsEditItem(id);
        setToggleButton(true);
      }

    // deleteItems
    const deleteItems = (id) => {
        const updatedItems = items.filter((currElem) => {
            return currElem.id !== id;
        });
        setItems(updatedItems);
    };
    // Remove all todo
    const removeAll = () => {
        setItems([]);
    }
    // adding localstorage
    useEffect(() => {
        localStorage.setItem("myTodo", JSON.stringify(items))
    }, [items])
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="" />
                        <figcaption>Add Your Todo Here ✌</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='✍ Add Item'
                            className='form-control'
                            value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        {toggleButton ? (<i className="fa fa-edit add-btn" onClick={addItem}></i>
                        ):(
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>)}
                        
                    </div>
                    {/* show items which user add in todo */}
                    <div className='showItems'>

                        {items.map((currElem) => {
                            return (
                                <>
                                    <div className='eachItem' key={currElem.id}>
                                        <h3>{currElem.name}</h3>
                                        <div className='todo-btn'>
                                            <i className='far fa-edit add-btn' onClick={()=> editItem(currElem.id)}></i>
                                            <i className='far fa-trash-alt add-btn' onClick={() => deleteItems(currElem.id)}></i>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    {/* remove all btn */}
                    <div className='showItems'>
                        <button className='btn effect04' data-link-text="RemoveAll" onClick={removeAll}>
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
