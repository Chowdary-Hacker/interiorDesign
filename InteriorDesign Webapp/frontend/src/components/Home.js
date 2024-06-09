import { RiRewindStartFill } from "react-icons/ri";
import bgimg from '../images/interior-design-of-a-house-1571460.jpg'; import logo from '../images/logo.png'; import { MdReviews } from "react-icons/md"; import { IoIosContact } from "react-icons/io"; import { FiLogIn } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom';
import {Link as ScrollLink, Element} from 'react-scroll';
import Designs from "./Designs"; import Mail from "./Mail";
function Home(){
  const nav = useNavigate();
 const thoughts = {"people": [
    {"fullname":"Nattasha Mith", "country":"Sydney, Australia", "thoughts":"Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."},
    {"fullname":"Raymond Glario", "country":"Sydney, Australia", "thoughts":"Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."},
    {"fullname":"Benny Roll", "country":"Sydney, Australia", "thoughts":"Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."}
]}
return(
<div className="App">
<header style={{backgroundColor:'pink'}}>
     <img height="100%" className='loc' src={logo} alt='img'></img>
     
      
    <Link to={'/Designs'}> <span className='corp' style={{paddingLeft:'166px'}}><svg class="_1GTCc" viewBox="0 0 20 20" height="20" width="20" fill="none"><rect x="2.46094" y="7.98145" width="15.0784" height="10.7765" rx="1.52523" stroke="#02060C" stroke-opacity="0.75" fill="none" stroke-width="1.8" stroke-linejoin="round"></rect><path d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z" fill="#02060C" fill-opacity="0.75"></path></svg></span> <span style={{paddingBottom:'1%'}} className='corp'>&nbsp;&nbsp;Designs</span> 
    </Link>
    <ScrollLink
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className='corp'
          style={{ paddingLeft: '6%' }}
        >
          <MdReviews /> &nbsp;Reviews
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className='corp'
          style={{ paddingLeft: '6%' }}
        >
          <IoIosContact />&nbsp;&nbsp;Contact
        </ScrollLink>
     <span className='corp' style={{paddingLeft:'6%'}}><FiLogIn /> &nbsp;&nbsp;<Link>SignIn/SignUp</Link></span>
    
    </header>
<div className="homeNews" style={{ backgroundImage: `url(${bgimg})` }}>
  <h1>Let Your Home Be Unique</h1>
  <p>
    There are many variations of the passages of lorem Ipsum
    fromavailable,variations of the passages.
  </p>

    <button >
    <Link to={'/Designs'} style={{color:'yellow'}}> Get Started </Link> &nbsp;
      <RiRewindStartFill style={{ marginLeft: "2%", color: "#CDA274", transform: 'rotate(180deg)' }} />
    </button> 

</div>
<Element name="contact"></Element><div className="homeOther">
        <div className="homeAboutUs">
            <div className="hp-subtext">
              <h1>Contact Us for your dream house with interior designs to be built</h1>
              <p>
               Happy to visiting our website. Make your house brightful 😊..
              </p>
              <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
            <IoIosContact />
            </p>
              <p style={{color:'blue'}}>
                <span>Submit your query anytime</span><br></br><span>By just clicking bellow button after logged in..</span>
              </p>
            <br />
          </div>
          <Link to={'/Mail'} style={{color:'yellow'}}>
            <button>
           Contact Us &nbsp;
              <RiRewindStartFill style={{ marginLeft: "2%", color: "#CDA274",  transform: 'rotate(180deg)'}} />
            </button>
          </Link>
        </div>
            </div>
            <div className="hp-img">
              <img src="https://i.pinimg.com/originals/77/99/78/7799782f7a572e7587594dc293a05c10.jpg" alt="concept"></img>
            </div>
        </div>
</div> 
<Element name="reviews"></Element><div className="people-thoughts">
  <h1 style={{color:'red'}}>Reviews</h1>
          <h1 style={{color:'green'}}>What People Think About Us</h1>
          <div className="people">
            {thoughts.people.map((req, ind) => {
              return (
                <div className="person" key={ind}>
                  <div className="person-title">
                    <div>
                      <img src={req.pic} alt="customer"></img>
                    </div>
                    <p>
                      {req.fullname}
                      <br />
                      <span>{req.country}</span>
                    </p>
                  </div>
                  <p className="thought">{req.thoughts}</p>
                </div>
              );
            })}
          </div> <br></br><Link style={{marginLeft:'33%'}}>Show all reviews</Link>  
          <button style={{backgroundColor:'black', color:'yellow', marginLeft:'21%'}}>
              Write a comment &nbsp;
              <RiRewindStartFill style={{ marginLeft: "2%", color: "#CDA274",  transform: 'rotate(180deg)'}} />
            </button>
        </div>
        <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>We provide top-notch interior design services to make your home or office space look stunning.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@interiordesign.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
</div>
);
}
export default Home;