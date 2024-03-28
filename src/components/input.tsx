import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input({label, onChange}: {label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
        <TextField
        onChange={onChange}
        fullWidth
        color="secondary"
        label={label}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
          },
        }}
      />
  );
}