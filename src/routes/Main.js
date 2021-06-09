import React, { Fragment } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Navigation from '../layouts/Navigation';
import Footer from '../layouts/Footer';
import NotFound from '../screens/NotFound';

import Home from '../screens/home/Index';
import Detail from '../screens/course/detail';

import ProfilIndex from '../screens/profil/index';
import KursusIndex from '../screens/kursus/index';
import InstrukturIndex from '../screens/instruktur/index';
import KursusBaru from '../screens/instruktur/baru';

import Blogs from '../screens/blogs/Index';

class MainRoute extends React.Component {

  state = {
    token: this.props.token
  }

  render() {
    const routesPublic = [
      { path: '/detail', comp: props => <Detail {...props} token={this.props.token} /> },
      { path: '/blogs', comp: props => <Blogs {...props} token={this.props.token} /> },
      { path: '/', comp: props => <Home {...props} token={this.props.token} /> },
    ]

    const routesPrivate = [
      { path: '/detail', comp: props => <Detail {...props} token={this.props.token} /> },
      
      { path: '/kursus-baru', comp: props => <KursusBaru {...props} token={this.props.token} /> },

      { path: '/profil', comp: props => <ProfilIndex {...props} token={this.props.token} /> },
      { path: '/kursus', comp: props => <KursusIndex {...props} token={this.props.token} /> },
      { path: '/instruktur', comp: props => <InstrukturIndex {...props} token={this.props.token} /> },
      
      { path: '/blogs', comp: props => <Blogs {...props} token={this.props.token} /> },
      { path: '/', comp: props => <Home {...props} token={this.props.token} /> },
    ]

    const routes = this.props.token ? routesPrivate : routesPublic

    return (
      <Router>
        <Navigation changeRoute={this.props.changeRoute} token={this.props.token} />

        <Fragment>
          <Switch>
            
            {
              routes.map((item, i) => (
                <Route
                  key={`${item.path}-${i}`}
                  path={item.path}
                  exact={item.path === "/" ? true : false}
                  component={item.comp} />
              ))
            }
            
            {/** Route for 404 */}
            <Route path="/oops" component={props => <NotFound {...props} token={this.props.token} />} />
            <Route render={() => <Redirect to="/oops" />} />

          </Switch>
        </Fragment>

        <Footer />
      </Router>
    )
  }

}

export default MainRoute;
