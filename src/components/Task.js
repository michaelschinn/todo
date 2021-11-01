import Main from "./Main";

export default function Task(props){
    return (
        <div id={props.id} className={props.removed && "d-none"}>
            <button className="btn" onClick={props.markedCompleted}>{props.completed?'checked':'unchecked'}</button>
            <span className={props.completed && "text-decoration-line-through"} type="text">{props.textValue}</span>
            <button className="btn">delete</button>
        </div>
    )
}    