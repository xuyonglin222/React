import React, {Component} from 'react';


// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     tick(){
//         this.setState({
//             date:new Date()
//         })
//     }
//
//     componentDidMount() {
//         this.timerId = setInterval(() => this.tick(), 1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }
//     handleClick(){
//         console.log('this ',this)
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick.bind(this)}>console</button>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }


class LogInButton extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <button onClick={this.props.onClick}>登录</button>
        )
    }
}

class LogOutButton extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <button onClick={this.props.onClick}>注销</button>
        )
    }
}

class Greeting extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin : true,
        }
    }

    handleInClick(){
        this.setState({
            isLogin:true,
        });
        alert('hello');
    }
    handleOutClick(){
        this.setState({
            isLogin:false,
        })
    }
    render(){
        let isLogin=this.state.isLogin;
        let Button;
        if(isLogin){
            Button = <LogInButton onClick={this.handleOutClick.bind(this)}/>
        }
        else{
            Button=<LogOutButton onClick={this.handleInClick.bind(this)}/>
        }
        return (
            <div>
                {Button}
              <h1>ss{this.state.isLogin}</h1>
            </div>
        );
    }
}

export default class App extends Component {
    render() {
        return (<Greeting/>)
    }
}