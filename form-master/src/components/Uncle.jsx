import React from 'react';
import Cousin from './Cousin';

const Uncle = ({ asset }) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Moti Mia'} asset={asset}></Cousin>
                <Cousin name={'Kamal'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;