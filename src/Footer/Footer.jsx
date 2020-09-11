import React from 'react'
import './Footer.css'
import { Grid, IconButton, Avatar } from '@material-ui/core'
import covid from '../Asset/covid.svg'
import '../Tracker/Tracker.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';



export default function Footer(){
    return(

        <>
     <div className='containerHead'>
         
         <Grid container>
             <Grid item xs={1} sm={1} />
             <Grid item container xs={12} sm={10} spacing={2}>
                 <Grid item xs={10} sm={4 }>
                 <div style={{marginBottom : 10}}>
                        <IconButton ><Avatar src={covid} /></IconButton>
                        <span style={{ color: 'blue', fontSize: 25, fontWeight: 900 }}>Cov19Strain</span>
                    </div>
                    <div style={{ color: 'blue', fontSize: 20, fontWeight: 900 }}>Source:</div>
                    The infos on this this webpage were crawled from WHO,
                    images were downloaded from Pixaybay and Pexels, Icons were downloaded from Iconfinder and Flaticons.
                    

                 </Grid>
                 <Grid item  xs={12} sm={4 } >
                <div className='bubble'>
                    <div className='styles'>Useful Links</div>
                    <p><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"> WHO Information</a></p>
                    <p><a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">Covid-19 Wikipedia</a></p>
                    <p><a href="https://www.google.com/search?sxsrf=ALeKk00Kl4RmeLdlf_lxc5ieCcuH8NUvqw%3A1599306203724&ei=23lTX7_pK7TC8gK8oobgDQ&q=world+news+on+covid+19&oq=World+news+on+&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQRzoECCMQJzoFCAAQkQI6BQgAELEDOgUILhCxAzoICAAQsQMQgwE6CwguEMcBEKMCEJECOgcIABCxAxBDOgQIABBDOgoIABCxAxCDARBDOhEILhCxAxDHARCjAhCRAhCTAjoICC4QsQMQgwE6CwguELEDEIMBEJMCUIy-AVjX1AFg_N4BaABwAXgAgAHrAogB7BqSAQYyLTEyLjKYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab">World News on Covid-19</a></p>
            
                </div>

                
                

                 </Grid>
                 <Grid item xs={12} sm={4 }>
                 <div className='styles'>Emergency number to call</div>
                 +2348030000000, 5739 00030300
                 </Grid>
             </Grid>
             <Grid item xs={1} sm={1} />

         </Grid>
        

     </div>
      <div className='footer'> 
      © 2020  Covid Update Designed By Saalih Alley     <a href='https://web.facebook.com/alley.soliu/'><FacebookIcon style={{color : 'white'}} /></a> | <a href='https://github.com/Solintin'>< GitHubIcon style={{color : 'white'}}  /></a>
      </div> 
      </>
    )
}