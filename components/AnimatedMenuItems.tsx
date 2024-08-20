import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './MenuItems.css'; // Ensure this path matches your project structure

const MenuItems: React.FC = () => {
    return (
        <div className="pb-4 pt-0">
            {/* Your MenuItems code */}
        </div>
    );
};

interface MenuProps {
    isResourcesOpen: boolean;
}

const AnimatedMenuItems: React.FC<MenuProps> = ({ isResourcesOpen }) => {
    return (
        <CSSTransition
            in={isResourcesOpen}
            timeout={300}
            classNames="menu-items"
            unmountOnExit
        >
            <MenuItems />
        </CSSTransition>
    );
};

export default AnimatedMenuItems;
