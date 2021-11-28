import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card } from 'reactstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Controls from '../employeeControls';
import { getEmployee, addUser } from '../../actions/userActions';
import HidingDetails from '../employeeData';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const Details = () => {

    const [error, setError] = useState('');
    const [isGetting, setIsGetting] = useState(false)
    const [employeeDetail, setEmployeeDetail] = useState([]);
    const [selectedDetail, setSelectedDetails] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        setIsGetting(true)
        const resp = await getEmployee()
        if (resp.success) {
            setIsGetting(false)
            setEmployeeDetail(resp.success.payload)
        }
        else {
            setError(resp.success.success)
        }
    }

    const handleAscOrderOnClick = () => {
        const ascendingOrder = employeeDetail.sort((x, y) => x.realName.localeCompare(y.realName))
        setEmployeeDetail([...ascendingOrder])
    };

    const handleDescOrderOnClick = () => {
        const dscendingOrder = employeeDetail.sort((x, y) => y.realName.localeCompare(x.realName))
        setEmployeeDetail([...dscendingOrder])
    };

    const submitCardDetails = async () => {
        const resp = await addUser()
        if(resp){
            NotificationManager.success("Data save successfully")
        }
    }

    const employeeInformation = () => {
        return employeeDetail.map((user, idx) => {
            return (
                <Col key={idx} md="4" className="mt-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <p><img className="img-fluid" src={user.icon} alt="card image" style={{ width: '50%' }} /></p>
                            <h6 className="card-title text-left font-weight-bold card_text">{user.realName}</h6>
                            <p className="card-text text-left card_text">{user.playerName}</p>
                            <p className="card-text text-left card_text">{user.asset}...</p>
                            <button className="main-bg-color btn-sm text-white border-0" onClick={() => setSelectedDetails(user)}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </Col>
            )
        })
    }
    return (
        <Container className="mt-5">
            <Row>
                <Col md="6" sm="12">
                    {Object.entries(selectedDetail).length > 0 ? <HidingDetails selectedDetail={selectedDetail} /> : <img className="ml-4 pl-5" src="https://pbs.twimg.com/profile_images/972241213825970176/NjyjESe5_400x400.jpg" style={{ width: '50%' }} />}
                </Col>
                <Controls handleAscOrderOnClick={handleAscOrderOnClick} handleDescOrderOnClick={handleDescOrderOnClick} submitCardDetails={submitCardDetails} />
            </Row>
            <Row className="mt-5">
                <Col md="6" sm="12">
                    <h4>Overview</h4>
                    <Row>
                        {isGetting ? '' : employeeInformation()}
                    </Row>
                </Col>
            </Row>
            <NotificationContainer/>
        </Container>
    )
}

export default Details