
import React, { Component } from 'react';
class  Counter extends Component {
    state = {
value : this.props.counter.value,
tags : ['tag1','tag2','tag3']


    };
 //constructor () {
//super();
//this.handleIncrememt = this.handleIncrememt.bind(this);



 //}
    handleIncrememt = () => {

        
          this.setState({value : this.state.value + 1})

    }  

    handleDecrement = () => {

       
        this.setState({value : this.state.value - 1})

  }  







    render() { 

        return (
        <div >
            
            <span   className={this.getbadge()} >{this.formatCount()}</span> 
            <button onClick={this.handleIncrememt} className='btn btn-secondary btn-sm'>+</button>
            <span> </span>
            <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm'>-</button>
            <button onClick = {  ()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            

           
            </div >
        );
    }

    getbadge() {
        let classes = 'badge m-3 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

formatCount (){

return this.state.value === 0 ? 'Zero'  : this.state.value

};
 
};
export default Counter ;