import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import '../main.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function Home() {
    return (
        <>
            <Grid id="homeGrid" container>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item id="homeGridItemLeft"></Item>
                </Grid>
                <Grid size={{ xs: 11, md: 7 }}>
                    <Item id="homeGridItemRight">
                        <ul className='rideList'>
                            <li><a className='nemesis' href="">Nemesis Reborn</a></li>
                            <li><a className='galactica' href="">Galactica</a></li>
                            <li><a className='oblivion' href="">Oblivion</a></li>
                            <li><a className='rita' href="">Rita</a></li>
                            <li><a className='theSmiler' href="">The Smiler</a></li>
                            <li><a className='thirteen' href="">Thirteen</a></li>
                            <li><a className='wickerman' href="">Wickerman</a></li>
                        </ul>
                    </Item>
                </Grid>
                <Grid size={{ xs: 1, md: 1 }}>
                    <Item id='atTag'>
                        <ul className='altonTowersText'>
                            <li>a</li>
                            <li>l</li>
                            <li>t</li>
                            <li>o</li>
                            <li>n</li>
                            <li>.</li>
                            <li>t</li>
                            <li>o</li>
                            <li>w</li>
                            <li>e</li>
                            <li>r</li>
                            <li>s</li>
                        </ul>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default Home