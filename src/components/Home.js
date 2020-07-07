import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from '../images/Photo_2.png';

class Home extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.ibb.co/k9KqRq3/Photo-2.png"
                            alt="Avatar"
                            className="avatar-img"
                            style={{height: '350px'}}
                        />
                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>

                            <hr/>

                            <p>ReactJS | Javascript | Bootstrap4 | HTML5/CSS3 | NodeJS | Git</p>

                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/carolina-sanchez-m/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/*Github*/}
                                <a href="https://github.com/caro-san" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github"  aria-hidden="true" />
                                </a>

                                {/*WhatsApp*/}
                                <a href="https://api.whatsapp.com/send?phone=5491122556251" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-whatsapp"  aria-hidden="true" />
                                </a>

                                {/*Link a my CV*/}
                                <a href="http://deluxe.com.ar/cv/CarolinaSanchez.pdf" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-book"  aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Home;