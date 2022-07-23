import {useState} from 'react';
import BlogList from './BlogList';
import posts from './posts.json';


const Home = () => {
    const [inputText, setInputText] = useState("");
    const [blogs, setBlogs] = useState(posts);

    const inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    
    return (
        <div className="home">
            <h1>Home</h1>
            <br></br>
            <form className="search-blog">
                <input type="text" placeholder="Search blog..." onChange={inputHandler}/>
            </form>
            <BlogList inputText={inputText} blogs={blogs}/>

      </div>
    );
}

export default Home;