import Task from "./Task"

function Tasks({task, onDelete, onToggle}){
    
    return(
        <>
            
            {task.map(item => (<Task key={item.id} task={item} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks

// {task.map(task => (<h3 key={task.id}>{task.text}</h3>))}