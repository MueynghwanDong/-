import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography, Container } from '@material-ui/core';
import Header from '../common/Header'
import Footer from '../common/Footer';

// const AuthTemplateBlock = styled.div`
// //   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   background: ${palette.gray[2]};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
  
// `;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  height: 100%;
  
  
  background: white;
  border-radius: 2px;
  
  
`;


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '500px'    
    },
    grid: {
      height: '100%'
    },
    quoteContainer: {
    //   backgroundImage: 'url(/images/auth.jpg)',   
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },

    quoteText: {
        color: theme.palette.white,
        fontWeight: 150
    },
    quote: {
      backgroundColor: theme.palette.neutral,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/images/auth.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    quoteInner: {
      textAlign: 'center',
      flexBasis: '600px'
    },
    quoteText: {
      color: theme.palette.white,
      fontWeight: 300
    },
    name: {
      marginTop: theme.spacing(3),
      color: theme.palette.white
    },
    bio: {
      color: theme.palette.white
    },
    contentContainer: {},
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    contentHeader: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(0),
      paddingBototm: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    logoImage: {
      marginLeft: theme.spacing(4)
    },
    contentBody: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
      }
    },
    form: {
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom: 125,
      flexBasis: 700,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      }
    },
    title: {
      marginTop: theme.spacing(3)
    },
    socialButtons: {
      marginTop: theme.spacing(3)
    },
    socialIcon: {
      marginRight: theme.spacing(1)
    },
    sugestion: {
      marginTop: theme.spacing(2)
    },
    textField: {
      marginTop: theme.spacing(2)
    },
    signInButton: {
      margin: theme.spacing(2, 0)
    },
    footer:{
      paddingTop: '0 !important',
      marginTop : '0 !important'
    }
  }));
const AuthTemplate = ({ children }) => {
    
    const classes = useStyles();
  return (
    <div className={classes.root} >
        <Header/>
    
        {/* <AuthTemplateBlock> */}
            <Grid 
                className={classes.grid}
                container 
            >
                <Grid
                    className={classes.quoteContainer}    
                    item lg={5}
                >
                    <div className={classes.quote}>
                        <div className={classes.quoteInner}>
                        <Typography
                        className={classes.quoteText}
                        variant="h2"
                    >
                        일단은 아무말이나 쳐서 나오는지만 확인을 합시다.
                        </Typography>
                        <div className={classes.person}>
                            <Typography
                            className={classes.name}
                            variant="body1"
                            >
                            Takamaru Ayako
                            </Typography>
                            <Typography
                            className={classes.bio}
                            variant="body2"
                            >
                            Manager at inVision
                            </Typography>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid
                    className={classes.content}
                    item 
                    lg={7}
                    xs={12}
                >
                    <div className={classes.content}>
                        <div className={classes.contentHeader} />
                            <div className="logo-area">
                            <Link to="/">REACTERS</Link>
                            
                            </div>
                        {children}

                        
                    </div>
                </Grid>
            </Grid>
        {/* </AuthTemplateBlock> */}


    <Container>
        <Footer
             className={classes.footer}
        />
    </Container>
    </div>
  );
};

export default AuthTemplate;
