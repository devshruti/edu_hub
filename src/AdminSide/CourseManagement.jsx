import React, { useState } from 'react';
import '../style/style.css';
import Navbar from './AdminNav';
import { Card, Button, Modal, Form, Input } from 'antd';

const CourseManagement = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const courses = [
        { id: 1, name: 'Course 1', description: 'Description of Course 1' },
        { id: 2, name: 'Course 2', description: 'Description of Course 2' },
        // Add more courses as needed
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <div>
            <Navbar />
            <div style={{ padding: '24px', width: "80%", margin: "auto" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h1>Course Management</h1>
                    <Button type="primary" onClick={showModal}>Add Course</Button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {courses.map(course => (
                        <Card key={course.id} title={course.name} className="course-card">
                            <p>{course.description}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Add Course Modal */}
            <Modal title="Add Course" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item label="Course Name" name="courseName" rules={[{ required: true, message: 'Please enter course name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CourseManagement;
