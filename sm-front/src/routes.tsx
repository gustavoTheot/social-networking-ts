import { Route, Routes } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Home } from './pages/Home';

export function Router() {
    return (
        <Routes>
            <Route path='/login' element={<Signin />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}