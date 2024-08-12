import { Route, Routes } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Error } from './pages/Error';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Signin />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/error' element={<Error />} />
        </Routes>
    )
}