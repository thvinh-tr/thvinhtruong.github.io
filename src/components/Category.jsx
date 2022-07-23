import {Link} from 'react-router-dom'
import { useState } from 'react'

const Category = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'hello this is my new website using react', categories: ["web", "react"], author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'thought about october party', categories: ["party", "entertainment"], author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: '10 tips to become a web dev', categories: ["web", "dev", 'react'], author: 'mario', id: 3 }
    ])
    const categoryFilter = (data) => {
        return blogs.filter(blog => {
            return blog.categories.includes(data);
        });
    }

    const handleCategorize = () => {
        const categoryList = []
        blogs.map(blog => {
            blog.categories.forEach(item => {
                if (!categoryList.includes(item)) {
                    categoryList.push(item);
                }
            })
        })
        return categoryList;
    }

    return (
        <div className="Home">
            <h1>Categories</h1>
            <br></br>
            {handleCategorize().map(item => {
                return (
                    <div className="category" key={item}>
                    <h3>{item}</h3>
                        {categoryFilter(item).map(blog => {
                            return (
                                <div className="category-preview" key={blog.id} >
                                    <Link to={`/blogs/${blog.id}`}>
                                        <p>{ blog.title }</p>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Category;