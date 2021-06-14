import { Box, Button, makeStyles } from "@material-ui/core";

function SelectGenderForm (props) {
  const classes = useStyles();

  const _handleChange = (value) => {
    props.setValue((prev) => ({
      ...prev,
      gender: value,
    }))
  }

  return (
    <Box className={classes.buttonsWrapper}>
      <Button aria-label="Hombre" className={`${classes.selectButton} ${props.values.gender === 0? classes.selected: ''}`} onClick={() => _handleChange(0)}>
        <img className={classes.buttonImg} src="/images/gen-1.png" />
      </Button>
      <Button id="otro" aria-label="Otro" aria-flowto="mujer" className={`${classes.selectButton} ${props.values.gender === 1? classes.selected: ''}`} onClick={() => _handleChange(1)}>
        <img className={classes.buttonImg} src="/images/gen-2.png" />
      </Button>
      <Button id="mujer" aria-label="Mujer" aria-flowto="otro" className={`${classes.selectButton} ${props.values.gender === 2? classes.selected: ''}`} onClick={() => _handleChange(2)}>
        <img className={classes.buttonImg} src="/images/gen-3.png" />
      </Button>
    </Box>
  )
}

SelectGenderForm.title = 'Ingresa tu género';

const useStyles = makeStyles(() => ({
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  selectButton: {
    width: '100px',
    height: '100px',
  },
  buttonImg: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  selected: {
    border: '2px solid #888'
  }
}));

export default SelectGenderForm;
