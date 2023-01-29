import Button from "./Button"
export default function Header(){

    const handleClick = () => {
        alert('clicked')
    }
    return(
        <header className="header">
            <h1>Task Tracker </h1>
            <Button color='green' text='Add' onClick={handleClick}/>
        </header>
    )
}

