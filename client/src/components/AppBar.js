import React from 'react'
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../helpers/styles'

const AppBar = ({ classes }) => (
  <MuiAppBar 
    className={classes.appBar}
    color="default"
    position="static"
  >
    <Toolbar className={classes.toolbar}>
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

      <Typography variant="h6" color="inherit" noWrap>
        Quiz Master
      </Typography>

      <div>
        <NavLink 
          to="/quizes" 
          activeStyle={{ color: 'blue' }}
          style={{ color: 'black'}}
        >
          <IconButton color="inherit" disableRipple>
            <AssignmentIcon />
          </IconButton>
        </NavLink>
      </div>
    </Toolbar>
  </MuiAppBar>
)

export default withStyles(styles)(AppBar)
