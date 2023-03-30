import React from 'react';
import FavDramas from './FavDramas';
import './DramaList.css';
import { Grid } from '@mui/material';
import legalHigh from '../images/legalHigh.jpeg';
import atsuhime from '../images/atsuhime.jpeg';
import jin from '../images/jin.jpeg';
import eva from '../images/eva.jpeg';
import madoka from '../images/madoka.jpeg';
import inuyasha from '../images/inuyasha.jpeg';

const dramaInfo = [
    { name: "Legal High", year: 2012, img: legalHigh },
    { name: "Atsuhime", year: 2008, img: atsuhime },
    { name: "Jin", year: 2009, img: jin }
]

const animeInfo = [
    { name: "Neon Genesis Evangelion", year: 1995, img: eva },
    { name: "Puella Magi Madoka Magica", year: 2011, img: madoka },
    { name: "Inuyasha", year: 2000, img: inuyasha }
]


function DramaList() {
    return(
        <div>
            <div className="section">
                <h2 style={{textAlign:'center'}}>My Favorite Jdramas</h2>
                <Grid container spacing={3}>
                    {dramaInfo.map((drama) => (
                                    <Grid item xs={4}>
                                        <FavDramas
                                            name={drama.name}
                                            year={drama.year}
                                            img={drama.img}
                                        />
                                    </Grid>
                            )
                        )
                    }
                </Grid>
            </div>
            
            <div  className="section">
                <h2 style={{textAlign:'center'}}>My Favorite Animes</h2>
                <Grid container spacing={3}>
                    {animeInfo.map((drama) => (
                                    <Grid item xs={4}>
                                        <FavDramas
                                            name={drama.name}
                                            year={drama.year}
                                            img={drama.img}
                                        />
                                    </Grid>
                            )
                        )
                    }
                </Grid>
            </div>
            
        </div>
        
    )
}

export default DramaList;