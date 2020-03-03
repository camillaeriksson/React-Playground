import React, { CSSProperties } from 'react';
import { PushSpinner } from "react-spinners-kit";
import { centeredContent, fullScreen } from '../css';

export default function () {
    return (
        <div style={{ ...centeredContent, ...fullScreen }}>
            <PushSpinner size={30} color="#686769" />
        </div>
    );
}

const appearance: CSSProperties = {
    color: 'white',
    fontSize: '1.5em'
}