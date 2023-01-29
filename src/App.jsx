
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import './App.css'
import { useState } from "react"

const taskArray = [
    {
        id:1,
        text: 'Doctors Appiontment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id:2,
        text: 'vote Peter Obi',
        day: 'Feb 25th at 2:30pm',
        reminder: true
    },
    {
        id:3,
        text: 'Have sex',
        day: 'Feb 15th at 2:30pm',
        reminder: true
    }
]

function App() {  
    const [task, setTask] = useState(taskArray)

    const deleteTask = (id) => {        
        setTask(task.filter(items => items.id !== id))
    }

    const toggleR = (id) => {
       console.log(id)
    }
    return (
        <div className='container'>
            <Header/>
            {task.length > 0 ? <Tasks task={task} onDelete={deleteTask} onToggle={toggleR}/> : 'No task'}
        </div>
    )
  
}

export default App
