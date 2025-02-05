import React from 'react';
import TextField from '@material-ui/core/TextField';


function CampoDeTexto({
  id,
  name,
  value,
  label,
  error,
  onChange,
  type = "text",
  required = false
}) {
    return (
        <TextField
            data-testid={`${id}-text-field`}
            id={id}
            type={type}
            name={name}
            label={label}
            value={value}
            {...(error && {error: true, helperText: error})}
            variant="outlined"
            onChange={onChange}
            required={required}
            fullWidth
            style={{ marginTop: '20px', marginBottom: '20px'}}
        />
    );
}

export default CampoDeTexto;