import React from 'react'
import './Header.css'
import { Grid, IconButton, Avatar, Button } from '@material-ui/core'
import covid from '../Asset/covid.svg'
import Date from '../Date';
import { Link  } from "react-scroll";





export default function Header() {


    return (
        <div className='head'>
            <Grid container >
                <Grid item xs={false} sm={1}></Grid>
                <Grid item xs={12} sm={10} className='headStyle'>
                    <div >
                        <IconButton ><Avatar src={covid} /></IconButton>
                        <span style={{ color: 'blue', fontSize: 25, fontWeight: 900 }}>Cov19Strain</span></div>
                    <div>
                    
                    



                      <Button> 
                        <Link
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                            HOME
                         </Link>
                         </Button>

                      <Button> 
                        <Link
                        activeClass="active"
                        to="symptoms"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                            SYMPTOMS
                         </Link>
                         </Button>

                      <Button> 
                        <Link
                        activeClass="active"
                        to="protection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                            PROTECTION
                         </Link>
                         </Button>


                    </div>
                    <div className='date'>Updated: <Date /> </div>
                </Grid>
                <Grid item xs={false} sm={1}></Grid>

            </Grid>

        </div>
    )
}