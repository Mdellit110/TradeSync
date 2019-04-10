import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (route) => {
    const {currentUser, history} = this.props
    if (route === "company") {
      history.push(`/company/${currentUser.company_id}`)
    } else {
      history.push(`/company/${currentUser.company_id}/trades/${currentUser.trade_id}`)
    }
    this.setState({ anchorEl: null });
  };
  render () {
    const { classes, history } = this.props;
    const open = Boolean(this.state.anchorEl);
    const logout = () => {
      localStorage.clear()
      history.push('/')
    }
    const login = () => {
      history.push('/')
    }
    console.log(open);
    return (
      <div className='navbar'>
        <AppBar position="static">
         <Toolbar>
           <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              >
              <MenuIcon />
           </IconButton>
           <Menu
            id="menu-appbar"
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={open}
            onClose={this.handleClose}
           >
             <MenuItem onClick={() => this.handleClose('company')}>My Company</MenuItem>
             {this.props.currentUser && !this.props.currentUser.is_boss &&
               <MenuItem onClick={() => this.handleClose('trade')}>My Trade</MenuItem>
             }
           </Menu>
           <Typography variant="h6" color="inherit" className={classes.grow}>
             St. Johns Episcopal
           </Typography>
           {localStorage.getItem('jwt')?
             <Button onClick={logout} color="inherit">Logout</Button>
             :
             <Button onClick={login} color="inherit">Login</Button>
           }
         </Toolbar>
       </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));
