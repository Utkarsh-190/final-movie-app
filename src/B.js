import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React, { Component } from 'react';

export default class B extends Component {

    constructor(props){
        super(props);
        this.style = {
            fontSize : '30px'
        }
        this.state = {data : 0}
    }

    inc = ()=>{
        this.setState({
            data : this.state.data + 1
        })
    }

    desc = ()=>{
        this.setState({
            data : this.state.data - 1
        })
    }

  render() {
    return (
        <div class="videos">
            <RemoveCircleIcon style={this.style} onClick={this.desc} />
            <h1>{this.state.data}</h1>
            <AddCircleIcon style={this.style} onClick={this.inc} />
        </div>
    );
  }
}
