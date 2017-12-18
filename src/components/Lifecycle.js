import React from 'react';
import axios from 'axios';
export default class Lifecycle extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get('http://demo0398069.mockable.io/')
            .then( (response) =>  {
                this.setState({'data': response.data});
            })
    }

    shouldComponentUpdate(newprops, nextState){
        console.log("should component update" + newprops + nextState);
        return true;

    }
    componentWillUpdate(){
        console.log("component will update")
    }

    componentDidUpdate(){
        console.log("component did update")        
    }

    highlightListElement = (evt) =>{
        !evt.target.className ? evt.target.className ='text' : evt.target.className = '';
    }

    deleteItem = (evt)=>{
        let data = this.state.data;
        data.splice(evt.target.value,1)
        this.setState({data})
        console.log(evt.target)
    }

    componentWillUnmount(){
        
    }

    render(){
        return <div> 
                    <ul className="list-unstyled text-left">
                        {this.state.data.map(d => {
                            return (<li key={d.id}  > 
                                        <h5>  
                                            <p onClick={this.highlightListElement}>Name  -- {d.first_name} </p>
                                            <p onClick={this.highlightListElement}> Email -- {d.last_name} {d.email}</p>
                                        </h5>
                                        <button type="button" onClick={this.deleteItem} value={d.id} class="btn btn-warning">Delete Item</button>
                                    </li>)
                        })}

                    </ul>
                </div>;
    }

}