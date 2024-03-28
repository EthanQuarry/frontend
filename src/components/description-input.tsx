import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionInput({label, onChange}: {label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
        <TextField
        fullWidth
        color="secondary"
        label={label}
        variant="outlined"
        onChange={onChange}
        rows={4}
        multiline
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