import { Button } from '@mui/material';
import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div>
        <a href='/doctor/login'>
            <Button
                type="button"
                variant="contained"
                color="primary"
                size="medium"
                disableElevation= {true}
                sx={{ width: '15vw' }}
            > 
                Login as a doctor
            </Button>
        </a>
        <a href='/client/login'>
            <Button
                type="button"
                variant="contained"
                color="primary"
                size="medium"
                disableElevation= {true}
                sx={{ width: '15vw' }}
            > 
                Login as a client
            </Button>
        </a>
    </div>
  );
};

export default WelcomePage;