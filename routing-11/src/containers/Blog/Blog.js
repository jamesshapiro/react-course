import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'
//import FullPost from './FullPost/FullPost'

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
    }

    render() {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                to="/posts/">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                {/* Note: the switch statement here is technically unnecessary. */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;