export default function TasksControl(props){
    // itemsLeft test var
    return(
        <>
        <div className="input-group">
            <span>{`${props.itemsLeft} `}Task{props.itemsLeft > 1 && "s"} left. </span>
            <span><button>All</button><button>Active</button><button>Completed</button></span>
            <button className="btn">Clear Completed</button>
        </div>
        </>
    )
}