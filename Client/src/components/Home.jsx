import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";





const Home = ()=>{




    const [tasks,setTasks] = useState([])

    const fetchTasks = async() =>{
        const res = await axios.get("http://localhost:5000/api/v1/task")
        setTasks(res.data.tasks);
    }

    useEffect(()=>{
        fetchTasks();
    },[])

    return (
        <div>
            <div>
                <h1>Todo-List</h1>
                <TaskForm tasks = {tasks} setTasks = {setTasks} />
                <TaskList tasks ={tasks} setTasks = {setTasks} />
            </div>
        </div>
    )
}
export default Home;