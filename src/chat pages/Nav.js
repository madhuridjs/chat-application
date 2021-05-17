import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = ( {filterItems, chatCategory} ) => {

    return (
        <nav className= 'navbar'>
            <ul className= 'nav_chat'>
                {chatCategory.map((category,id) => {
                    return(
                        <div>
                        <Link to= {`/${category}`} onClick={() => filterItems(category)} className='link'>
                            <li className= 'chatcategory' key={id}>
                            {category}
                            </li>
                        </Link>
                        </div>
                        
                    )
                })}
            </ul>
        </nav>
    )
}
export default Nav;