import React, {Component} from 'react';
import TodoItem from './todoitem';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            isFocus:false,
            dataSet: []
        }
    }

    shouldComponentUpdate() {
        /*console.log(this.state.dataSet);
        console.log('s');*/
        return true
    }

    componentDidUpdate() {
  /*      console.log('udate');
        console.log(this.state.dataSet);*/
        return true;
    }

    enterClick(e) {
        if (e.keyCode == 13) {
            let objItem = {id: this.state.dataSet.length + 1, selected: false, value: ''}
            objItem.value = e.target.value;
            e.target.value=''
            let arr = this.state.dataSet.slice();
            arr.push(objItem);
            this.setState({
                dataSet:arr
            })
        }

    }
    delete(item){
        let arr = this.state.dataSet.slice();
        let index = arr.indexOf(item);
        arr.splice(index,1);
        this.setState({
            dataSet:arr
        });

    }
    toogle(item){
        let arr = this.state.dataSet.slice();
        let index = arr.indexOf(item);
        arr[index].selected=arr[index].selected==true?false:true;
        this.setState({
            dataSet:arr
        });
    }


    focus(){
        this.setState({
            isFocus:true
        })
    }
    deleteSelect(){
        let arr = this.state.dataSet.slice();
        for(let i = 0;i< arr.length;i++){
            if(arr[i].selected){
                arr.splice(i,1)
                i--;
            }
        }
        this.setState({
            dataSet:arr
        });
    }

    allSelect(){
        let arr = this.state.dataSet.slice();
        for(let i = 0;i< arr.length;i++){
            if(!arr[i].selected){
                arr[i].selected=true;
            }
        }
        this.setState({
            dataSet:arr
        });
    }
    render() {

        let TodoSet = this.state.dataSet.map((item) =>
            <TodoItem key={item.id} msg={item} onSelect={this.toogle.bind(this,item)} onDel={this.delete.bind(this,item)}/>
        );
        return (
            <div className="container">
                <div className="todo-input">
                    <input type="text" onFocus={this.focus.bind(this)} onKeyDown={this.enterClick.bind(this)} placeholder="What needs to be done"/>
                </div>
                <div className={this.state.isFocus?'border focus':'border'} ></div>
                <div className="todo-body">
                    {TodoSet}
                </div>
                <div className="todo-footer">
                    <span>{this.state.dataSet.length}&nbsp; items left</span>
                    <span className='btn btn-inverse' onClick={this.allSelect.bind(this)}>All Selected</span>
                    <span className='btn' onClick={this.deleteSelect.bind(this)}>Clear Selected</span>
                </div>
            </div>
        )
    }
}