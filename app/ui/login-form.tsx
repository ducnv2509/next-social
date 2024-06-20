'use client';

import { Form, FormProps, Modal } from 'antd';
// import InputUI from './styled/input';
// import ButtonUI from './styled/button';
// import { useLoginForm } from '@/hooks/login';
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

    // const {
    //     register,
    //     handleSubmit,
    //     errors,
    //     handleFormSubmit,

    //     mutation,
    // } = useLoginForm()

    return (
        // <form className="space-y-3">
        //     <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        //         <h1 className={` mb-3 text-2xl`}>
        //             Please log in to continue.
        //         </h1>
        //         <div className="w-full">
        //             <div>
        //                 <label
        //                     className="mb-3 mt-5 block text-xs font-medium text-gray-900"
        //                     htmlFor="email"
        //                 >
        //                     Email
        //                 </label>
        //                 <div className="relative">
        //                     <input
        //                         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        //                         id="email"
        //                         type="email"
        //                         name="email"
        //                         placeholder="Enter your email address"
        //                         required
        //                     />
        //                     <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        //                 </div>
        //             </div>
        //             <div className="mt-4">
        //                 <label
        //                     className="mb-3 mt-5 block text-xs font-medium text-gray-900"
        //                     htmlFor="password"
        //                 >
        //                     Password
        //                 </label>
        //                 <div className="relative">
        //                     <input
        //                         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        //                         id="password"
        //                         type="password"
        //                         name="password"
        //                         placeholder="Enter password"
        //                         required
        //                         minLength={6}
        //                     />
        //                     <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        //                 </div>
        //             </div>
        //         </div>
        //         <Button className="mt-4 w-full" >
        //             Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        //         </Button>
        //         <div
        //             className="flex h-8 items-end space-x-1"
        //             aria-live="polite"
        //             aria-atomic="true"
        //         >

        //         </div>
        //     </div>
        // </form>
        <div className=" bg-slate-200 h-screen w-screen relative" style={{
            backgroundImage: `url("/bg.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }} >
            <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                <div className='flex justify-center items-center'>
                    <img src='/logo_login.png' alt="description of image"></img>
                </div>
                {/* <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form> */}
                {/* <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <Label>Account Mail</Label>
                        <Input<LoginFormData> type="text" name="email" id="email" placeholder="example@fpt.com.vn" register={register} label="email" required={true} />
                    </div>

                    <div className="mt-6">
                        <Label>Password</Label>

                        <Input<LoginFormData> type="password" name="password" id="password" placeholder="Mật khẩu" register={register} label="password" required={true} />
                    </div>
                    {mutation.isError && <p className="mt-3 -mb-3 italic text-red-500 text-sm">{(mutation.error.response?.data as ErrorResponse)?.description ?? 'error'}</p>}
                    <div className="mt-6">
                        <Button type="submit" posting={mutation.isLoading} className="w-full">
                            Đăng nhập
                        </Button>
                    </div>
                </form> */}

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'
                    className='w-[200px] md:w-[400px]'
                    // onSubmitCapture={}
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

