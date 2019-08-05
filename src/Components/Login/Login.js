import React, { Component } from 'react';
import { Form, Button, Icon, Card, Message } from 'semantic-ui-react'
import firebase from '../../firebase'

import './Login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            newName: '',
            newEmail: '',
            newPassword: '',
            passwordConfirmation: '',
            errors: [],
            loading: false
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmitCreate = this.handleSubmitCreate.bind(this)
    }

    isFormValid = () => {
        let errors = []
        let error;

        if(this.isFormEmpty(this.state)) {
            error = { message: 'Fill in all fields '}
            this.setState({ errors:  errors.concat(error) })
            return false

        } else if(!this.isPasswordValid(this.state)) {
            error = { message: 'Passowrd must be at least 6 characters'}
            this.setState({ errors: errors.concat(error) })
            return false

        }  else {
            return true;
        }
    }


    isFormEmpty = ({ newName, newEmail, newPassword, passwordConfirmation }) => {
        return  !newName.length || !newEmail.length || !newPassword.length || !passwordConfirmation.length
    }

    isPasswordValid = ({ newPassword, passwordConfirmation }) => {
        if(newPassword.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if(newPassword !== passwordConfirmation) {
            return false
        } else {
            return true
        }
    } 

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p> )

    handleChange = event => {

        const cell = {
            name: event.target.name,
            value: event.target.value
        }

        this.setState({
            [cell.name] : cell.value
        })

    }

    handleSubmitCreate = event => {
        event.preventDefault()
        if(this.isFormValid()) {
            this.setState({ errors: [], loading: true })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.newEmail, this.state.newPassword)
                .then(createdUser => {
                    console.log('Created User: ', createdUser)
                    this.setState({ loading: false })
                })
                .catch(err => {
                    console.error(err)
                    this.setState({ errors: this.state.errors.concat(err), loading: false })
                }, () => {
                    console.log('this.state.errors: ', this.state.errors)
                })
            }
    }

   

    render() { 

        const { 
            username, 
            password, 
            newName, 
            newEmail, 
            newPassword, 
            passwordConfirmation, 
            errors,
            loading, 
        } = this.state

        return ( 

            <div className="name-login-box">

                <div className="box">
                    Sef Green.
                </div>
                

                <Card className="main-container">                    
                
                        <div className="login-box">

                            <span className="login-title">Log-In</span>

                            <div className="login-container">

                                <div className="login-info">

                                    <Form onSubmit={this.handleSubmitSignIn} size="large">

                                        <Form.Input 
                                                    fluid 
                                                    name="username"
                                                    focus 
                                                    placeholder='Email'  
                                                    onChange={this.handleChange}
                                                    value={username}
                                                    style={{ height: '33px', width: '235px', fontSize: '14pt', borderRadius: '4px'}} /> 
                                    
                                        <Form.Input 
                                                    fluid 
                                                    name="password"
                                                    focus 
                                                    onChange={this.handleChange}
                                                    value={password}
                                                    placeholder='Password' 
                                                    style={{height: '33px', width: '235px', fontSize: '14pt', borderRadius: '4px'}} />

                                        <Button animated>

                                            <Button.Content visible>Login</Button.Content>

                                                <Button.Content hidden>

                                                    <Icon name='arrow right' />

                                                </Button.Content>

                                            </Button>
                                        

                                    </Form>
                                </div> 

                            </div>

                        </div> 

                        <span className="margin-space"></span>

                         <div className="signup-box">

                             <span className="signup-title">Create Account</span>

                             <div className="signup-container">

                                  <div className="signup-info">

                                    <Form onSubmit={this.handleSubmitCreate} size="large" >

                                        <Form.Input 
                                                    fluid 
                                                    name="newName"
                                                    focus 
                                                    icon="user"
                                                    iconPosition="left"
                                                    placeholder='Name'
                                                    value={newName}
                                                    onChange={this.handleChange} 
                                                    style={{ marginTop: '5px', height: '25px', width: '200px', fontSize: '10pt', }} /> 

                                        <Form.Input 
                                                    fluid 
                                                    name="newEmail"
                                                    focus 
                                                    icon="mail"
                                                    iconPosition="left"
                                                    placeholder='Email'
                                                    value={newEmail}
                                                    className={
                                                        errors.some(error => 
                                                            error.messaage.includes("email") 
                                                        ) ? 'error' : ''}
                                                    type="email"
                                                    onChange={this.handleChange} 
                                                    style={{ marginTop: '5px', height: '25px', width: '200px', fontSize: '10pt', }} /> 
                                        
                                        <Form.Input 
                                                    fluid 
                                                    name="newPassword"
                                                    focus 
                                                    icon="lock"
                                                    iconPosition="left"
                                                    type="password"
                                                    placeholder='Password' 
                                                    onChange={this.handleChange}
                                                    value={newPassword}
                                                    style={{ marginTop: '5px', height: '25px', width: '200px', fontSize: '10pt'}} /> 
                                        
                                        <Form.Input 
                                                    fluid 
                                                    name="passwordConfirmation"
                                                    focus 
                                                    icon="repeat"
                                                    iconPosition="left"
                                                    type="password"
                                                    placeholder='Repeat Password'
                                                    onChange={this.handleChange}  
                                                    value={passwordConfirmation}
                                                    style={{ marginTop: '5px', height: '25px', width: '200px', fontSize: '10 pt'}} /> 
                                        
                                        

                                        <Button vdisabled={loading} className={loading ? 'loading' : ''} animated>

                                            <Button.Content  visible>Create</Button.Content>

                                                <Button.Content hidden>

                                                    <Icon name={loading ? 'loading': 'arrow right'} />
                                                    
                                                </Button.Content>

                                            </Button>
                                        
                                    </Form>  

                                    {errors.length > 0 ? (
                                            <Message error>
                                                <h3>Error</h3>
                                                {this.displayErrors(errors)}
                                            </Message>
                                        ) : ''}
                                 </div> 

                        </div>

                     </div>   

                 </Card> 
            
            </div>
            
         );
    }
}
 
export default Login;