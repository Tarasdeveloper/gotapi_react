import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBlock, HeaderLinks, HeaderTitle } from './header.styled';

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">Game of Thrones DB</Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link to="/characters/">Characters</Link>
                </li>
                <li>
                    <Link to="/houses/">Houses</Link>
                </li>
                <li>
                    <Link to="/books/">Books</Link>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;
