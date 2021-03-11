import React from 'react'
import {RegisterBg} from '../../../assets'
import './blogItem.scss'
import {Button, Gap} from '../../atoms'
import { useHistory } from "react-router-dom";

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className="blog-item" >
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail" >
                <p className="title" >Title</p>
                <p className="author" >Author - Date post</p>
                <p className="body" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel natus eum nobis placeat eveniet enim totam dolorem maxime? Aspernatur, non neque quisquam cupiditate distinctio dolorum aperiam veritatis doloremque aliquam!</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={()=>{history.push('/detail-blog')}} />
            </div>
        </div>
    )
}

export default BlogItem
