// import React from 'react';
// import styled from 'styled-components';
// import palette from '../../lib/styles/palette';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/styles';
// import {
//     Grid,
//     Button,
//     IconButton,
//     TextField,
//     Typography
//   } from '@material-ui/core';
// const AuthTemplateBlock = styled.div`
//     position: absolute;
//     left:0;
//     top:0;
//     bottom:0;
//     right: 0;
//     background: ${palette.gray[2]};
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height:'100%';
// `;
// const useStyles = makeStyles(palette => ({
//     root: {
//         backgroundColor : palette.black,
//         height: '100%',
//     },
//     quoteContainer: {
//         backgroundImage: 'url(/images/auth.jpg)',
//         [palette.breakpoints.down('md')]: {
//           display: 'none'
//         }

//     },
//     quote: {
//         backgroundColor: palette.neutral,
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundImage: 'url(/images/auth.jpg)',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         height:'300px'
//     },
//     content: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column'
//     },
// }))


// const WhiteBox = styled.div`
//     .logo-area {
//         display:block;
//         padding-bottom: 2rem;
//         text-align: center;
//         font-weight: bold;
//         letter-spacing: 2px;
//     }
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
//     padding: 2rem;
//     width: 720px;
//     background: white;
//     border-radius: 2px;
    
// `;


// const AuthTemplate = ({ children }) =>{

//     const classes = useStyles;

//     return (
//         <Grid
//         className={classes.grid}
//         container
//         >
            
//             <AuthTemplateBlock>
//             <Grid
//                 className={classes.quoteContainer}
//                 item
//                 lg={5}
//             >
//                 <div className={classes.quote}>
//                     asdf
//                 </div>
                
//             </Grid>
//             <Grid 
//                 className={classes.content}
//                 item
//                 lg={7}
//                 xs={12}>
//                         <WhiteBox>
//                             <div className="logo-area">
//                                 <Link to="/">Reacters</Link>
//                             </div>
//                             {children}
                        
//                         </WhiteBox>    
//             </Grid>     
//             </AuthTemplateBlock>
//         </Grid>
        
//     )
// }


// export default AuthTemplate;
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Header from '../../components/common/Header'

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
    </>
  );
};

export default AuthTemplate;
