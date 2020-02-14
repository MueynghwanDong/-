import React from 'react';
import './Modal.scss';
import {Grid, Container} from '@material-ui/core';



const ModalResource = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
      <React.Fragment>
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal_resource">
          {/* <div className="content"> */}
          <Grid style = {{ height: '30%', width:'100%', alignItems:'center'}}>
            <img 
              src='/images/logos/logo.png' alt=''
              style={{
                width: '20%',
                hight: 'auto',
                display:'block',
                position:'absolute',
                marginLeft:'40%',
                marginTop:'%'
                // margin: 'auto'
              }}
            />
          </Grid>
          <Container style={{ backgroundColor:'rgba(2, 1, 17, 0.733)', textAlign:'center'}}>
            <Grid style = {{ display: 'inline-block', height: '70%', width:'70%',  paddingTop:'10px', paddingBottom:'30px' }}>
              <Grid container style={{ height:'33%', width:'100%', flexDirection:'row',  }}>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center'}}>
                  <img className="image_center" src='/images/logos/js.jpg' alt='logo' />
                </Grid>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/node_js.jpg' alt='logo' />
                </Grid>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/Raspbian.png' alt='logo' />
                </Grid>
              </Grid>
              <Grid container style={{ height:'33%', width:'100%', flexDirection:'row',   }}>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/css_html.png' alt='logo' />
                </Grid>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/mysql.png' alt='logo' />
                </Grid>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/react_logo.png' alt='logo' />
                </Grid>
              </Grid>
              <Grid container style={{ height:'33%', width:'100%', flexDirection:'row' }}>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/arduino_logo.png' alt='logo' />
                </Grid>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/redbull.png' alt='logo' />
                </Grid>
                <Grid lg={4} md ={4} xs ={4} sm ={4} style={{ height:'33%', width:'33%', textAlign:'center' }}>
                  <img className="image_center" src='/images/logos/wemake.png' alt='logo' />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
         
        {/* </div> */}
      </React.Fragment>
      :
      null}
    </React.Fragment>
  )
}
export default ModalResource;