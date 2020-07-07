import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, IconButton, Card, CardActions, CardMenu, CardTitle, Button, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:'url(https://wallpapercave.com/wp/wp2465923.jpg) center/cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>LiveDemo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://wallpapercave.com/wp/wp2465923.jpg) center/cover'}}>
                        React Project #2
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>LiveDemo</Button>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://wallpapercave.com/wp/wp2465923.jpg) center/cover'}}>
                        React Project #3
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>LiveDemo</Button>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://wallpapercave.com/wp/wp2465923.jpg) center/cover'}}>
                        React Project #4
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>LiveDemo</Button>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Project 5 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://wallpapercave.com/wp/wp2465923.jpg) center/cover'}}>
                        React Project #5
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>LiveDemo</Button>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Project 6 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://wallpapercave.com/wp/wp2465923.jpg) center/cover'}}>
                        React Project #6
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>LiveDemo</Button>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                </div>



            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:'url(https://2.bp.blogspot.com/-qLIArGZuD3k/XJD3H0jVcNI/AAAAAAAAAL8/T6pp2WxF4WkAtW9s9ejelXamgWYydNwUgCEwYBhgL/s1600/bootstrap%2B4.jpeg) center/cover'}}>
                            Bootstrap Project #1
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>LiveDemo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.doowebs.es/wp-content/uploads/2013/03/hml-css.jpg) center/cover'}}>
                            HTML5/CSS3 Project #1
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>LiveDemo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:'url(https://miro.medium.com/max/900/0*UqGyYmWCRQnjLzSk.jpg) center/cover'}}>
                            MERN Project #1
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>LiveDemo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
                    <Tab>ReactJS</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>MERN Stack</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;