
'use client';
import { ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons';
import { Button, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';


type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: '1', icon: <PieChartOutlined />, label: (
            <Link href="/dashboard/project">
                <span>Dự án</span>
            </Link>
        ),
        // onClick: () => 
        // onClick: () => router.push("/dashboard/project")
    },

    {
        key: 'sub1',
        label: 'Dịch vụ thông báo',
        icon: <MailOutlined />,
        children: [
            { key: '5', label: 'Option 5' },
            { key: '6', label: 'Option 6' },
            { key: '7', label: 'Option 7' },
            { key: '8', label: 'Option 8' },
        ],
    },
    {
        key: 'sub2',
        label: 'Thanh toán',
        icon: <MailOutlined />,
        children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
        ],
    },

    {
        key: 'sub3',
        label: 'Quản lý tài khoản',
        icon: <MailOutlined />,
        children: [
            { key: '12', label: 'Option 12' },
            { key: '13', label: 'Option 13' },
            { key: '14', label: 'Option 14' },
        ],
    },
    {
        key: '2', icon: <DesktopOutlined />, label: 'Báo cáo thống kê',
        // onClick: () => router.push("/dashboard/report")

    },
    {
        key: '3', icon: <ContainerOutlined />, label: (
            <Link href="/dashboard/config">
                <span>Cấu hình</span>
            </Link>
        ),
        // onClick: () => router.push("/dashboard/config")
    },
];


export default function NavLinks() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div >
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
}
