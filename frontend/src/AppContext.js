import { createContext } from 'react';

export const AppContext = createContext({ authorized: false, setAuthorized: null });
