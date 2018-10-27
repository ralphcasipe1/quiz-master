import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
})

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <Typography 
      align="center"
      gutterBottom
      variant="h6"  
    >
      Footer
    </Typography>
    <Typography 
      align="center"
      color="textSecondary"
      component="p"
      variant="subtitle1"
    >
      Something here to give the footer a purpose!
    </Typography>
  </footer>
)

export default withStyles(styles)(Footer)