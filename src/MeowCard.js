import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { playMeow } from './Meow';

export default function MediaControlCard(props) {
  return (
    <Card variant="outlined" sx={{ display: 'flex' }}>
      <Button onClick={() => {
          playMeow(props.mp3);
        }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            <img
              src={props.src}
              alt={props.title}
              height={64}
            />
            <Typography variant="string" 
                        align="center"
                        color="text.secondary" 
                        component="div">
              { props.title }
            </Typography>
          </CardContent>
        </Button>
    </Card>
  );
}
