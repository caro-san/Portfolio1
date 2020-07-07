import React, { Fragment } from 'react';
import { Layout, Navigation, Drawer, Content, Header } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
//import Footer from './components/layout/Footer';

import './App.css';

function App() {
    return (
    <Fragment>
            <div className="demo-big-content">
    <Layout>
        <Header className="nav-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/Home">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color:'#27221f'}} to="/Home">My Portfolio</Link>}>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
        </Fragment>
    );
}

export default App;
