import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 6,
    },
};

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.handleClick.bind(this)
    }

    onComponentDidMount() {
    }

    handleClick() {
        if (!['/', '/register', '/dashboard', '/volunteerDashBoard'].includes(window.location.pathname)) {
            if (localStorage.getItem('volunteer')) {
                window.location.pathname = '/volunteerDashBoard';
            } else {
                window.location.pathname = '/dashboard';
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <img alt="Tiburon" src="/img/tiburonTitle.png" style={{margin: "auto"}} onClick={this.handleClick}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
