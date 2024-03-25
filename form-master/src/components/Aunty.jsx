import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Mia vai'}></Cousin>
                <Cousin name={'Ashadali'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;