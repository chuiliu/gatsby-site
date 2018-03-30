import React, { Component } from 'react'
import Gitment from 'gitment'
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
                client_id: 'c752b53e245013a24360',
                client_secret: 'e5497957550e9766d337cb496ce9784fa298fa01',
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
