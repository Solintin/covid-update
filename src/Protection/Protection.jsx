import React from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import './Protection.css'
import walking from '../Asset/illustration.7fdb93ed.svg'
import hand from '../Asset/hand.6799d79f.svg'
import face from '../Asset/face.d0931ed7.svg'
import distance from '../Asset/distance.1a5b50ec.svg'
import mask from '../Asset/mask.b91736e6.svg'
import stay from '../Asset/stay.25f35771.svg'



export default function Protect() {

    const content = [
        hand, face, distance, mask, stay
    ];
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <div className='protectionPane' id='protection'>
            <Grid container>
                <Grid item xs={false} sm={1} />
                <Grid item container xs={12} sm={10} className='container' spacing={3} >

                    {isMobile ? <Grid item sm={5}>
                        <img src={walking} alt="Covid 19" />

                    </Grid> : null}
                    <Grid item xs={false} sm={1} />

                    <Grid style={{ paddingLeft: 10, paddingRight: 10 }} item  container xs={12} sm={6}  spacing={2} >
                        <h2>How can I protect myself from Covid-19 ?</h2>
                        Coronavirus disease spreads primarily through contact with an infected person
                        when they cough or sneeze. It also spreads when a person touches a surface or
                        object that has the virus on it, then touches their eyes, nose, or mouth.

                        <h3>What should <span style={{ color: 'green' }}>I do?</span></h3>

                        <Grid item container justify='center' style={{padding: 10}}>
                            {content.map( (content, idx) =>
                            <Grid item xs={6} key={idx} >
                                <img className='content' src={content} alt="Covidimage"/>
                            </Grid>
                            )}

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </div>
    )
} 