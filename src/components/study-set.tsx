import { fetchAllFlashcards, fetchStudySet, updateStudySet } from '../utils';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAutosave } from 'react-autosave';
import Layout from './layout';
import TermDefinition from './term-definition';
import { Flashcard } from '../types';

export default function StudySet() {
  const { slug } = useParams();
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState('');
  const [pairs, setPairs] = useState([{ term: '', definition: ''}]);

  useEffect(() => {
    const fetchData = async () => {
            if (slug) {
                const studySetData = await fetchStudySet(slug);
                const flashcardData = await fetchAllFlashcards(slug);
                setName(studySetData.name);
                setDescription(studySetData.description);
                setPairs(flashcardData);
            }
    }

    fetchData();
  }, [name, description, slug])


  const handlePairChange = (index: number, pair: Flashcard) => {
    setPairs((prevPairs) => {
      const newPairs = [...prevPairs];
      newPairs[index] = pair;
      return newPairs;
    });
  };

  const addPair = () => {
    setPairs([...pairs, { term: '', definition: '' }]);
  };

  useAutosave({
    data: pairs,
    onSave: (data: Flashcard[]) => {
      updateStudySet({ id: slug, flashcards: data })
        .then((response) => {
          setPairs(response);
        })
        .catch((error) => {
          console.error('Error updating flashcards:', error);
        });
    },
  });


  return (
    <Layout>
        <Typography
            variant="h3"
            gutterBottom
        >{name}</Typography>
        <p>{description}</p>

        <div>
        {Array.isArray(pairs) && pairs.map((pair, index) => (
    <TermDefinition
        key={index}
        definition={pair.definition}
        term={pair.term}
        onChange={(updatedPair: Flashcard) => handlePairChange(index, updatedPair)}
    />
))}
      <Button onClick={addPair}>New</Button>
        </div>
    </Layout>
  );
}