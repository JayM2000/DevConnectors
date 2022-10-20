import React from 'react'
import PropTypes from 'prop-types'

const Profiletop = ({ proff: {
    status,
    company,
    location,
    website,
    social,
    owner: { name, avatar },
    avtt
} }) => {
    const dd = 'https://firebasestorage.googleapis.com/v0/b/devopss-61796.appspot.com/o/defaults%2Favtr.png?alt=media&token=9913e6ef-c10c-4e1d-a505-572f04867343';
    return (
        <div className="profile-top bg-primary p-2">

                <div className="bg-image hover-overlay hover-zoom hover-shadow ripple">
                    <a href={avtt ? avtt : dd} target="_blank">
                        <img width="50" height="270" sizes='100' src={avtt ? avtt : dd} alt='image' className='round-img' />
                    </a>
                </div>

            
            <h1 className="large">{name}</h1>
            <p className="lead">{status} {company ? <span> at {company} </span> : null}</p>
            <p>{location ? <span>{location}</span> : null}</p>
            <div className="icons my-1">
                {
                    website ? (
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-globe fa-2x"></i>
                        </a>
                    ) : null}

                {
                    social
                        ? Object.entries(social)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                                <a
                                    key={key}
                                    href={value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fab fa-${key} fa-2x clickk`}></i>
                                </a>
                            ))
                        : null}
            </div>
        </div>
    )
}

Profiletop.propTypes = {
    proff: PropTypes.object.isRequired
}

export default Profiletop;