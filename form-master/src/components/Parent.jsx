import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Parent = ({ asset }) => {
    return (
        <div>
            <h2>Parent</h2>
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Parent;