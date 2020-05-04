import React from 'react';
import {Link} from 'react-router-dom';




const HomeWhoWeHelp = () => {

    return (
        <>
            <section id="foundationAndOrganization" className="foundation">
                <div className="container">
                    <h2 className="foundation__title">Komu pomagamy?</h2>
                    <ul className="foundation__list">
                        <li className="foundation__item"><Link to="/foundation">Fundacjom</Link></li>
                        <li className="foundation__item"><Link to="/organization">Organizacjom pozarządowym</Link></li>
                        <li className="foundation__item"><Link to="local/collection">Lokalnym zbiórkom</Link></li>
                    </ul>
                    <p className="foundation__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>

                </section>
        </>
    )
}

export default HomeWhoWeHelp