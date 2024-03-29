import { Card, CardContent, CardHeader, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        title: {
          color: 'white',
          fontSize: '1rem',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default function TermDefinition({
  id,
  term,
  definition,
  onDelete,
  onChange,
  index,
  deckId,
}: {
  id: string;
  term: string;
  definition: string;
  onDelete: (id: string) => void;
  onChange: (data: { term: string; definition: string }) => void;
  index: number;
  deckId: string | undefined;
}) {
  const [termState, setTermState] = useState(term);
  const [definitionState, setDefinitionState] = useState(definition);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setTermState(newTerm);
    onChange({ term: newTerm, definition: definitionState });
  };

  const handleDefinitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDefinition = e.target.value;
    setDefinitionState(newDefinition);
    onChange({ term: termState, definition: newDefinition });
  };

  return (
    <>
      <div className='mt-5 mb-5 rounded-xl'>
        <ThemeProvider theme={theme}>
          <Card
            sx={{
              backgroundColor: '#2e3856',
            }}
            variant='outlined'
            className='w-full'>

            <CardContent className='flex flex-col space-y-5'>
              <div className='flex flex-row justify-between '>
              <CardHeader
                title={index + 1}
              />
              <CardHeader
                title={<button onClick={() => onDelete(id)}>❌</button>}
              />
              </div>


              <TextField
                fullWidth
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
                fullWidth
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
            </CardContent>

          </Card>
        </ThemeProvider>
      </div>
      <hr className='opacity-30' />
    </>
  );
};

