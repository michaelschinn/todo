import React from "react";
import TasksControl from "./Tasks.Control";
import Task from "./Task";

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            tab : "all",
            clearCompleted: false,
            currentTextValue: "",
            taskList : []
        }
        this.updateTaskText = this.updateTaskText.bind(this);
        this.addTask = this.addTask.bind(this);
        this.markCompleted = this.markCompleted.bind(this);

        this.activeCount = 0;
    }
    componentDidMount(){
        if(localStorage.getItem("taskList")){
            let taskList = JSON.parse(localStorage.getItem("taskList"));
            console.log(taskList);
        }
    }
    componentDidUpdate(){
        console.log(this.state);
        let taskList = JSON.stringify(this.state.taskList);
        localStorage.setItem("taskList", taskList);
    }
    markCompleted(e){
        this.state.taskList.map(item => {
            if(item.id === e.target.parentNode.id){item.completed = true};
        })
    }
    updateTasks(){
        return(
        this.state.taskList.map(item => {
            return(
                <Task 
                    key={item.id} 
                    id={item.id} 
                    completed={item.completed} 
                    removed={item.removed} 
                    textValue={item.currentTextValue} 
                />
            )
        }))
    }
    addTask(text){
        let newTask = {
            id : new Date(),
            completed: false,
            removed: false,
            textValue : this.state.currentTextValue
        }
        this.setState({
            taskList : [...this.state.taskList, newTask]
        })
    }
    increment(num){
        num = num++;
    }
    decrement(num){
        num = num--;
    }
    updateTaskText(e){
        this.setState(
            {
                currentTextValue: e.target.value 
            }
        )
        console.log(e.target.value);
    }
    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <input className="input" type="text" onChange={this.updateTaskText} value={this.currentTextValue} />
                            <button className="btn" onClick={this.addTask}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.updateTasks()}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TasksControl itemsLeft={this.activeCount} />
                    </div>
                </div>
            </main>
        )
    }
}