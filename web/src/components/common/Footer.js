/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Link, Grid, Typography, Box, Container} from '@material-ui/core';
import modalTeam from './Modal/modalTeam'


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://instagram.com/minkishome">
          minkishome
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme=> ({
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
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    // {
    //   title: 'Features',
    //   description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    // },
    {
      title: 'Resources',
      description: ['MySQL', 'React-Redux', 'Embedded', 'RedBull'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
const Footer = () => {

    const classes = useStyles();
    
    return (
        <React.Fragment>
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={10} justify="space-evenly">
            {footers.map(footer => (
                <Grid item xs={6} sm={4} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                <ul>
                    {footer.description.map(item => (
                    
                    <li key={item}>
                        {/* <Link href="#" variant="subtitle1" color="textSecondary"> */}
                          {item}
                          
                        {/* </Link> */}
                  </li>
                ))}
                </ul>
              
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      
      </React.Fragment>
    )
}



export default Footer;