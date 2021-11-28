import React, { useEffect } from 'react';
import { Col, Row  } from 'reactstrap';
import AOS from 'aos';

const HidingDetails = (props) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
          });
    }, [])

    return (
        <Row>
            <Col md="12" className="mt-3" data-aos="fade-right">
                <div className="card">
                    <div className="card-body text-center">
                        <p><img className="img-fluid" src={props.selectedDetail.icon} alt="card image" style={{ width: '50%' }} /></p>
                        <h6 className="card-title font-weight-bold">{props.selectedDetail.realName}</h6>
                        <p className="card-text">{props.selectedDetail.playerName}</p>
                        <p className="card-text">{props.selectedDetail.asset}</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default HidingDetails