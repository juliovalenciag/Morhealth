import React from 'react'

const Menu = () => {

    const posts = [
        {
            id:1,
            title: "lorem psum",
            desc: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        },
        {
            id:1,
            title: "lorem psum",
            desc: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        },
        {
            id:1,
            title: "lorem psum",
            desc: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        }
    ]

  return (
    <div>
      <h1>Otros posts que te pueden interesar</h1>

      {posts.map(post=>(
        <div className="post">
            <img src={post.img} alt=''/>
            <h2>{post.title}</h2>
            <button>Leer más</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
