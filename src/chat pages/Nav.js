import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = ( {filterItems, chatCategory} ) => {

    return (
        <nav className= 'navbar'>
            <ul>
                {chatCategory.map((category,id) => {
                    return(
                        <Link to= {`/${category}`} onClick={() => filterItems(category)}>
                            <li className= "chatcategory" key={id}>
                            {category}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Nav;