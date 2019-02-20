import React,{Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (<ListGroup > {
                   this.props.tasks.map((item) => (
                       <ListGroupItem key={item.id}> {item.task} </ListGroupItem>
                   ))
               }
           </ListGroup>)
   }
}

export default TaskList