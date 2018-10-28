import React from 'react'
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../helpers/styles'

const AppBar = ({ classes, location }) => (
  <MuiAppBar 
    className={classes.appBar}
    color="default"
    position="static"
  >
    <Toolbar className={classes.toolbar}>
      { location !== '/'
        ? (
            <NavLink 
              to="/"
              exact
              activeStyle={{ color: 'blue' }}
              style={{ color: 'black'}}
            >
              <IconButton color="inherit" disableRipple>
                <ArrowBackIcon />
              </IconButton>
            </NavLink>
          )
        : null
      }
      
      <Typography variant="h6" color="inherit" noWrap>
        Quiz Master
      </Typography>
    </Toolbar>
  </MuiAppBar>
)

export default withStyles(styles)(AppBar)
