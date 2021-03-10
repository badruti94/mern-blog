import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home  from '../Home'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import { Footer, Header } from '../../components'


const MainApp = () => {
    return (
        <div>
            <Header />
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
            <Footer />
        </div>
    )
}

export default MainApp
