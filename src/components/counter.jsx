
import React, { Component } from 'react';
class  Counter extends Component {
    
 //constructor () {
//super();
//this.handleIncrememt = this.handleIncrememt.bind(this);



 //}

<<<<<<< HEAD

   


=======
// nouvelle 
>>>>>>> nouvelle
    render() { 

        return (
        <div >
            
            <span   className={this.getbadge()} >{this.formatCount()}</span> 
            <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>
                +
            </button>
            <span> </span>
            <button onClick={()=> this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm'>
                -
            </button>
            <button onClick = {()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
            Delete
            </button>
            

           
            </div >
        );
    }

    getbadge() {
        let classes = 'badge m-3 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

formatCount (){

return this.props.counter.value === 0 ? 'Zero'  : this.props.counter.value

};
}

export default Counter ;