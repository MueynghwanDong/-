/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core';
import {Link, Grid, Typography, Box, Container, Button} from '@material-ui/core';
import Modal from './Modal/Modal'
import ModalResource from './Modal/ModalResource';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Currently v0.0.2 Released under the SSAFY Copyright © '}
        <Link color="inherit" href="https://instagram.com/minkishome">
          minkishome
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const classes = makeStyles(theme=> ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(5),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
      },
}))

const footers = [
    {
      title: 'Team',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Resources',
      description: ['MySQL', 'React-Redux', 'Embedded', 'RedBull'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
 
    class Footer extends Component {
      constructor(props){
        super(props);
        this.state = {
          isModalOpen: false,
          isModalsOpen: false, 
        }
      }
      
      openModal = () => {
        this.setState({ isModalOpen: true });
      }
      
      closeModal = () => {
        this.setState({ isModalOpen: false }); 
      }
      openModals = () => {
        this.setState({ isModalOpens: true });
      }
      
      closeModals = () => {
        this.setState({ isModalOpens: false }); 
      }
     
    render ()
    {
    
    
    return (
        <React.Fragment>
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={5} justify="space-evenly">
            {/* {footers.map(footer => ( */}
                <Grid item xs={3} sm={3} >
                  <Typography variant="h6" color="textPrimary" gutterBottom onClick={this.openModals}>              
                      Team
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Typography variant="h6" color="textPrimary" gutterBottom onClick={this.openModal}>
                      Resources
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                      Terms of Use
                  </Typography>
                </Grid>
          {/* ))} */}
        </Grid>
        {/* <Box mt={5}> */}
          <Copyright/>
        {/* </Box> */}

      </Container>
      <Modal isOpen={this.state.isModalOpens} close={this.closeModals}/>
      <ModalResource isOpen={this.state.isModalOpen} close={this.closeModal}/>

      </React.Fragment>
    )
              }
}



export default Footer;