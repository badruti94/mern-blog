import React from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components/atoms'
import './detailBlog.scss'
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper" >
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title" >Title</p>
            <p className="blog-author" >Author - Date Post</p>
            <p className="blog-body" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis veniam mollitia ducimus sequi sed reiciendis dolorem ab dolores aspernatur sunt dolorum minus doloremque autem pariatur recusandae, maiores porro incidunt in!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis odio at et placeat officiis inventore delectus molestiae? Totam iusto recusandae praesentium omnis quod quibusdam sunt dolorem labore, dolore dicta!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae quos similique numquam consequatur laborum minus natus amet obcaecati eum veniam quam, nisi deleniti, placeat cum expedita nesciunt odit dicta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae magni harum quisquam provident impedit deserunt consequatur deleniti, sunt laboriosam maiores asperiores eveniet nemo dolorem enim! Voluptatum reprehenderit consectetur recusandae!
            </p>
            <Gap height={20} />
            <Link title="Kembali ke Home" onClick={()=>{history.push('/')}} />
        </div>
    )
}

export default DetailBlog
