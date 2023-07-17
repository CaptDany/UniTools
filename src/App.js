import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import InternshipFormatter from './pages/InternshipFormatter';
import ExcelToMail from './pages/ExcelToMail';
import NoPage from './pages/NoPage';

export default function App() {
    return(
        <div>
            <BrowserRouter basename='/UniTools'>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/exceltomail" element={<ExcelToMail/>} />
                    <Route path="/estadias" element={<InternshipFormatter/>} />
                    <Route path="*" element={<NoPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}