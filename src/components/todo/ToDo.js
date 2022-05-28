import React, { useEffect, useState } from "react";
import "./styles.css";
const ToDo = () => {
    const getLocalData=()=>{
        const List=localStorage.getItem("todolist")
        if(List)
        {
            return JSON.parse(List);
        }
        else
        {
            return[];

        }
    }


    const[inputData,setInputData]=useState("");
    const [itmes,setItems]=useState(getLocalData());
    // console.log(inputData);
    const addItems = () => {
        if(!inputData)
        {
            alert("Plz enter the data")
        }
        else{
            const mynewData={
                id:new Date().getTime().toString(),
                name:inputData
            }
            setItems([ ...itmes,mynewData]);
            setInputData("");

        }
    };
    const remove = (index)=>{
        const newitems=itmes.filter((ele)=>{
            return ele.id !== index;
        })
        setItems(newitems);
    }
    const removeAll = () =>{
        setItems([]);
    }
    // --------------
    useEffect (()=>{
         localStorage.setItem("todolist",JSON.stringify (itmes))
    },[itmes])


    
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./logo192.png" alt="img"></img>
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Todo Task"
              className="form-control"
              value={inputData}
              onChange={(e)=>setInputData(e.target.value)}
            ></input>
            <i className="fa fa-plus add-btn" onClick={addItems}></i>
          </div>
          {/* -------------------------- */}
          <div className="showItems">
              {itmes.map((ele,index)=>{
                  return (
                    <div className="eachItem" key={index}>
                    <h3>{ele.name}</h3>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn"></i>
                      <i className="far fa-trash-alt add-btn" onClick={() => remove(ele.id)}></i>
                    </div>
                  </div>
                
                  )
              })};
              </div> 
            

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
