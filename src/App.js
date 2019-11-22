import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import GetInvolved from './Pages/GetInvolved';
import ContactUs from './Pages/ContactUs';
import NeedAssistance from './Pages/NeedAssistance';
import FindClinics from './Pages/FindClinics';
import Donate from './Pages/Donate';
import BlogHome from './Pages/BlogHome';
import BlogPost from './Pages/BlogPost';
import AssistanceForm from './Pages/AssistanceForm';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from './ScrollToTop';
import Media from './Pages/Media';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className='arcsoutheast-app'>
          <Header/>
          <div className='body'>
            <section className='section routing'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/media' component={Media} />
                <Route exact path='/get-involved' component={GetInvolved} />
                <Route exact path='/contact-us' component={ContactUs} />
                <Route exact path='/need-assistance' component={NeedAssistance} />
                <Route exact path='/support-request' component={AssistanceForm} />
                <Route exact path='/find-clinics' component={FindClinics} />
                <Route exact path='/donate' component={Donate} />
                <Route exact path='/blog' component={BlogHome} />
                <Route exact path='/:blogTitle/:blogId' render={(props) => <BlogPost {...props} />} />
                <Route path='*' component={NotFound} />
              </Switch>
            </section>
          </div>
          <Footer/>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
