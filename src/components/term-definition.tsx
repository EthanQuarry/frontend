import { TextField } from '@mui/material';
import React, { useState } from 'react';




export default function TermDefinition({ term, definition, onChange }: { term: string; definition: string; onChange: (data: { term: string; definition: string }) => void}){
  const [termState, setTermState] = useState(term);
  const [definitionState, setDefinitionState] = useState(definition);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermState(e.target.value);
    onChange({ term, definition });
  };

  const handleDefinitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefinitionState(e.target.value);
    onChange({ term, definition });
  };

  return (
    <div>
      <TextField
        value={termState}
        onChange={handleTermChange}
        label="Term"
        color="secondary"
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
      <TextField
        value={definitionState}
        onChange={handleDefinitionChange}
        label="Definition"
        variant="outlined"
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
    </div>
  );
};

