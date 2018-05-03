import React, {Component} from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="todo-item">
                <div className="radio" onClick={this.props.onSelect}>
                    <i className={this.props.msg.selected?'glyphicon':' '}></i>
                </div>
                {/*<input type="radio" checked={this.props.msg.completed}  onClick={this.props.handleClick}/>*/}
                <p className="item-text">{this.props.msg.value}</p>
                <div className="del" onClick={this.props.onDel}>
                    x
                </div>
            </div>
        )
    }
}