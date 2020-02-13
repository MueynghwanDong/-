import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const BarnItem = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
       <Link to="/mypage/barn/1">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           
              축
            
          </Avatar>
        }

        title="축사 이름"
        subheader="축사 등록 날짜"
      />
      <CardMedia
        className={classes.media}
        image={require('../../../pages/card_image/소간지.jpg')}
        title="축사 이름"
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          축사 설명
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Link to="/mypage/livestock/1">
            <Typography paragraph>
              가축1
            </Typography>
          </Link>
          <Link to="/mypage/livestock/1">
          <Typography paragraph>
            가축2
          </Typography>
          </Link>
          <Link to="/mypage/livestock/1">
          <Typography paragraph>
            가축3
          </Typography>
          </Link>
          <Link to="/mypage/livestock/1">
          <Typography paragraph>
            가축4
          </Typography>
          </Link>
          <Link to="/mypage/livestock/1">
          <Typography>
            가축5
          </Typography>
          </Link>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const BarnCards = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main" className={classes.root}>
      <Grid container spacing={10} alignItems="flex-start">
        <Grid item  xs={12} sm={6} md={4}>
          <BarnItem />
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
          <BarnItem />
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
          <BarnItem />
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
          <BarnItem />
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
          <BarnItem />
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
          <BarnItem />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BarnCards;