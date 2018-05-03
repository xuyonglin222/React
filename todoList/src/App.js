import React, {Component} from 'react';
import Footer from './component/footer';
import Header from './component/header';
import ToDoList from './component/todolist';

export default class App extends Component {
    render() {
        console.log(<ToDoList name={'todo'} onClick={()=>{console.log('ss')}}></ToDoList>)
        return (
            <div>
                <Header />
                <ToDoList/>
                <Footer />

            </div>
        )
    }
}