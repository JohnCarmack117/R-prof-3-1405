import React from 'react';
import PropTypes from 'prop-types';

import PushToggle from '../PushToggle/PushToggle.jsx';

import { Link } from 'react-router-dom';
import ProfileIcon from 'material-ui/svg-icons/social/person-outline';

import './style.css';


export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    static defaultProps = {
        chatId: "Emptiness"
    };

    render() {
        return(
            <div>
                <PushToggle />
                <div className="header">
                    <h1> { this.props.chatId } </h1>
                    <Link to = "/profile/">
                        <button className = "button profileBtn"> 
                            <ProfileIcon color = "rgb(99, 146, 148)" hoverColor = "rgb(6, 121, 159)" /> 
                        </button>
                    </Link>
                </div>
            </div>
        );
    };
};