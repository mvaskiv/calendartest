import React from 'react';
import { SideBarLinks } from '../../config/_links';
import { SideBarItem } from './const';

export const Sidebar = (
    <div>
        { SideBarLinks && SideBarLinks.map((link, key) => <SideBarItem link />) }
    </div>
)
