import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{

  
  render(){
    return (
      <div className="App">
        <div className="wrap">
        <header id="header">
            <div className="container-fluid">
                <div className="col-md-12">
                    <button id="primary-nav-button" type="button">Menu</button>
                    <div className="logo">
                        <a href="index.html"><img src="img/white-logo.png" style={{width: 140, height:70, marginTop:20}}/></a>
                    </div>
                    <nav id="primary-nav" className="dropdown cf">
                        <ul className="dropdown menu">
                            <li className='active'><a href="index.html">Leave a Message</a></li>
                            <li><a href="#">Home</a>                                                      </li>
                            <li><a href="generic-page.html">About</a></li>
                            <li><a href="contact-page.html">Contact Me</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>


    <div className="banner">
        <div className="container-fluid">
            <div className="col-md-5 col-sm-5 col-xs-12">
                <div className="left-content">
                    <div className="inside-content">
                        <h4>Hi, My name is Tristiannn. This is my personal website. if you interested. Leave me a message.</h4>
                        <div className="white-border-button">
                            <a href="#">Leave a Message</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12">
                <div className="center-image">
                    <div className="inside-content">
                        <img src="img/center-image.png" alt=""/>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-12">
                <div className="right-content">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <p>“Belajarlah menjadi lembut, tanpa menjadi pengecut, Dan menjadi berani, tanpa lupa rendah hati”</p>
                        </div>
                        <div className="item">
                            <p>“Dalam hidup, tak salah pun kalau kita bersikap lebih rendah dari rumput. dari pada kita bersikap sombong setinggi langit”</p>
                        </div>
                        <div className="item">
                            <p>“Work hard in silence, let your success be your noise”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="template-presentation">
        <div className="container">
            <div className="col-md-7 hidden-xs hidden-sm">
                <div className="left-image">
                    <img src="img/template-image.png" alt=""/>
                </div>
            </div>
            <div className="col-md-5 hidden-xs hidden-sm">
                <div className="right-content">
                    <div className="author-image">
                        <img src="img/template-author.png" alt="" />
                    </div>
                    <h4> I love react, MongoDB, Express.js and Node.js</h4>
                    <div className="blue-button">
                        <a href="#">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-5 hidden-lg hidden-md">
                <div className="right-content">
                    <div className="author-image">
                        <img src="img/template-author.png" alt=""/>
                    </div>
                    <h4>I love react, MongoDB, Express.js and Node.js</h4>
                    <div className="blue-button">
                        <a href="#">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-7 hidden-lg hidden-md">
                <div className="left-image">
                    <img src="img/template-image.png" alt=""/>
                </div>
            </div>
        </div>
    </div>


    <div className="left-right-image">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <h1> Leave a Message</h1>
            <form id="contact-form" method="POST">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" />
              </div>
              <div className="blue-border-button">
              <input type="submit" value="Kirim" className="button-kirim"/>
              </div>
              <h1> MAAF BELOM BISA </h1>
              
            </form>
          </div>
        
           </div>
           </div>
           </div>

    
    )}


  
  
}

export default App;