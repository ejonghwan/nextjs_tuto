import React, { useState, useEffect } from 'react';
import firebase from '@/libs/firebase';
import { useGlobalData } from '@/hooks/useGlobalContext';

const Login = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Error, setError] = useState('');

    const handleLogin = async e => {
        if(!Email && !Password) return alert('값을 모두 채워주세요')
        try {
            await firebase.auth().signInWithEmailAndPassword(Email, Password);
            alert('로그인 되었습니다')
        } catch(err) {
            console.log('err??', err)
            if(err.code === 'auth/user-not-found') setError('not find email')
            else if(err.code === 'auth/wrong-password') setError('password not matched')
            else setError('login failue')
        }
    }

    return (
        <div>
            <input type="email" value={Email} onChange={e => setEmail(e.target.value)} />
            <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>login</button>
            <p>{Error}</p>
        </div>
    );
};

export default Login;