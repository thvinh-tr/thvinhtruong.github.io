import {Link} from 'react-router-dom'

const BlogList = ({ inputText, blogs}) => {
    const filterList = blogs.filter(blog => {
        if (inputText === "") {
            return blog;
        }
        else {
            return blog.title?.toLowerCase().includes(inputText?.toLowerCase()) || 
            blog.author?.toLowerCase().includes(inputText?.toLowerCase()) ||
            blog.body?.toLowerCase().includes(inputText?.toLowerCase());
        }
    });

    const handleResultNotFound = () => {
        if (filterList.length === 0) {
            return (
                <div className="not-found">
                    <p>No result found</p>
                </div>
            );
        } else {
            return (
                <div className="blog-list">
                    {filterList.map(item => (
                        <div className="blog-preview" key={item.id} >
                            <Link to={`/blogs/${item.id}`}>
                                <h2>{ item.title }</h2>
                                <p>Written by { item.author }</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="blog-list">
            {handleResultNotFound()}
        </div>
    )
}

export default BlogList