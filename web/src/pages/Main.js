import React from 'react';
import StarIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Toolbar, Typography,  Container, makeStyles,} from '@material-ui/core'
import { red, blue } from '@material-ui/core/colors'
// import { withTheme } from 'styled-components';
import class_video from './BackgroundVideo.module.css';
import Footer from '../components/common/Footer'
import { useSelector } from 'react-redux';

const BackgroundVideo=()=>{
  const videoSource="/Cows.mp4";
  return(
    <div className={class_video.Container} >
      <video autoPlay="autoplay" loop="loop" muted className={class_video.Video} >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
     </video>
     <div className = {class_video.Content}>
       여기에 글을 쓰면 동영상 위에 글이 써진다.
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
        width : 1000,

      },
  },
}));
const pros = [
    {
        title: '기술 소개',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    },
    {
        title: '우리 장점',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    }
];


const tiers = [
  {
    title: '개체관리',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: '축사관리',
    // subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: '원격관리',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];


// export default function Pricing() {

const Main = () => {
  const classes = useStyles();

  const { user } = useSelector(({ user }) => ({ user: user.user }));

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} component={Link} to="/mypage">
            Company name
          </Typography>
        
          {/* <Button  color="primary" variant="outlined" className={classes.link}> */}
          {
            !(user) &&
            <Link variant="button" to='/login'> Login   </Link>
          }
          {/* </Button> */}
       
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <BackgroundVideo/>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
         우리 이름  
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          이런저런 설명 넣고 
        </Typography>
      </Container>
      
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Container>
            <Grid container spacing = {10} alignItems="flex-end">
                {pros.map(pro =>(
                    <Grid item key={pros.title} xs={12} sm={6} md={6}>
                        <Card className={classes.card}>
                            <CardHeader
                                title={pro.title}
                                subheader={pro.subheader}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                backgroundColor={blue}
                                action={pro.title === 'Pro' ? <StarIcon /> : null}
                                // className={classes.cardHeader}
                                />
                            <CardContent>
                                <div className={classes.cardPricing}>
                                    <Typography component="h2" variant="h5" color="textPrimary" align="center" >
                                    우리꺼 좋음
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                    하하하하하하하하핲하하
                                    </Typography>
                                </div>
                                <ul>
                                    {pro.description.map(line => (
                                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                                        {line}
                                    </Typography>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
      </Container>
     
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        
        <Footer/>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Main;