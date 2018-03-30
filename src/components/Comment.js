import React, { Component } from 'react'
import Gitment from 'gitment'

import config from '../private-config.js';
import 'gitment/style/default.css'

class Comment extends Component {

    constructor(porps) {
        super(porps)
    }

    componentDidMount() {
        var gitment = new Gitment({
            id: '页面 ID', // 可选。默认为 location.href
            owner: 'chuiliu',
            repo: 'blog-gitment-comments',
            oauth: {
                client_id: config.gitment.client_id,
                client_secret: config.gitment.client_secret,
            },
        })
        gitment.render('gitment-wrapper')
    }

    render() {
        return (
            <div id="gitment-wrapper"></div>
        )
    }
}

export default Comment;
