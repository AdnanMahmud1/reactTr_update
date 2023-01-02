import React from 'react';

function Title({ title }) {
    console.log(`Title ${title} rendering`);
    return <h1>{title}</h1>;
}

export default React.memo(Title);
