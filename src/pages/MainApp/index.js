import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import { Footer, Gap, Header } from '../../components'
import './mainApp.scss'


const MainApp = () => {
    return (
        <div className="main-app-wrapper" >
            <Header />
            <div className="content-wrapper" >
                <Router>
                    <Switch>
                        <Route path="/create-blog" >
                            <CreateBlog />
                        </Route>
                        <Route path="/detail-blog" >
                            <DetailBlog />
                        </Route>
                        <Route path="/" >
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
