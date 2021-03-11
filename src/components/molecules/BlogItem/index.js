import React from 'react'
import {RegisterBg} from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item" >
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail" >
                <p className="title" >Title</p>
                <p className="author" >Author - Date post</p>
                <p className="body" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel natus eum nobis placeat eveniet enim totam dolorem maxime? Aspernatur, non neque quisquam cupiditate distinctio dolorum aperiam veritatis doloremque aliquam!</p>
            </div>
        </div>
    )
}

export default BlogItem