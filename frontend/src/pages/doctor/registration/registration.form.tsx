import { Button, InputBaseComponentProps, TextField, Typography, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../store';
import './.css'
import { registerSuccess } from '../../../redux/reducers/auth';
import { register } from '../../../api/client/auth';

const Registration: React.FC = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [apiError, setApiError] = useState<String>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setApiError("Passwords don't match");
    } else {
        try {
            const idToken = await dispatch(register(username, email, password, specialization)).unwrap();
            await dispatch(registerSuccess(idToken));
            navigate('/doctor/cabinet');
        } catch (error) {
            setApiError((error as any).message);
        }
    }
  };

  return (
    <form className='register-form_form' onSubmit={handleSubmit}>
        <div className="register-form">
            <Typography variant='h4' component='div' gutterBottom = {true}>
                Register
            </Typography>
            <TextField
                label='Enter your name' 
                inputProps={username as unknown as InputBaseComponentProps}
                size='small'
                fullWidth={true}
                sx={{ width: '25vw' }}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                label='Enter your email' 
                inputProps={email as unknown as InputBaseComponentProps}
                size='small'
                margin='normal'
                fullWidth={true}
                sx={{ width: '25vw' }}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label='Enter your password' 
                inputProps={password as unknown as InputBaseComponentProps}
                type="password"
                size='small'
                margin='normal'
                fullWidth={true}
                sx={{ width: '25vw' }}
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                label='Confirm your password' 
                inputProps={passwordConfirm as unknown as InputBaseComponentProps}
                type="password"
                size='small'
                margin='normal'
                fullWidth={true}
                sx={{ width: '25vw' }}
                onChange={e => setPasswordConfirm(e.target.value)}
            />
            <TextField
                label='Enter your specialization' 
                inputProps={specialization as unknown as InputBaseComponentProps}
                size='small'
                margin='normal'
                fullWidth={true}
                sx={{ width: '25vw' }}
                onChange={e => setSpecialization(e.target.value)}
            />
            <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                size="large"
                className='auth-form_button'
                disableElevation= {true}
                sx={{ width: '25vw' }}
            > 
                Register 
            </Button>
            <Snackbar
                message={apiError}
                autoHideDuration={6000}
                open={apiError.length > 0}
                onClose = {() => { setApiError('') }}
            >
                <Alert severity="error"> {apiError} </Alert>
            </Snackbar>
            <Typography variant='subtitle1' component='div' gutterBottom = {true}>
                <a href='/login'>Already have an account?</a>
            </Typography>
      </div>
    </form>
  );
};

export default Registration;