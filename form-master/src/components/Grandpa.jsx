import React, { createContext } from 'react';
import Parent from './Parent';
import Uncle from './Uncle';
import Aunty from './Aunty';
import './Style.css'

export const AssetContext = createContext('gold')
const Grandpa = () => {
    const asset = 'Diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <AssetContext.Provider value='Gold'>
                <section className='flex'>
                    <Parent asset={asset}></Parent>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;