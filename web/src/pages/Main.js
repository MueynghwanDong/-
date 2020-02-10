import React from 'react';
import StarIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Toolbar, Typography,  Container, makeStyles,
  CardActionArea, CardMedia}

from '@material-ui/core'
import { red, blue } from '@material-ui/core/colors'
// import { withTheme } from 'styled-components';
import class_video from './BackgroundVideo.module.css';
import Footer from '../components/common/Footer';
import MainCard from '../components/common/Card/main_card'
import Card_rightimage from '../components/common/Card/card_rightimage';
import { Opacity } from '@material-ui/icons';


const BackgroundVideo=()=>{
  const videoSource="/Cows.mp4";
  return(
    <div className={class_video.Container}
      width='80%'  
    >
      <video autoPlay="autoplay" loop="loop" muted className={class_video.Video} >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
     </video>
     <div className = {class_video.Content}
        style = {{
          top: '300px;',
          right: '10px;',
          color: '#f1f1f1',
          // width: '150px',
          // height: '300px',
          display: 'flex',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          justifycontent: 'right',
          alignitems:' center',
          padding: 0,
        }}
     >
       <div style ={{
          position :'absolute', 
          right: '0', 
          bottom: '20px', 
          fontSize: '30px',
        }}
       >
         더 현명하고, 똑똑한 방법으로 축가를 운영합니다.
       </div>
       

     </div>
     
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: red[500],
    //   theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    card: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
    cardbody: {
      height: 1,

    },
    mark_image: {
      position: 'absoulte',
      backgroundImage: 'url(/images/mark_image.jpg)',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',

    },

  },

}));


const tiers = [
  {
    title: '개체관리',
    price: '0',
    description: [ 
      '개체 별 상태 확인을 통한 체계적 관리', 
      '발정확인을 통한 번식 증대를 통해 더 높은 이윤', 
      '지정한 시간마다 데이터를 수집합니다.', 
    ],
    // buttonText: 'Sign up for free',
    // buttonVariant: 'outlined',
  },
  {
    title: '축사관리',
    // subheader: 'Most popular',
    price: '15',
    description: [
      '가축에게 최적의 환경을 제공합니다.',
      '메탄 감지를 통해 화제를 예방합니다.',
      'CO2 감지를 통해 쾌적한 축사 환경을 유지',
      
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: '원격관리',
    price: '30',
    description: [
      '당신의 시간을 아껴 드립니다.',
      'CCTV를 통해 언제 어디서든 가축을 볼 수 있습니다.',
      '24시간 서버관리를 통해 사고 발생 시 도움을 드립니다.'
      
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];




// export default function Pricing() {

const Main = () => {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div> 
            <img src='/images/mark_image.jpg' width='60' hegiht='60'/>
          </div>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
        
          {/* <Button  color="primary" variant="outlined" className={classes.link}> */}
          <Link variant="button" to='/login'> 시작하기 </Link>
          {/* </Button> */}
       
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <BackgroundVideo/>
      <Container maxWidth="sm" component="main" className={classes.heroContent} paddingBottom="20px">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom paddingBottom="20px !important">
         우리 이름  
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p" paddingBottom="20px">
          더 편하고 건강하게 축사를 관리하세요
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p" paddingBottom="20px">
          더 이상 시간에 구애받지 마세요
        </Typography>
      </Container>
      
      <Container maxWidth="sm" component="main" className={classes.heroContent} >
        <Card_rightimage />
      </Container>
     
      {/* End hero unit */}
      <MainCard />
       {/* Footer */}

      <Container maxWidth="md" component="footer" className={classes.footer}>
        
        <Footer/>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Main;