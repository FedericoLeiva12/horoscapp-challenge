import { Box, TextField } from "@material-ui/core";
import { KeyboardDatePicker } from '@material-ui/pickers'

function PersonalDataForm (props) {
  const _handleNameChange = (name) => {
    props.setValue((prev) => ({
      ...prev,
      name
    }))
  }

  const _handleEmailChange = (email) => {
    props.setValue((prev) => ({
      ...prev,
      email
    }))
  }

  const _handleDateChange = (date) => {
    props.setValue((prev) => ({
      ...prev,
      date: new Date(date)
    }))
  }

  return (
    <Box>
      <TextField label="Nombre" placeholder="Nombre" onChange={_handleNameChange} value={props.values.name} />
      <TextField label="Correo electronico" placeholder="Correo electronico" onChange={_handleEmailChange} value={props.values.email} />
      <TextField
        id="date"
        label="Fecha de nacimiento"
        type="date"
        defaultValue={`${props.values.date.getFullYear()}-${props.values.date.getMonth() + 1}-${props.values.date.getDate()}`}
        onChange={_handleDateChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

PersonalDataForm.title = 'Ingresa tus datos';

//const useStyles = makeStyles(() => ({
//}));

export default PersonalDataForm;
