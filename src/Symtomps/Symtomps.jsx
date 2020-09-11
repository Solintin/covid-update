import React from 'react'
import { Grid } from '@material-ui/core'
import ladyCovid from '../Asset/illustration.0dced6ad.svg'
import './Symtomps.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Symptoms() {

    const mostCommonSymp = [
        'Dry Cough', 'Tiredness', 'Fever'
    ] 
    const lessCommonSymp = [
        'Ache and pains', 'Sore Throat', 'Diarrhoea', 'Conjunctivitis', 'Headache',
        'Loss of taste or smell', 'A rash on skin or discoloration of fingers or toes '
    ] 
    const seriousCommonSymp = [
        'Dificulty in breathing or shortness of  breath', 'Chest pain or pressure', 'Loss of speech or movement'
    ] 
    return (
        <div className='containerSymp' id='symptoms'>
            <Grid container>
                <Grid item xs={false} sm={1} />
                <Grid item container xs={12} sm={10} spacing={3} >
                    <Grid item xs={12} sm={8}>
                        <div className='headSymp'>
                            Corona Virus Symptoms
                        </div>
                        <div style={{ textAlign : "justify", textJustify: 'auto'}}>
                            <p style={{fontSize : 25, fontWeight: 'bolder'}}>What are the symptoms?</p>
                            People may be sick with the virus for 1 to 14 days before developing symptoms.
                            The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness,
                            and dry cough. Most people (about 80%) recover from the disease without needing special treatment.
                            More rarely, the disease can be serious and even fatal.
                            Older people, and people with other medical conditions (such as asthma,
                            diabetes, or heart disease), may be more vulnerable to becoming severely ill.
                        </div>
                        <div className='mostCommon'>
                            <h3>Most Common Symptoms</h3>
                            {mostCommonSymp.map((mcs, idx) => 
                                <li style={{color : 'steelblue'}} key={idx}> <CheckCircleIcon  style={{ marginRight : '5', top : 2, color: 'steelblue', fontSize : 15}}/>   {mcs}</li>
                                
                            )}

                        </div>
                        <div className='mostCommon'>
                            <h3>Less Common Symptoms</h3>
                            {lessCommonSymp.map((mcs, idx) => 
                                <li style={{color : 'green'}} key={idx}> <CheckCircleIcon  style={{ marginRight : '5', top : 2, color: 'green', fontSize : 15}} />{mcs}</li>
                                
                            )}

                        </div>
                        <div className='mostCommon'>
                            <h3>Serious Symptoms</h3>
                            {seriousCommonSymp.map((mcs, idx) => 
                                <li style={{color : 'red'}} key={idx}> <CheckCircleIcon style={{ marginRight : '5', top : 2, color: 'red', fontSize : 15}} />{mcs}</li>
                                
                            )}

                        </div>
                    </Grid>
                    
                    <Grid item xs={false} sm={4}>
                        <img style={{margin : 15}} src={ladyCovid} alt="LadyCovid" />
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </div>
    )
}