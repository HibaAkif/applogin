import React, { createRef } from 'react';
class LoginApp extends React.Component{
    constructor(props){
        super(props);

        this.login = createRef();
        this.gmail = createRef();

        this.state = {
            t:[]
        }
    }
    render(){
        return(
            <div>
                Login:<input ref={this.login}/>
                Gmail:<input ref={this.gmail}/>
                <button type="button" onClick={this.envoyer}>Envoyer</button>
            </div>
        );
    }
}
export default LoginApp;