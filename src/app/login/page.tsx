"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Logear } from '@/services/usuarios/Logear';
import { useRouter } from 'next/navigation';
import { CredencialesStore } from '@/services/usuarios/GuardarCredenciales';
import Image from 'next/image';

function Registrar() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

  
    const handleSubmit = async (event :React.FormEvent<HTMLFormElement> ) => {
      event.preventDefault();
      try {
        const res = await Logear(email , password);
        const { access_token } = res;
        
        if (access_token != null) {
          CredencialesStore(access_token, email);
          router.push('/admin/dashboard');
        } else {
          setError('Error en las credenciales');
        }
      } catch (error) {
        console.log(error);
        setError('Error en la solicitud, vuelva a intentar');
      }
    };

  
    return (
      <main>
        <Container component="main" maxWidth="xs" style={{ marginTop : 25 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image src='/images/login.png' alt='imagen logo' width={250} height={250} />
          </Box>
          <Box sx={{ marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                data-testidemail="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                data-testidpassword="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <Button
                data-testidbtniniciar='iniciar'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    );
}

export default Registrar;
