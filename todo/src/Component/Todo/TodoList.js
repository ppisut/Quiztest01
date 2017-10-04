import React, { Component } from 'react';

class Input extends Component {
    render(){
        return(
         <div class="list">
            {
                 this.props.todos.map((item, index) => ( //loop
                     <div key={item + index}>{item}
                         <button class='button-del' onClick={this.props.sendDel.bind(this, index) }>DEL</button>
                         
                     </div>
                 ))
             }
         </div>
        )
    }
}

export default Input;



