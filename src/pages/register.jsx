import react, { Component } from 'react';

class App extends Component {
    render() {
        return(
            <div className = "Employee-App">
                 <div className = "Registration-Form">
                     <h1>Registration From</h1>

                     <form onSubmit={this.handleSubmit } noValidate>
                         <div className='firstName'>
                             <label htmlFor='firstName'>First Name</label>
                             <input type='text' className='' placeholder='firstName' name='firstName' onChange={this.handleChange}></input>
                         </div>

                         <div className='lastName'>
                             <label htmlFor='lastName'>Last Name</label>
                             <input type='text' className='' placeholder='lastName' name='lastName' onChange={this.handleChange}></input>
                         </div>

                         <div className='emailId'>
                             <label htmlFor='emailId'>EmailId</label>
                             <input type='text' className='' placeholder='emailId' name='emailId' onChange={this.handleChange}></input>
                         </div>

                         <div className='password'>
                             <label htmlFor='password'>Password</label>
                             <input type='text' className='' placeholder='password' name='password' onChange={this.handleChange}></input>
                         </div>

                         <div className='RegistrationForm'>
                             <button type='submit'>Register</button>
                         </div>

                     </form>
                 </div>
            </div>
        );
    }
}

export default App