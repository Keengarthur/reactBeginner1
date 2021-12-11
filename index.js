// import { Component } from 'react'
// import { Provider } from 'react-redux'
// import {propTypes} from 'prop-types'
// import img from './4.jpg'

// import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
// import { createStore } from 'redux'
// // import { connect } from 'react-redux'


// import {Children,propTypes} from 'react'
// import reactDom from 'react-dom'
// import { render } from 'react-dom'
// import {useState,useEffect} from 'react'
// import data from './data'
// import './index.css'
// import 'whatwg-fetch' 



// const Book = ()=>{
// return <article>
//     <Images/>
//     <h1>
//         this is a book
//     </h1>
// </article>
// }
// const Images = () =>{
//     return <img src={img} alt='image'
//     style={{width:'10rem'}}/>
// }
// const BookList =() =>{
// return<section>

//  <Book/>
//  <Book/>
// </section>
// }
// render(<BookList/>,document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import img from './4.jpg'

class Clock extends React.Component{
    constructor(props){
        super(props)
       this.state = {currentTime:new Date().toString()}
       this.launch()
    }
    // componentDidMount(){
    //    this.interval = setInterval(
    //        ()=>this.setState({currentTime:new Date().toString()})
    //    ,1000) 
    // }
    launch(){
        this.interval = setInterval(
                   ()=>this.setState({currentTime:new Date().toString()})
               ,1000) 
    }
    render(){
        return <div>
            <AnalogDisplay time={this.state.currentTime}/>
            <DigitalDisplay time={this.state.currentTime}/>

        </div>
    }
}
const DigitalDisplay= (props) =><div>{props.time}</div>
const AnalogDisplay = (props)=>{
    let date = new Date(props.time)
    let dialStyle ={
        position:'relative',
        top:0,
        left:0,
        width:200,
        height:200,
        borderRadius:20000,
        borderStyle:'solid',
        borderColor:'black'
    }

    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((date.getSeconds()/60)*360 -90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
        }
        let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((date.getMinutes()/60)*360 - 90 ) .toString() + 'deg)',
        transformOrigin:'0% 0%',
        backgroundColor:'grey'
    }

    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours()/12)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
        }
        return <div>
        <div style={dialStyle}>
        <div style={secondHandStyle}/>
        <div style={minuteHandStyle}/>
        <div style={hourHandStyle}/>
        </div>
        </div>
}
render(<Clock/>,document.getElementById('root'))