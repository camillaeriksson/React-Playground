import React from 'react';
import { WaveSpinner } from "react-spinners-kit";
import { centeredContent, fullScreen } from '../css';

export default function () {
    return (
        <div style={{ ...centeredContent, ...fullScreen }}>
            <WaveSpinner size={30} color="#686769" />
        </div>
    );
}
