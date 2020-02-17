import React from 'react';
import {Grid, Typography, } from '@material-ui/core';
import './Modal.scss';
import { Directions, Phone, ContactMaild, ContactMail } from '@material-ui/icons';

const Modal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
      <React.Fragment>
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
          <p className="title">These are Team Member</p>
          <div className="content">
          <Grid
            style={{
              width:'25%',
              marginBottom: '30px',
            }}>
            <div style={{width:'100%',}}>
              <img src='/images/dong.jpg'
              alt = ''
              style = {{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '10%'
              }}
              />    
              </div> 
              <h3 align='center' style={{color:'white'}} >오병관</h3>
              <Typography> 좌우명 </Typography>
              <Typography> 담당? </Typography>
              <Typography>  <ContactMail /> : qverck@gmail.com</Typography>
            </Grid>  
            <Grid
            style={{
              width:'25%',
              // flexDirection:'column',
              marginBottom: '30px',
              
            }}>
            <div style={{width:'100%',}}>
              <img src='/images/minkipark.jpg'
              alt = ''
              style = {{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '10%'
              }}
              />    
            </div>  
            <h3 align='center' style={{color:'white'}}>박민기</h3>
              <Typography> 좌우명 </Typography>
              <Typography> 담당? </Typography>
              <Typography>  <ContactMail /> : minkishome@gmail.com</Typography>
            </Grid>
           
            <Grid
            style={{
              width:'25%',
              // flexDirection:'column',
              marginBottom: '30px',
            }}>
            <div style={{width:'100%',}}>
              <img src='/images/dong.jpg'
              alt = ''
              style = {{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '10%'
              }}
              />
              </div> 
              <h3 align='center' style={{color:'white'}}>명환</h3>
              <Typography> 좌우명 </Typography>
              <Typography> 담당? </Typography>
              <Typography>  <ContactMail /> : v8392070@gmail.com</Typography>
            </Grid>
            <Grid
            style={{
              width:'25%',
              // flexDirection:'column',
              marginBottom: '30px',
            }}>
            <div style={{width:'100%',}}>
              <img src='/images/jw.jpg'
              alt = ''
              style = {{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '10%'
              }}
              />    
              </div> 
              <h3 align='center' style={{color:'white'}}>재웅</h3>
              <Typography> 좌우명 </Typography>
              <Typography> 담당? </Typography>
              <Typography>  <ContactMail /> : koolerjaebee@gmail.com</Typography>
            </Grid>
          </div>
         
        </div>
      </React.Fragment>
      :
      null}
    </React.Fragment>
  )
}
export default Modal;