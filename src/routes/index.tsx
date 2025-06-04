import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from '../pages/Signin/Signin'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/login' replace />}/>
            <Route path='/login' element={<Signin />}/>

            <Route path='*' element={<div><h1>Página não encontrada</h1></div>} />
        </Routes>
    )
};

export default AppRouter;