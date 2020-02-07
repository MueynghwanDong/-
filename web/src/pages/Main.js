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
    image_src:'https://miro.medium.com/max/1024/1*U7Rr7Bm-Yn8Xes4ub19k_w.jpeg' ,
    description: [ 
      '개체 별 상태 확인을 통한 체계적 관리', 
      '발정확인을 통한 번식 증대를 통해 더 높은 이윤', 
      '지정한 시간마다 데이터를 수집합니다.', 
    ],
  },
  {
    title: '축사관리',
    image_src:'data:image/jpeg;base64,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' ,
    description: [
      '가축에게 최적의 환경을 제공합니다.',
      '메탄 감지를 통해 화제를 예방합니다.',
      'CO2 감지를 통해 쾌적한 축사 환경을 유지',
      
    ]
  },
  {
    title: '원격관리',
    image_src:'data:image/jpeg;base64,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',
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
         
            <Grid item  xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia 
                      className={classes.media}
                      image={cardwith.image_src}
                      title={cardwith.title}
                      />
                   
                      <Typography>
                        {cardwith.image_src}
                      </Typography>
                      <CardContent>
                   
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