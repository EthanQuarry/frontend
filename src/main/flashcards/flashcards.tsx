import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import Input from '../../components/input';
import DescriptionInput from '../../components/description-input';
import Typography from '@mui/material/Typography';
import { DatabaseStudySet } from '../../types';
import { Button } from '@mui/material';
import { createStudySet } from '../../utils';

export default function FlashCards() {
  const [decks, setDecks] = React.useState<DatabaseStudySet[]>([])
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  useEffect(() => {
    const fetchDecks = async () => {
      const response = await fetch('http://localhost:3000/api/decks')
      const data: DatabaseStudySet[] = await response.json()
      return data
    }

    fetchDecks().then((data) => {
      setDecks(data)
    })
  }, [decks])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDecriptionInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div>

      <Layout>
        <Typography variant="h3" gutterBottom>
          Create a new study set
        </Typography>
        <form className="w-full flex flex-col space-y-5">
          <div className="w-full">
            <Input onChange={handleInputChange} label="Title" />
          </div>
          <div className="w-full pt-5">
            <DescriptionInput onChange={handleDecriptionInputChange} label="Description" />
          </div>
          <Button
            variant="contained"
            color='success'
            size='large'
            onClick={() => createStudySet({
              name: name,
              description: description
            })}>Create</Button>
        </form>


        <div className='mt-14'>
          <Typography variant="h3" gutterBottom>
            Study sets
          </Typography>
          <div className="w-full flex flex-col"></div>
          {decks ? decks.map((item) => (
            <div className="w-full p-5 rounded-lg mt-5 mb-5  bg-[#2e3856] shadow-md flex justify-between items-center">
              <div>
                <Typography variant="h5" gutterBottom>{item.name}</Typography>
                <p>{item.description}</p>
              </div>
              <div className='flex space-x-2'>
                <Button href={`/study-set/${item.id}`} variant="outlined" color='warning' size='large'>Edit</Button>
                <Button variant="contained" color='success' size='large'>Study</Button>
              </div>
            </div>
          )

          )
            : <p>Loading...</p>
          }
        </div>
      </Layout>
    </div>
  );
};
