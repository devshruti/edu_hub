
import React from 'react';
import { Card, Select } from 'antd';
import '../style/style.css';
import Navbar from './AdminNav';

const { Option } = Select;

const StudentManagement = () => {
    const students = [
        { id: 1, name: 'Student 1', email: 'student1@example.com', courses: ['Course 1', 'Course 2'] },
        { id: 2, name: 'Student 2', email: 'student2@example.com', courses: ['Course 1'] },
        // Add more students as needed
    ];

    const courses = ['Course 1', 'Course 2']; // Replace with actual course data

    return (
        <div>
            <Navbar />
            <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h1>Student Management</h1>
                    <Select defaultValue="All Courses" style={{ width: 200, marginBottom: '16px' }}>
                        <Option value="All Courses">All Courses</Option>
                        {courses.map(course => (
                            <Option key={course} value={course}>{course}</Option>
                        ))}
                    </Select>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {students.map(student => (
                        <Card key={student.id} title={student.name} className="student-card">
                            <p><strong>Email:</strong> {student.email}</p>
                            <p><strong>Courses:</strong> {student.courses.join(', ')}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentManagement;
