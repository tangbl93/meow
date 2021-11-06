import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MeowCard from './MeowCard'

import { meows } from './Meow';

export default function MeowGrid() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        {meows.map((meow) => 
          <Grid item xs={6} padding={1}>
            <MeowCard title={meow.title} mp3={meow.mp3} src={meow.src}/>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
