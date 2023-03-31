import React from 'react';
import Category  from './../Blog/components/category/Category'
import Card  from './../Blog/components/blog/Card'
import Header from './../Blog/components/header/Header'

const BlogHome = () => {
  return (
    <>
      <Header/>
      <Category/>
      <Card/>
    </>
  )
}

export default BlogHome
