import React, { Component } from 'react'

export default class AddContact extends Component
{
    state = {
        name: "",
        mobile: '',
        email: "",
    };

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" && this.state.mobile === "" && this.state.email === ""){
            alert("All the Fields are Mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", mobile: "", email: ""})
        console.log(this.state);
    }
    render()
    {
        return (
            <div className='ui main'>
                <br />
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='Name' value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
                    </div>
                    <div className='field'>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" name='mobile' placeholder='Mobile Number' value={this.state.mobile} onChange={(e)=> this.setState({mobile: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Email Id' value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}























