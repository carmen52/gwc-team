import React, { Component, ReactComponent } from 'react';
import coverphoto from './common/cover_photo.jpg';
import facebook from './common/fb.png';
import email from './common/email.png';
import hackpad from './common/hackpad.png';
import git from './common/git.svg';
import twitter from './common/twitter.png';
import instagram from './common/instagram.png';
import logo from './common/gwc.png';
import neu from './common/neu.png';
import calendar from './common/calendar.png';
import clock from './common/clock.png';
import location from './common/location.png';
import ccis from './common/ccis.png';
import bullet from './common/bulletpoint.png'

import person_email from './person_email.png';
import person_git from './person_git.png';
import person_linkedin from './person_linkedin.png';
import plange from './team_photos/plange.jpeg';
import vyas from './team_photos/vyas.jpg'
import phadate from './team_photos/phadate.png'
import sriramaneni from './team_photos/sriramaneni.jpg'
import bilurkar from './team_photos/bilurkar.jpg'
import shah from './team_photos/shah.jpeg'
import gupta from './team_photos/gupta.jpg'
import yella from './team_photos/yella.jpg'
import vander_laan from './team_photos/vander_laan.jpg';
import jamel from './team_photos/jamel.jpg';
import hodgkin from './team_photos/hodgkin.jpg';

import './App.css';
import './common/header.css';
import {Header, Footer} from './common/header.js'

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        </div>
        <div className="People">
          <Person name="Victoria Plange" title="President" pic={plange} git="" 
                  email="plange.v@husky.neu.edu" link="https://www.linkedin.com/in/victoria-sarah-plange"/>
          <Person name="Namrata Bilurkar" title="Vice President" pic={bilurkar} git="https://github.com/namratab94" 
                  email="bilurkar.n@husky.neu.edu" link=" https://www.linkedin.com/in/namratabilurkar"/>
          <Person name="Anubhuti Vyas" title="Secretary" pic={vyas} git="https://github.com/anubhutivyas" 
                  email="vyas.an@husky.neu.edu" link="https://www.linkedin.com/in/anubhutivyas/"/>
          <Person name="Sravya Yella" title="Treasurer" pic={yella} git="" 
                  email="yella.sr@husky.neu.edu" link="https://www.linkedin.com/in/sravyayella/"/>
          <Person name="Dhanisha Phadate" title="Public Relations I" pic={phadate} git="https://github.com/Phadated" 
                  email="phadate.d@husky.neu.edu" link="https://www.linkedin.com/in/dhanisha-phadate"/>
          <Person name="Pujitha Srimameni" title="Public Relations II" pic={sriramaneni} git="" 
                  email="sriramaneni.p@husky.neu.edu" link="https://www.linkedin.com/in/pujitha-sriramaneni/"/>
          <Person name="Deesha Shah" title="Web Design I" pic={shah} git="https://github.com/deeshashah" 
                  email="" link="https://www.linkedin.com/in/deeshashah/"/>
          <Person name="Ritika Gupta" title="Web Design II" pic={gupta} git="" 
                  email="gupta.ritika@husky.neu.edu" link="https://www.linkedin.com/in/rtkgupta/"/>
          <Person name="Dean Doreen Hodgkin" title="Mentor" pic={hodgkin} git="" 
                  email="d.hodgkin@northeastern.edu" link=""/>
          <Person name="Kathi Vander Laan" title="Advisor" pic={vander_laan} git="" 
                  email="k.vanderlaan@neu.edu" link=""/>
          <Person name="Nada Aladdin Jamel" title="Advisor" pic={jamel} git="" 
                  email="n.naji@northeastern.edu" link=""/>
        </div>
        <div className="team-cover-text team-photo-text">
              Team Photos
          </div>
        <div className="Carousel-div">
          <Carousel showArrows={true}>
              <div>
                <img src={require("./carousel-photos/image1.jpg")} />
                <p className="legend">Organizing Committee Spring 2018 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image2.jpg")} />
                <p className="legend">Organizing Committee Fall 2017 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image3.jpg")} />
                <p className="legend">Organizing Committee Summer 2017 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image4.jpg")} />
                <p className="legend">Organizing Committee Spring 2017 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image5.png")} />
                <p className="legend">Organizing Committee Fall 2016 </p>
              </div>
              <div>
                <img src={require("./carousel-photos/image6.jpg")} />
                <p className="legend">Organizing Committee Summer 2016 </p>
              </div>
          </Carousel> 
        </div>
        <Footer/>
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
