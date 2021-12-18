import React, { Component } from 'react'
import { FaInstagram, FaFacebook, FaMapPin } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'

class NavbarIcons extends Component {
    state = {
        icons: [
            { id: 1, icon: <FaMapPin className="icon map-icon" />, path: `https://g.page/Cemut?share` },
            { id: 2, icon: <FaInstagram className="icon instagram-icon" />, path: `https://www.instagram.com/cemut.osteria.furlana` },
            { id: 3, icon: <FaFacebook className="icon facebook-icon" />, path: `https://www.facebook.com/CEMUTTRIESTE` }
        ],
    }
    render() {
        return (
            <IconWrapper>
                {this.state.icons.map(item => (
                    <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                ))}
            </IconWrapper>
        )
    }
}

const IconWrapper = styled.div`
    .icon {
        font-size: 1.3rem;
        cursor: pointer;
        ${styles.transObject({})};
    }
    .facebook-icon {
        color: #3b579d;
    }
    .map-icon {
        color: #8bc34a;
    }
    .instagram-icon {
        color: #da5f53;
    }
    .icon:hover {
        color: ${styles.colors.mainRed};
    }
    display: none;
    @media (min-width: 768px) {
        width: 8rem;
        display: flex;
        justify-content: space-around;
    }
`;

export default NavbarIcons