"use client";
import React from 'react'
import store from './Store'
import { Provider } from 'react-redux';

const Prvider = ({ children }) => {
  return (
    
    // Wraping up Application under redux-state using Provider
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Prvider