import React from 'react'
import './Tracker.css'
import { Grid } from '@material-ui/core'

export default function Tracker(props) {


  const active = props.covidApi.Global.TotalConfirmed - (props.covidApi.Global.TotalRecovered )
  return (
    <>

      <Grid container  >
        <Grid item xs={false} sm={1}></Grid>

        <Grid item xs={12} sm={10} >
          <Grid item>
            <div className='trackHeader'>
              COVID-19 Tracker
                    </div>
          </Grid>
          <div className='trackerPane' >
            <Grid item container spacing={2}>

            <Grid item xs={12} sm={6} md={3}>
                <div className='casesBlue'>
                  <span>Total</span>
                  <span className='Total'>{props.covidApi.Global.TotalConfirmed.toLocaleString()}</span>
                  <span style={{ fontSize: 15 }}>+{props.covidApi.Global.NewConfirmed.toLocaleString()} </span>
                </div>

              </Grid >
              <Grid item xs={12} sm={6} md={3}>
                <div className='casesPink'>
                  <span>Active</span>
                  <span className='Active'>{active.toLocaleString()} </span>
                  <span style={{ fontSize: 15 }}>+{props.covidApi.Global.NewConfirmed.toLocaleString() - props.covidApi.Global.NewRecovered.toLocaleString()} </span>
                </div>


              </Grid >
              
              <Grid item xs={12} sm={6} md={3}>
                <div className='casesGreen'>
                  <span>Recovered</span>
                  <span className='Recovered'>{props.covidApi.Global.TotalRecovered.toLocaleString()}</span>
                  <span style={{ fontSize: 15 }}>+{props.covidApi.Global.NewRecovered.toLocaleString()} </span>
                </div>

              </Grid >
              <Grid item xs={12} sm={6} md={3}>
                <div className='casesRed'>
                  <span>Death</span>
                  <span className='Death'>{props.covidApi.Global.TotalDeaths.toLocaleString()}</span>
                  <span style={{ fontSize: 15 }}>+{props.covidApi.Global.NewDeaths.toLocaleString()} </span>
                </div>

              </Grid >
            </Grid>

          </div>

        </Grid>
        <Grid item xs={false} sm={1}></Grid>

      </Grid>


    </>
  )
}