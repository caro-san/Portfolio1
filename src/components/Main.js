import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Contact" component={Contact}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>

    </Switch>

)

export default Main;