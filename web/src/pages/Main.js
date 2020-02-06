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

const BackgroundVideo=()=>{
  const videoSource="/Cows.mp4";
  return(
    <div className={class_video.Container} >
      <video autoPlay="autoplay" loop="loop" muted className={class_video.Video} >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
     </video>
     <div className = {class_video.Content}>
       <div style ={{
          postion :'absolute', 
          right: '0', 
          bottom: '20px'
        }}
       >
         이곳은 어디에
       </div>
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
const pros = [
    {
        title: '추천해드리는 이유',
        description: [
          '(우리 기술)과 고객님이 쌓아온 경험을 합친다면 더 높은 효율로 축가를 운용해 더 높은 이윤을 기록할 수 있습니다.'
          
        ],
    },
    {
        title: '가축을 보호하는 우리의 노력',
        description: [
          '실시간 감지, 각 개체별 정보 획득과 축적된 데이터를 활용해 노동 시간을 줄이고 이윤은 높이는 효율적 관리를 제공합니다.'
        ],
    }
];


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


const cardwithimage = [
  {
    title:'개체관리',
    image_src:'/images/개체관리.jpg' ,
    description: [ 
      '개체 별 상태 확인을 통한 체계적 관리', 
      '발정확인을 통한 번식 증대를 통해 더 높은 이윤', 
      '지정한 시간마다 데이터를 수집합니다.', 
    ],
  },
  {
    title: '축사관리',
    image_src:'/images/축사관리.jpg' ,
    description: [
      '가축에게 최적의 환경을 제공합니다.',
      '메탄 감지를 통해 화제를 예방합니다.',
      'CO2 감지를 통해 쾌적한 축사 환경을 유지',
      
    ]
  },
  {
    title: '원격관리',
    image_src:'/images/원격관리.jpg',
    description: [
      '당신의 시간을 아껴 드립니다.',
      'CCTV를 통해 언제 어디서든 가축을 볼 수 있습니다.',
      '24시간 서버관리를 통해 사고 발생 시 도움을 드립니다.'
      
    ]
  }
]


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
        <Container>
            <Grid container spacing = {10} alignItems="flex-end"  hegiht="450px" >
                {pros.map(pro =>(
                    <Grid item key={pros.title} xs={12} sm={6} md={6} >
                      {/* 모든 child는 unique한 key를 가져야 한다에 대한 문제 */}
                        <Card className={classes.card}  hegiht='vmax'>
                            <CardHeader
                                title={pro.title}
                                subheader={pro.subheader}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                // backgroundColor={blue}
                                action={pro.title === 'Pro' ? <StarIcon /> : null}
                                // className={classes.cardHeader}
                                />
                            <CardContent>
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
        <Grid container spacing={10} alignItems="flex-end">
        {cardwithimage.map(cardwith => (
          // <Grid container spacing = {10} alignItems="flex-end"  hegiht="450px" >
            <Grid item  xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia 
                      className={classes.media}
                      image={cardwith.image_src}
                      title={cardwith.title}
                      />
                      {/* 사진 넣어 주고 */}
                      <Typography>
                        {cardwith.image_src}
                      </Typography>
                      <CardContent>
                      {/*  밑에가 내용 */}
                      <ul>
                        {cardwith.description.map(line => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                      </CardContent>
                  </CardActionArea>
              </Card>
              </Grid>
          // </Grid>
          ))}
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item  xs={12} sm={6} md={4}>
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
                  <div className={classes.cardPricing}></div>
                  <ul>
                    {tier.description.map(line => (
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
      {/* Footer */}

      <Container maxWidth="md" component="footer" className={classes.footer}>
        
        <Footer/>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Main;