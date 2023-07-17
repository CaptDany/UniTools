import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import InternshipFormatter from './pages/InternshipFormatter';
import ExcelToMail from './pages/ExcelToMail';
import NoPage from './pages/NoPage';

export default function App() {
    return(
        <>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/UniTools/" element={<Navigate to="/UniTools/home" />} />
                    <Route path="/UniTools/home" element={<Home/>} />
                    <Route path="/UniTools/exceltomail" element={<ExcelToMail/>} />
                    <Route path="/UniTools/estadias" element={<InternshipFormatter/>} />
                    <Route path="*" element={<NoPage/>} />
                </Routes>
        </>
    )
}