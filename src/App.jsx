import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ProfilePage from './pages/ProfilePage'
import FormPage from './pages/FormPage'
import './assests/css/main.css'

export default function App() {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path='' element={<FormPage/>} />
                {/* <Route path='/profile' element={<ProfilePage/>} /> */}
                           </Routes>
        
        </BrowserRouter>
    )
}
