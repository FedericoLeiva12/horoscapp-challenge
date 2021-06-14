import { Box, makeStyles, Button, Stepper } from '@material-ui/core'
import { useEffect } from 'react';
import { useState } from 'react'
import Wizard from '../components/commons/Wizard';
import HeadPWA from '../components/HeadPWA'
import PersonalDataForm from '../containers/Join/PersonalDataForm';
import SelectGenderForm from '../containers/Join/SelectGenderForm';
import randomUserService from '../services/randomUser.service';
import { customTheme } from '../theme';

const initialValues = {
  gender: 0,
  name: '',
  email: '',
  dane: new Date()
}

const Form = [
  {
    title: SelectGenderForm.title,
    component: SelectGenderForm,
  }, {
    title: PersonalDataForm.title,
    component: PersonalDataForm,
  }
]

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <HeadPWA
        title="Horoscapp - Ingresar"
        description="Lee tu horóscopo en cualquier momento."
        keywords="horoscapp, horoscopo, cumpleaños"
      />
      
      <Box component="main" className={classes.root}>
        <Wizard dataSource={Form} initialValues={initialValues}  />
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))