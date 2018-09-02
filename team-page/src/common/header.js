import React from 'react';
import ReactDOM from 'react-dom';
import logo from './gwc.jpeg'; 
import facebook from './fb.png';
import email from './email.png';
import git from './git.svg';
import ccis from './ccis.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

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
  export class Header extends React.Component {
  
    constructor(props) {
      super(props);
      this.Contact = React.createRef();
    }
  
    onEventsClick() {
      window.open("http://Grad-Women-Coders.github.io/events","_self");
    }

    onGalleryClick() {
        window.open("http://Grad-Women-Coders.github.io/gallery","_self");
    }
  
    onJobPostingsClick() {
      window.open("http://Grad-Women-Coders.github.io/jobs","_self");
    }

    onBlogClick() {
      window.open("http://Grad-Women-Coders.github.io/blog","_self");
    }
  
    onTeamClick() {
      window.open("http://Grad-Women-Coders.github.io/team","_self");
    }
  
    onContactClick() {
      window.open("http://Grad-Women-Coders.github.io/contact","_self");
    }

    onHomeClick() {
        window.open("http://Grad-Women-Coders.github.io/","_self");
    }
  
    render() {
      return (
        <div className="App-header">
          <div id="title-mobile" className="title-mobile header-el" >
              NU Graduate Women Coders
          </div>
          <div className="left-header header-el" >
            <img className="logo" src={logo} alt="homepage logo" />
          </div>
          <div id="title" className="title header-el" >
              supporting and engaging women in tech
          </div>
           <div className="tab-row header-el ">
            <Square text="home" click={this.onHomeClick} />
            <Square text="contact" click={this.onContactClick} />
            <Square text="team" click={this.onTeamClick} />
            <Square text="events" click={this.onEventsClick} />
            <Square text="gallery" click={this.onGalleryClick} />
            <Square text="blog" click={this.onBlogClick} />
            <Square text="job postings" click={this.onJobPostingsClick} />
           </div>
        </div> 
      );
    }
  }

  // Footer for all pages
export class Footer extends React.Component {
    render() {
      return(
        <div className="footer second-color">
          <div className="footer-events column" >
            <a href="https://www.facebook.com/groups/GradWomenCoders" className="orange" > Upcoming Events </a>
            <span className="no-upcoming-events" hidden={false}> Check back soon! </span>
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
