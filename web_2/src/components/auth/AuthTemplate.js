import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Header from '../common/Header'
import Footer from '../common/Footer';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

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
    quoteContainer: {
        backgroundImage: 'url(/images/auth.jpg)',
        // height:'100%',
    },
    quoteText: {
        color: theme.palette.white,
        fontWeight: 150
    },
}))

const AuthTemplate = ({ children }) => {

    const classes = useStyles();
  return (
    <>
    <Header></Header>
    <div>
        <AuthTemplateBlock>
            <Grid 
                container 
            >
                <Grid
                    className={classes.quoteContainer}    
                    item lg={4}
                >
                    <Typography
                        className={classes.quoteText}
                        variant="h2"
                    >
                    aa
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    lg={8}
                    xs={12}
                >
                    <WhiteBox>
                        <div className="logo-area">
                        <Link to="/">REACTERS</Link>
                        </div>
                        {children}
                    </WhiteBox>
                </Grid>
            </Grid>
        </AuthTemplateBlock>
    </div>
    <Footer/>
    </>
  );
};

export default AuthTemplate;
