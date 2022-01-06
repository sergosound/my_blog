import React from 'react';

const Button = ({ small, large, disabled, flat, pulse, children }) => {
    const size = small && 'btn-small' || large && 'btn-large' || '';
    const d = disabled && 'disabled' || '';
    const f = flat && 'btn-flat' || '';
    const p = pulse && 'pulse' || '';

    return (
        <a className={`waves-effect waves-light btn ${size}${d}${f}${p}`}>
            {children}
        </a>
    );
};

export default Button;
