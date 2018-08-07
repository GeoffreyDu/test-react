import React, {Component} from 'react'


class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      indic:"0033",
      phone:"12345678",
      password:"1234",
      indicUser:"",
      phoneUser:"",
      passwordUser:"",
    }
  }

  handleOnChange = (e) => {
           this.setState({
               [e.target.name] : e.target.value
           })
           console.log(this.state)
       }

    submit = (e)=>{
      e.preventDefault();
      if((this.state.indic===this.state.indicUser) && (this.state.phone===this.state.phoneUser) && (this.state.password===this.state.passwordUser)){
        this.props.history.push("/map")
      }
    }


  render(){
    return(
      <div className="container">
           <form className="formulaire">
             <h1>JULAYA</h1>
             <input onChange={this.handleOnChange} type="string" name="indicUser" placeholder="Indicatif"/>
             <input onChange={this.handleOnChange} type="string" name="phoneUser" placeholder="Numéro de téléphone"/>
             <input onChange={this.handleOnChange} type="password" name="passwordUser" placeholder="Mot de passe"/>
             <button className="boutonlogin" type="submit" onClick={this.submit}>Se connecter</button>
           </form>
       </div>
    )
  }
}

export default Login
