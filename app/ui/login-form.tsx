'use client';

import { Form, FormProps, Modal } from 'antd';
// import InputUI from './styled/input';
// import ButtonUI from './styled/button';
import { useState } from 'react';
import ButtonUI from './styled/button';
import InputUI from './styled/input';

type FieldType = {
    password?: string;
    email?: string
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };


    return (
        <div className=" bg-slate-200 h-screen w-screen relative" style={{
            backgroundImage: `url("/bg.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }} >
            <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                <div className='flex justify-center items-center'>
                    <img src='/logo_login.png' alt="description of image"></img>
                </div>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'
                    className='w-[200px] md:w-[400px]'
                >
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <InputUI
                            type="email"
                            value={email}
                            placeholder='Nhập email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='rounded-none'
                            required
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <InputUI
                            type="password"
                            value={password}
                            placeholder='Nhập mật khẩu'
                            onChange={(e) => setPassword(e.target.value)}
                            className='rounded-none'
                            required
                        />
                    </Form.Item>
                    <blockquote className='text-right mb-3 -mt-3'>
                        <a className="login-form-forgot"
                            onClick={showModal}
                        >
                            Lấy lại mật khẩu
                        </a>
                        <Modal
                            title="Lấy lại mật khẩu"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                            width="464px"
                            height="234px"
                        >
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                layout='vertical'
                                className='w-[464px] md:w-[400px]'
                            >

                                <Form.Item<FieldType>
                                    label="Nhập email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <InputUI
                                        type="email"
                                        value={email}
                                        placeholder='Nhập email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='rounded-none'
                                        required
                                    />
                                </Form.Item>
                            </Form>
                        </Modal>
                    </blockquote>
                    <div className='flex justify-center items-center'>
                        <ButtonUI
                            shape="default"

                            htmlType="submit" className="w-full  bg-[#005984] rounded-none">Đăng nhập</ButtonUI>
                    </div>
                </Form>
            </div>
        </div>
    );
}

