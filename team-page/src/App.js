import React, { Component, ReactComponent } from 'react';
import coverphoto from './cover_photo.jpg';
import coverphoto_team from './cover_photo_team.jpg';
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
import person_email from './person_email.png';
import person_git from './person_git.png';
import person_linkedin from './person_linkedin.png';
import person_1 from './person_1.jpg';
import person_2 from './person_2.jpg';
import person_3 from './person_3.jpg';
import person_4 from './person_4.jpg';
import vander_laan from './vander_laan.jpg';
import jamel from './jamel.jpg';
import hodgkin from './hodgkin.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hidePhoto:true}
    this.hoverOn= this.hoverOn.bind(this)
    this.hoverOff= this.hoverOff.bind(this)
  }
  
  hoverOn() {
    this.setState({hidePhoto:true});
  }

  hoverOff() {
    this.setState({hidePhoto:true});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Team-Header_">      
          <div className="team-cover-text" onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
          Meet the GWC Team
          </div>
          <img className="coverphototeam" src={coverphoto_team} alt="cover photo of team" hidden={this.state.hidePhoto} />
        </div>
        <div className="People">
          <Person name="Victoria Plange" title="President" pic={person_1} git="github.com/carmen52" 
                  email="beckwith.l@husky.neu.edu" link="test"/>
          <Person name="Deesha Shah" title="Web Chair" pic={person_2} git="github.com/carmen52" 
                  email="beckwith.l@husky.neu.edu" link="test"/>
          <Person name="Han Fu" title="Treasurer" pic={person_3} git="github.com/carmen52" 
                  email="beckwith.l@husky.neu.edu" link="test"/>
          <Person name="Kamala Nayana" title="Vice President" pic={person_4} git="github.com/carmen52" 
                  email="beckwith.l@husky.neu.edu" link="test"/>
          <Person name="Dean Doreen Hodgkin" title="Mentor" pic={hodgkin} git="" 
                  email="beckwith.l@husky.neu.edu" link=""/>
          <Person name="Kathi Vander Laan" title="Advisor" pic={vander_laan} git="" 
                  email="beckwith.l@husky.neu.edu" link=""/>
          <Person name="Nada Aladdin Jamel" title="Advisor" pic={jamel} git="" 
                  email="beckwith.l@husky.neu.edu" link=""/>
        </div>
        <Footer/>
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

class Footer extends Component {
  render() {
    return(
      <div className="footer second-color dark-background">
        <div className="footer-events column" >
          <span className="orange" > Upcoming Events </span>

        </div>
        <div className="footer-name column orange">
          <span className="block footermark" > © NU Grad Women Coders 2018 </span>
          <img className="footerlogo block" src={ccis} alt="ccis logo" />
        </div>
        <div className="footer-contact column">
          <span className="orange" > Contact Us </span>
          <div className="footercontact" display="inline-block">
            <div className="contactitem small">
              <a href="mailto:nugradwomencoders@gmail.com"> 
                    <img className="" src={email} height="40px" width="40px" float="left" alt="email link"/>
              </a>
            </div>
            <div className="contactitem small">
              <a href="https://www.facebook.com/groups/GradWomenCoders/"> 
                    <img className="" src={facebook} height="40px" width="40px" float="left" alt="facebook link"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { name:this.props.name, title:this.props.title, pic: this.props.pic,
                  email: this.props.email, git: this.props.git, link: this.props.link, 
                  iconsize: "", bigprofile: ""}
    
    this.hoverAction = this.hoverAction.bind(this); 
    this.hoverOut = this.hoverOut.bind(this); 
    this.email = React.createRef();
  }

  hoverAction() { 
    this.setState({
      iconsize: "big-icons", 
      bigprofile: "big-profile"
    });
  }

  hoverOut() {
    this.setState({
      iconsize: "", 
      bigprofile: ""
    });
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
      <div className="Person dark-background blue-color" onMouseOver={this.hoverAction} onMouseOut={this.hoverOut}>
        <div className="person-item">
          <img className={this.state.bigprofile + " profile"} src={this.state.pic}  alt="person profile" />
        </div>
        <div className="person-item person-name"> {this.state.name} </div>
        <div className="person-item person-title"> {this.state.title} </div>
        <div className="person-item person-contact-items" >
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.email)}>
                <a href={"mailto:" + this.state.email}> 
                <img className={this.state.iconsize + " person-img person-email"} src={person_email} alt="email link"/>
                </a>
            </div>
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.git)}>
                <a href={this.state.git}> 
                <img id="git" className={this.state.iconsize + " person-git person-img"} src={person_git} alt="git link"/>
                </a>
            </div>
            < div className="person-contact-item"  hidden={!this.displayItem(this.state.link)}>
                <a href={this.state.link}> 
                <img id="link" className={this.state.iconsize + " person-link person-img"} src={person_linkedin} alt="linkedin link"/>
                </a>
            </div>
        </div>
      </div>
    ); 

  }


}

export default App;
