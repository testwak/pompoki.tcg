'use client';
import React from "react";
import { Avatar, Space, Tooltip } from "antd";
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

interface User {
    name: string;
    color?: string;
    avatar?: string;
}

interface UserAvatarProps {
    users?: User[];
    showDefaultGroup?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
    users = []
}) => {
    const colors = ['#f56a00', '#87d068', '#1677ff', '#ff4d4f', '#52c41a', '#722ed1'];

    const cssStyles = `
    img {
        border-radius: 50%;
    }

    .avatar-container {
      display: flex;
      gap: 10px;
      transition: gap 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      align-items: center;
      flex-wrap: wrap;
      padding: 20px;
    }
    
    .avatar-container:hover {
        gap: 10px 30px;
    }
    
    .animated-avatar .ant-avatar {
        margin-left: -20px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
        overflow: visible;
        border: 0;
    }
    
    .animated-avatar:hover .ant-avatar {
        transform: translateY(-8px) scale(1.2);
        filter: brightness(1.1) saturate(1.1);
        z-index: 10;
    }
    
    .animated-avatar:hover .ant-avatar::before {
        content: '';
        position: absolute;
        border-radius: inherit;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent);
        z-index: -1;
    }
    
    /* Ripple effect on click */
    .animated-avatar:active .ant-avatar {
        transform: translateY(-8px) scale(1.1);
        transition: all 0.1s ease;
    }
    `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
            <div className="avatar-container">
                {/* Dynamic user avatars */}
                {users.map((user, index) => (
                    <Tooltip key={index} title={user.name} placement="top">
                        <div className="animated-avatar">
                            <Avatar
                                size={50}
                                src={user.avatar}
                                style={{
                                    backgroundColor: (!user.avatar) ? (user.color || colors[index % colors.length]) : "transparent",
                                }}
                            >
                                {!user.avatar && user.name.charAt(0).toUpperCase()}
                            </Avatar>
                        </div>
                    </Tooltip>
                ))}

            </div>
        </>
    );
};

export default UserAvatar;