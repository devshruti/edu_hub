import { Route, Routes } from "react-router-dom";
import AnalyticsDashboard from "../AdminSide/AnalyticsDashboard";
import CourseManagement from "../AdminSide/CourseManagement";
import LectureManagement from "../AdminSide/LectureManagement";
import StudentManagement from "../AdminSide/StudentManagement";
import Home from "../pages/Home";
import SignInForm from "../pages/Signin";
import SignUpForm from "../pages/Signup";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AnalyticsDashboard />} />
            <Route path="/courses" element={<CourseManagement />} />
            <Route path="/lectures" element={<LectureManagement />} />
            <Route path="/students" element={<StudentManagement />} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
        </Routes>
    );
}

export default AllRoutes;