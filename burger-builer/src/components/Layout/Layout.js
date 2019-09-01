import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = ( props ) => (
    <Auxillary>
        <div>
            <Toolbar />
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;