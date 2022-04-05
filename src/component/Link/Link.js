import React from 'react';

const Link = (props) => {
    let { name, link } = props.route
    return (
        <li className='mr-20 mt-3'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;