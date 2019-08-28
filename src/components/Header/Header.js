import React from 'react'
import './Header.scss';
import {APPLICATION_ROUTES} from'../../constants/constants'
import {Link,withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from'@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from  '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles';
//ICONS
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
//REDUX
import {connect} from 'react-redux';
import * as actions from '../../services/redux/actions/global'

const styles= theme=>({
    header:{
        marginBottom:-22,
        paddingTop:5,
        paddingBottom:5
    },
    container:{
     padding:'5px'
    },
    menuTitle:{
      margin:'10px 5px',
      textAlign:'center'
    },
    divider:{
        color:'#a3a3a3'
    },
    menuItem:{

    },
    selected:{
        backgroundColor:"#5c6ec9"
    },
    menuIcon:{
       fontSize:'2em'
    },
    menuText:{
        margin:'0px 5px 0px -10px'
    }

});

const mapStateToProps = state => ({
    open: state.global.showMenu
  })
  
  const mapDispatchToProps = dispatch => ({
    toggleMenu: ()=> dispatch(actions.toggleMenu())
  })
  


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(function Header(props) {
    const currentRoute=props.location.pathname.replace('/','');
    const {classes}= props;
    return (
        <React.Fragment>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu-button" onClick={props.toggleMenu} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5">
                        Someone
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={props.open} onBackdropClick={props.toggleMenu}>
                <div 
                     role="presentation"
                     className={classes.container}
                     
                >
                    <Typography variant="h5" className={classes.menuTitle}> 
                        Someone
                    </Typography>
                    <hr className={classes.divider} />
                    <List>
                      {APPLICATION_ROUTES.map((rt,i)=>{
                        return(
                            <ListItem button key={rt.title} selected={currentRoute===rt.route} onClick={()=>{
                                    props.history.push(`/${rt.route}`);
                                    props.toggleMenu()
                                }} >
                                <ListItemIcon ><EmailIcon className={classes.menuIcon} /></ListItemIcon>
                                <ListItemText className={classes.menuText} primary={rt.title} />   
                            </ListItem>
                          );
                      })}
                    </List>
                </div>
            </Drawer>
        </React.Fragment>

    )
    
})));

