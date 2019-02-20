import React, {Component}  from 'react';
import { Button,Input } from 'reactstrap';
class InputTask extends Component {

   state = {task:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <Input type="hidden" name="id" value={this.props.id} /><br/>
               <Input type="text" name="task" onChange={this.handleChange} /> <br/>
               <Button color="success" onClick={() => this.props.addTask(this.state.task)}>Add</Button>
           </div>
       )
   }
}

export default InputTask