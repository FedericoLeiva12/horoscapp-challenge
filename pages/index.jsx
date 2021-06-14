import { Box, makeStyles, Button } from '@material-ui/core'
import { useEffect } from 'react';
import { useState } from 'react'
import HeadPWA from '../components/HeadPWA'
import randomUserService from '../services/randomUser.service';
import { customTheme } from '../theme';
import { useRouter } from 'next/router'

const useStyles = makeStyles(() => ({
  main: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  profileWrapper: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: customTheme.spacing(2)
  },
  profileImage: {
    width: 'auto',
    height: 'auto',
    minWidth: '150px',
    maxWidth: '150px',
    borderRadius: '100%',
  },
  buttonWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export default function Home() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState('/images/LoadingProfile.png');

  const classes = useStyles();

  useEffect(() => {
    randomUserService.getRandomUser()
      .then((res) => {
        setTimeout(() =>
        setProfileImage(res.data.results[0].picture.large), 1000)
      })
      .catch((err) => {
        console.error({ err, data: { ...err } });
      })
  }, []);

  return (
    <>
      <HeadPWA
        title="Horoscapp - Inicio"
        description="Lee tu horóscopo en cualquier momento."
        keywords="horoscapp, horoscopo, cumpleaños"
      />
      
      <Box component="main" className={classes.main}>
        <Box className={classes.profileWrapper}>
          <img className={classes.profileImage} src={profileImage} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" className={classes.buttonWrapper}>
          <Button variant="contained" color="primary" onClick={() => router.push('/join')}>INGRESAR</Button>
        </Box>
      </Box>
    </>
  )
}