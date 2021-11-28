import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col} from 'reactstrap';
import { faSort, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Controls = (props) => {
    return (
        <Col md="4" sm="12" className="border border-light shadow pt-4 pb-4">
            <h4>Controls</h4>
            <div className="p-3">
                <button onClick={() => props.handleAscOrderOnClick()} className="btn btn-primary">
                    Ascending Order
                </button>
                <button onClick={() => props.handleDescOrderOnClick()} className="btn btn-primary ml-3">
                    Descending Order
                </button>
                <button icon={faSort} onClick={() => props.submitCardDetails()} className="mt-3 btn btn-outline-primary btn-block">
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" className="pr-2" />Submit
                </button>
            </div>
        </Col>
    )
}

export default Controls