import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

export default function SingleTask({title, date, active}) {
    return (
        <div className={active === 'true' ? 'task-single active' : 'task-single disabled'}>
            <h4 className="task_title">{title} </h4> 
            <p className="task_date"> {date}</p>
            <span className="task_close"><FaWindowClose /></span>
        </div>
    )
}
