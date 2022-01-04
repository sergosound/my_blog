import React, { createContext, useCallback, useMemo } from 'react';
import { PopupService } from '../services';

const defaultValue = {
    show: () => {
        throw new Error('There is no suitable provider for PopupService');
    },
    hide: () => {
        throw new Error('There is no suitable provider for PopupService');
    },
};

export const Context = createContext(defaultValue);
Context.displayName = 'PopupContext';

const PopupProvider = ({ children }) => {
    const show = useCallback(() => {
        console.log('show');
    }, []);

    const hide = useCallback(() => {
        console.log('hide');
    }, []);

    const value = useMemo(() => {
        const context = { show, hide };
        PopupService.setContext(context);

        return context;
    }, [show, hide]);

    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    )
};

export default PopupProvider;
