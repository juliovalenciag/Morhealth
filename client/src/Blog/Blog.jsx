import React from 'react'
import BlogNavbar from '../components/pagecomponents/BlogNavbar';
import { Link } from 'react-router-dom';

const Blog = () => {

    const posts = [
        {
            id: 1,
            title: "lorem psum",
            desc: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        },
        {
            id: 1,
            title: "lorem psum",
            desc: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        },
        {
            id: 1,
            title: "lorem psum",
            desc: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        }
    ]
    return (
        <>
            <BlogNavbar />
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="posts">
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="img" >
                                <img src={post.img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"/>
                            </div>
                            <div className="content">
                                <Link to={`post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                    <p>{post.desc}</p>
                                    <button>Leer más</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}

export default Blog
