import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import Login from "../pages/Login";
import Event from "../pages/Event";

const AppRouter = () => {
    const auth = true
    return (
        auth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
                <Route path="*" element={<Event />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
                <Route path="*" element={<Login />} />
            </Routes>
    );
};

export default AppRouter;
