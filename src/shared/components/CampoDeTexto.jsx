import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';

function CampoDeTexto({
  id,
  name,
  value,
  label,
  error,
  onChange,
  required = false
}) {
    return (
        <>
            {<TextField
                id={id}
                type="text"
                name={name}
                label={label}
                value={value}
                {...(error && {error: true, helperText: error})}
                variant="outlined"
                onChange={onChange}
                required={required}
                fullWidth
            />}
        </>
    );
}

export default CampoDeTexto;