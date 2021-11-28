import React from 'react';
import { Navbar, Container } from 'reactstrap';
import { LOAD_APP } from '../routes/routesConstant';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AppNavbar = () => {
    return (
        <div>
            <div>
                <Navbar dark expand="sm" className="main-bg-color">
                    <Container>
                        <div to={LOAD_APP} className="text-white">
                            <FontAwesomeIcon size="lg" icon={faHome}/>
                            <span className="pl-2">Digitalization Platform (beta)</span>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default AppNavbar;