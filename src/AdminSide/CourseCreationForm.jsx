

import React from 'react';
import { Form, Input, Button } from 'antd';
import '../style/style.css'; 

const CourseCreationForm = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <Form
            name="course_creation"
            onFinish={onFinish}
            initialValues={{
                name: '',
                description: '',
                prerequisites: ''
            }}
            className="course-creation-form" // Apply CSS class
        >
            <Form.Item
                label="Course Name"
                name="name"
                rules={[{ required: true, message: 'Please input the course name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="Prerequisites"
                name="prerequisites"
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Create Course
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CourseCreationForm;
