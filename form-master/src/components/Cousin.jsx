import React from 'react';
import Special from './Special';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            {name}
            <section>
                {asset && <Special asset={asset}></Special>}
            </section>
        </div>
    );
};

export default Cousin;