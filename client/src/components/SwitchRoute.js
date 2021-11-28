import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import CardDetailsIndex from './cardDetails'
import { LOAD_APP } from '.././components/routes/routesConstant';

const SwitchRoute = () => {
    return (
        <div>
            <Switch>
                {/* Define all routes */}
                <Route exact path={LOAD_APP} component={CardDetailsIndex} />
            </Switch>
        </div>
    );
}
export default SwitchRoute