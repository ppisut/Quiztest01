import React, { Component } from 'react';

class Input extends Component{
    render() {
        return (
            <div class="main">
                <input type="text" size="75" value={this.props.text} onChange={this.props.onTextChange} onKeyPress={this.props.sendAddEnter}
                placeholder="Add Todo"/>
                <button class='button-add' onClick={this.props.onInputSubmit}>+ ADD</button>
                
            </div>

    
        );
    }


}

export default Input;




