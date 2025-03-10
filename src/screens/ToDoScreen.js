import { useContext } from "react";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";


const ToDoScreen = ()=>{
    const {taskList} = useContext(TaskContext);
    const navigate = useNavigate();
    

    return (
        <>
        
        <div className="bg-slate-900 screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button
                    onClick={(e)=>{
                        navigate("/add-task");
                    }}
                    className = "ui secondary button"
                    >
                        Add Task
                </button>
                <section>
                <div className="ui cards">
                {taskList.map((task)=>(
                    <Tasks task={task} key={task.taskId}/>
                ))}
                </div>
                </section>
            </div>
        </div>
        </>
    );
};

export default ToDoScreen;