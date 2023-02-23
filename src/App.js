import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import { useSelector } from 'react-redux';

export function App() {
  const LoginId = useSelector(state => state.loginId);
  const Name = useSelector(state => state.name);

    return (
        <div>
            <h1>React Redux App loginId {LoginId} Name is {Name}</h1>
            <Component1/>
            <Component2/>
        </div>
    );
}