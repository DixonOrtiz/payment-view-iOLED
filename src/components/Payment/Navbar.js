import React, {Component} from 'react';
import ioledLogo from '../../images/logo.png';

// import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box} from '@material-ui/core';

import {createStyles} from '@material-ui/core/styles';

const styles = (theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    appbar: {
      backgroundColor: '#1A191E',
      display: 'grid',
    },
    logo: {
      width: '51px',
      margin: '-10px',
    },

    ioledDashboard: {
      display: 'grid',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10vh',
    },
    ioledTittle: {
      fontSize: '16px',
      marginTop: '10px',
      fontWeight: 'bold',
      marginLeft: '13px',
    },
    dashboard: {
      fontSize: '14px',
      marginTop: '-5px',
      fontWeight: 'ligthter',
    },
  });

class Navbar extends Component {
  // Component state.
  state = {
    rigth: false,
  };

  // Render the component.
  render() {
    // const {classes} = this.props;
    // const {rigth} = this.state;

    return (
      <div className={styles.root}>
        <AppBar className={styles.appbar} position="static">
          <Toolbar>
            <a href={'/'} style={{flexGrow: 1}}>
              <img className={styles.logo} src={ioledLogo} alt="ioled" />
            </a>

            <Box className={styles.ioledDashboard}>
              <b className={styles.ioledTittle}> iOLED</b>
              <p className={styles.dashboard}>DASHBOARD</p>
            </Box>

            {/* <Avatar className={styles.avatar} alt={user.name} src={user.photo} onClick="{this.toggleDrawer(true)}" /> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {user};
};

export default Navbar;
