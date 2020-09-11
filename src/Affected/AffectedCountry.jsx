import React  from 'react'
import './AC.css'
import Date from '../Date'
import { Grid } from '@material-ui/core'
import map from '../Asset/map.20660f2e.png'

function AffCont(props) {



    const { Countries} = props.covidApi
    const sortedCountries = Countries.sort( (a,b) =>(
        b.TotalConfirmed - a.TotalConfirmed
    ));
    const selectedCountry = sortedCountries[0];

    const [coronaCases, setCoronaCases] = React.useState({
        countryName : selectedCountry.Country,
        Active : selectedCountry.TotalConfirmed - selectedCountry.TotalRecovered,
        NewConfirmed : selectedCountry.NewConfirmed,
        TotalConfirmed : selectedCountry.TotalConfirmed,
        NewDeaths: selectedCountry.NewDeaths,
        TotalDeaths: selectedCountry.TotalDeaths,
        NewRecovered: selectedCountry.NewRecovered,
        TotalRecovered: selectedCountry.TotalRecovered,
        checkCountry : {}
    })
    
    const handleClick = (code) => {
        const {Countries} = props.covidApi 
        const chooseCountry = Countries.filter( filCoutry => 
            filCoutry.CountryCode === code );

    
        setCoronaCases({

        ...coronaCases,
        countryName : chooseCountry[0].Country,
        Active : chooseCountry[0].TotalConfirmed - chooseCountry[0].TotalRecovered,
        NewConfirmed : chooseCountry[0].NewConfirmed,
        TotalConfirmed : chooseCountry[0].TotalConfirmed,
        NewDeaths: chooseCountry[0].NewDeaths,
        TotalDeaths: chooseCountry[0].TotalDeaths,
        NewRecovered: chooseCountry[0].NewRecovered,
        TotalRecovered: chooseCountry[0].TotalRecovered,
        checkCountry : chooseCountry[0], 
      
        });
        return chooseCountry.Country
    }
   

    const contList = sortedCountries.map((items, idx) =>{
        while(idx < 5){
        return(
            <ul key={idx}>
               
            <li onClick={() => handleClick(`${items.CountryCode}`)}  className={`${items.CountryCode === coronaCases.checkCountry.CountryCode  ? 'clickTab' : '' }   countryList`}>
                <div 
                style={{fontWeight : 800, fontSize : 20}}> 
                <img className='contImage'  src={`https://www.countryflags.io/${items.CountryCode}/shiny/64.png`} 
                 alt={items.CountryCode} /> 
                {items.Country}
                </div>
                <div 
                style={{color : 'blue', fontWeight : 800, fontSize : 20}}>
                    {items.TotalConfirmed.toLocaleString()}</div>
            </li>
           </ul>
        )
    }
return null})


  
   
    
    

  const  cases= [
        {
        name : 'Total Cases',
        Attribute : coronaCases.TotalConfirmed,
        color : 'blue'
        },
        {
        name : 'Active Cases',
        Attribute : coronaCases.Active,
        color : 'chocolate'
        },
        {
        name : 'Total Recovered',
        Attribute : coronaCases.TotalRecovered,
        color : 'green'
        },
        {
        name : 'Total Deaths',
        Attribute : coronaCases.TotalDeaths,
        color : 'brown'
        },
        {
        name : 'New Cases',
        Attribute : coronaCases.NewConfirmed,
        color : 'blue'
        },
        {
        name : 'New Death',
        Attribute : coronaCases.NewDeaths,
        color : 'brown'
        }
    ]
    

    
    
    return (
        <>
            <div >
               <Grid container >
                    <Grid item  xs={false} sm={1}  />
                    <Grid item xs={12} sm={10} className='AffContPane'> 
                    <h2>Top Affected Countries</h2>
                <h5>Last Updated :  <Date/> </h5>

                    <Grid item container spacing={1}>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className='country'>
                                <h3>Countries</h3>
                                {contList}
                            </div>
                        </Grid>
                        <b style={{top : -10}}>
                            {coronaCases.countryName}</b>
                        <Grid item container xs={12} sm={12} md={4} spacing={1}>
                           
                            {cases.map((list, idx) => {
                                return(
                                    <Grid item xs={6} key={idx}>
                                        <div className='contentInfo'>
                                            
                                            <div>{list.name}</div>
                                            <div 
                                            style={{color : list.color, fontSize : 25, fontWeight : 700}}>
                                                
                                            {list.Attribute.toLocaleString()}
                                            </div>
                                        </div>

                            </Grid>
                                )
                            })}
                            
                            
                           
                        </Grid>
                        <Grid item xs={false} sm={12} md={4}>
                            <img src={map}  alt="Covid-map"/>
                        </Grid>

                    </Grid>






                    </Grid>
                    <Grid item  xs={false} sm={1}  />
               </Grid>

            </div>
        </>
    )

}
export default AffCont 