import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import '../../App.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux__appli/action/auth';

const Navbar = ({ isauth: { isAuthenticated, load }, logout }) => {
// 9604554515
    const authlink = (
        <ul>
            <li>
                <Link to="/profiles"><i class="fa-brands fa-connectdevelop"></i>{' '}Developers
                </Link>
            </li>

            <li>
                <Link to="/posts"><i class="fa-light fa-signs-post"></i>{' '}Posts
                </Link>
            </li>

            <li>
                <Link to="/dashb">
                    <i className="fas fa-user" />{' '}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const glink = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to='/reg'>Register</Link>
            </li>
            <li>
                <Link to='/log'>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'><i className="fas fa-code" /> DevConnector</Link>
            </h1>
            <Fragment>{isAuthenticated ? authlink : glink}</Fragment>
        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    isauth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isauth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);