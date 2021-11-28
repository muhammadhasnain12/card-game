import React, { useState, useEffect } from 'react';
import AppNavbar from './AppNavbar';

const Container = (props) => {
    const [content, setContent] = useState(null)
    useEffect(() => {
        update_container_content()
    }, [])

    const update_container_content = () => {
        setContent(props.children)
    }
    return (
        <div className="m-0 p-0">
            <AppNavbar />
            <div>
                {/* <!-- Content area --> */}
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Container;