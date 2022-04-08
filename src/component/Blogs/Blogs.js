import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question'>
            <h2 className='text-green-400'>What is contex api ?</h2>
            <h4 className='mb-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h4>
            <h2 className='text-green-400'>What is simantic tag?</h2>
            <h4>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.</h4>
        </div>
    );
};

export default Blogs;