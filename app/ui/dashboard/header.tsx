import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import Avatar from 'antd/lib/avatar/avatar';
import Image from "next/image";

const menuItems: MenuProps['items'] = [
    {
        key: '1',
        label: 'Thông tin tài khoản',
        icon: <UserOutlined />,
    },
    {
        key: '2',
        label: 'Đổi mật khẩu',
        icon: <UserOutlined />,
    },
    {
        type: 'divider',
    },
    {
        key: '3',
        label: 'Đăng xuất',
        icon: <LogoutOutlined />,
    },
];

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Thông tin tài khoản
            </a>
        ),
        icon: <UserOutlined />,
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Đổi mật khẩu
            </a>
        ),
        icon: <UserOutlined />,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Đăng xuất
            </a>
        ),
        icon: <LogoutOutlined />,
    },
];

export default function Headers() {
    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bg-[#005984]">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/logo.png" width={99} height={29} className="hidden md:block" alt="logo" />
                <Menu
                    mode="horizontal"
                    className="bg-[#005984]"
                    style={{ lineHeight: '64px', marginLeft: '24px' }}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingRight: '24px' }}>
                <Badge count={11}>
                    <BellOutlined style={{ fontSize: '20px', marginRight: '24px', color: 'white' }} />
                </Badge>
                <Dropdown menu={{ items }} placement="bottomRight" className="ml-5">
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Avatar icon={<UserOutlined />} />
                        <span style={{ color: 'white', marginLeft: '8px' }}>Serati Ma</span>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
}
