import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Photo from '../images/Photo_2.png';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Carolina Sanchez</h2>
                        <img
                            src="https://i.ibb.co/k9KqRq3/Photo-2.png"
                            alt="avatar"
                            style={{height:'350px'}}
                        />
                        {/*}
                        <p style={{width:'75%', margin: 'auto', paddingTop:'1em'}}>There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable.</p>
                        */}
                            </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                {/*Mobile*/}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+54) 9 11 2255-6251
                                    </ListItemContent>
                                </ListItem>

                                {/*Email*/}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        jeyca0115@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                {/*Skype*/}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        ycsanchez1989
                                    </ListItemContent>
                                </ListItem>
                            
                            
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;