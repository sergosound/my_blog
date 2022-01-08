import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    pulse: PropTypes.bool,
    children: PropTypes.node,
};

export default Button;
