import React, { Component, ReactComponent } from 'react';
import coverphoto from './cover_photo.jpg';
import facebook from './fb.png';
import email from './email.png';
import hackpad from './hackpad.png';
import git from './git.svg';
import twitter from './twitter.png';
import instagram from './instagram.png';
import logo from './gwc.png';
import neu from './neu.png';
import calendar from './calendar.png';
import clock from './clock.png';
import location from './location.png';
import ccis from './ccis.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Team-Header"> 
          Meet the GWC Team
        </div>
        <div className="People">
          <Person name="Louisa Beckwith" title="Undergraduate" pic={coverphoto} git="github.com/carmen52" 
                  email="beckwith.l@husky.neu.edu" link="test"/>
        </div>
      </div>
    );
  }
}

// Tab item
class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value:this.props.text, showText:true, color:'#afcaff'}
    this.hoverOn= this.hoverOn.bind(this)
    this.hoverOff= this.hoverOff.bind(this)
 
    this.color 
  }

  render() {
    return (
      <button className="square" 
        onClick={this.props.click}
        onMouseOver={this.hoverOn} onMouseOut={this.hoverOff} >
        <div>
            <div >
                {this.state.value} 
            </div>
        </div>
      </button>
    );
  }

  hoverOn() {
    this.setState({ value: this.props.text, showText:true, color:"#080350"});
  }

  hoverOff() {
    this.setState({ value: this.props.text, showText:false, color:"#fff"});
  }
}


// Homepage Header
class Header extends Component {

  constructor(props) {
    super(props);
    this.Contact = React.createRef();
  }

  onPeopleClick() {}

  onContactClick() {
  }

  render() {
    return (
      <div className="App-header">

        <div className="left-header" >
          <img className="logo" src={logo} height="70px" width="110px" alt="homepage logo" />
          <span className="title" >
            supporting and engaging women in tech
          </span>
        </div>
         <div className="tab-row">
          <Square text="contact" click={this.onContactClick} />
          <Square text="team" click={this.onPeopleClick} />
          <Square text="events" click={this.onPeopleClick} />
          <Square text="blog" click={this.onPeopleClick} />
          <Square text="job postings" click={this.onPeopleClick} />
          <Square text="gallery" click={this.onPeopleClick} />
         </div>
      </div> 
    );
  }
}

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { name:this.props.name, title:this.props.title, pic: this.props.pic,
                  email: this.props.email, git: this.props.git, link: this.props.link}
    
    
  }

  displayItem(item) {
    if (item.length > 0) {
      return true; 
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div className="Person dark-background" >
        <div className="person-item">
          <img className=" profile" src={this.state.pic} height="70px" width="110px" alt="person profile" />
        </div>
        <div className="person-item person-name"> {this.state.name} </div>
        <div className="person-item person-title"> {this.state.title} </div>
        <div className="person-item person-contact-items" >
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.email)}>
                <a href={"mailto:" + this.state.email}> 
                <img className="person-email" src={email}
                height="20px" width="20px" float="left" alt="email link"/>
                </a>
            </div>
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.git)}>
                <a href={this.state.git}> 
                <img className="person-git" src={git}
                height="20px" width="20px" float="left" alt="git link"/>
                </a>
            </div>
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.link)}>
                <a href={this.state.link}> 
                <img className="person-link" src={facebook}
                height="20px" width="20px" float="left" alt="linkedin link"/>
                </a>
            </div>
        </div>
      </div>
    ); 

  }


}

export default App;
