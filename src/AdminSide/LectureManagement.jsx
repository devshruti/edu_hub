import React, { useState } from 'react';
import { Card, Button, Modal, Form, Input, Select } from 'antd';
import "../style/style.css"
import Navbar from './AdminNav';

const { Option } = Select;

const LectureManagement = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const lectures = [
        { id: 1, course: 'Course 1', title: 'Lecture 1', description: 'Description of Lecture 1', admin: 'Admin 1' },
        { id: 2, course: 'Course 1', title: 'Lecture 2', description: 'Description of Lecture 2', admin: 'Admin 2' },
        { id: 3, course: 'Course 2', title: 'Lecture 3', description: 'Description of Lecture 3', admin: 'Admin 3' },
        // Add more lectures as needed
    ];

    const courses = ['Course 1', 'Course 2']; // Replace with actual course data

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
            <div style={{ padding: '24px', width:"80%", margin: "auto" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h1>Lecture Management</h1>
                    <Button type="primary" onClick={showModal}>Add Lecture</Button>
                </div>
                <Select defaultValue="All Courses" style={{ width: 200, marginBottom: '16px' }}>
                    <Option value="All Courses">All Courses</Option>
                    {courses.map(course => (
                        <Option key={course} value={course}>{course}</Option>
                    ))}
                </Select>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {lectures.map(lecture => (
                        <Card key={lecture.id} title={lecture.title} className="lecture-card">
                            <p><strong>Course:</strong> {lecture.course}</p>
                            <p><strong>Admin:</strong> {lecture.admin}</p>
                            <p>{lecture.description}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Add Lecture Modal */}
            <Modal title="Add Lecture" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item label="Course" name="course" rules={[{ required: true, message: 'Please select a course!' }]}>
                        <Select>
                            {courses.map(course => (
                                <Option key={course} value={course}>{course}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Lecture Title" name="title" rules={[{ required: true, message: 'Please enter lecture title!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Admin" name="admin" rules={[{ required: true, message: 'Please enter lecture title!' }]}>
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

export default LectureManagement;
