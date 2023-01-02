import React from 'react';

function Input({ type, placeHolder }, ref) {
    return <input ref={ref} type={type} placeholder={placeHolder} />;
}
const forwarded = React.forwardRef(Input);
export default forwarded;
