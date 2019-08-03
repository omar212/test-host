import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="name-login-box">

                <div className="box">
                    Sef Green.
                </div>
                
                {/* <div className="main-container">                     */}
                
                        {/* <div className="login-box">

                            <span className="login-title">Log-In</span>

                            <div className="login-container">

                                {/* <div className="login-info">
                                    Email: <input /> 
                                    <br />
                                    password: <input />
                                </div> 

                            </div>

                        </div> 

                        // <div className="signup-box">

                        //     <span className="signup-title">Create Account</span>

                        //     <div className="signup-container">

                        //         {/* <div className="signup-info">
                        //                 Email: <input /> <br />
                        //                 password: <input /> <br />
                        //                 repeat password: <input /> <br />
                        //                 password: <input />
                        //         </div> 

                        //     </div>

                    // </div>   */}  

                {/* </div>  */}
            
            </div>
            
         );
    }
}
 
export default Login;