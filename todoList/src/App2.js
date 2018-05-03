import React,{ Component } from 'react';
import './style.css';
class Title extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <h3>{this.props.value}</h3>
        )
    }
}

class Item extends Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        console.log('hhhh');
    }
    render(){
        return (
            <div class="item">
                <p onClick={this.handleClick.bind(this)}>{this.props.name}</p>
            </div>
        )
    }
}

class Test extends Component{
    constructor(){
        super();
        this.state={
            arr:{
                question:'花儿为什么这样红',
                answers:[
                    {id:1,value:'111111',},
                    {id:2,value:'222222',},
                    {id:3,value:'333333',},
                    {id:4,value:'444444',},
                ]
            }
        }
    }
    render(){
        let AnswerList = this.state.arr.answers.map((item)=>
        <Item name={item.value} key={item.id} />
        )
        return (
            <div class="card">
                <div class="card-header">
                    <Title value={this.state.arr.question}/>
                </div>
                <div class="card-body">
                    {AnswerList}
                </div>
            </div>
        )
    }
}

export  default class App extends Component{

    render(){
        return (
            <Test />
        )
    }
}