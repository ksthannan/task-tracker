import React from 'react'
import SingleTask from './SingleTask'

export default function Task() {
    return (
        <div className="task-main">
            <SingleTask title="Task number one" date="Thursday, 02 Dec, 2021" active="true"/>
            <SingleTask title="Task number two" date="Thursday, 02 Dec, 2021" active="true"/>
            <SingleTask title="Task number three" date="Thursday, 02 Dec, 2021" active="false"/>
            <SingleTask title="Task number three" date="Thursday, 02 Dec, 2021" active="false"/>
            <SingleTask title="Task number three" date="Thursday, 02 Dec, 2021" active="true"/>
            <SingleTask title="Task number three" date="Thursday, 02 Dec, 2021" active="false"/>
        </div>
        
    )
}
