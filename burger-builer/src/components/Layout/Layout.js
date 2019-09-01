import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Auxillary>
        <div>
            <Toolbar />
            <SideDrawer />
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;