import React, {FC, useEffect} from 'react';
import AppRouter from "./componetns/AppRouter";
import Navbar from "./componetns/Navbar";
import {Layout} from "antd";
import './App.css'
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App: FC = () => {

    const {setUser, setIsAuth} = useActions()

    useEffect(()=> {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    },[])

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;
