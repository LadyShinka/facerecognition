import React, { Fragment } from 'react';


const Rank = ({name, entries}) => {
    return (
        <Fragment>
            <div className='white f3'>
            {`${name}, your current entry is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </Fragment>
    );
}

export default Rank;