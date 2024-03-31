import { deleteFlashCard, fetchAllFlashcards, fetchStudySet, updateStudySet } from '../utils';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './layout';
import TermDefinition from './term-definition';
import { DatabaseFlashcard, Flashcard } from '../types';
import {v4 as uuidv4} from 'uuid';

export default function StudySet() {
  const { slug } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pairs, setPairs] = useState<Flashcard[] | DatabaseFlashcard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const studySetData = await fetchStudySet(slug);
        const flashcardData = await fetchAllFlashcards(slug);
        setName(studySetData.name);
        setDescription(studySetData.description);
        setPairs(flashcardData);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slug && pairs.length > 0) {
        if (pairs[0].term !== "" && pairs[0].definition !== "" && pairs[pairs.length - 1].term !== "" && pairs[pairs.length - 1].definition !== "") {
          updateStudySet({ id: slug, flashcards: pairs })
          .then((response) => {
            if (response !== pairs) {
              setPairs(response);
            }
          })
          .catch((error) => {
            console.error('Error updating flashcards:', error);
          });
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [slug, pairs]);

  const handlePairChange = (index: number, pair: Flashcard) => {
    setPairs((prevPairs) => {
      const newPairs = [...prevPairs];
      newPairs[index] = pair;
      return newPairs;
    });
  };

  const addPair = () => {
    setPairs([...pairs, { 
      id: uuidv4(),
      term: '', 
      definition: '' 
    }]);
  };

  const deletePair = (id: string) => {
      deleteFlashCard(id);
      setPairs((pairs as DatabaseFlashcard[]).filter(pair => pair.id !== id));
    }

  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        {name}
      </Typography>
      <p>{description}</p>
      <br />
      <div className=''>
        {(pairs as DatabaseFlashcard[]).map((pair, index) => (
          <TermDefinition
            id={pair.id}
            key={index}
            index={index}
            definition={pair.definition}
            term={pair.term}
            deckId={slug}
            onDelete={deletePair}
            onChange={(updatedPair: Flashcard) => handlePairChange(index, updatedPair)}
          />
        ))}
        <Button 
        fullWidth
        variant='outlined' onClick={addPair}>New</Button>
      </div>
    </Layout>
  );
}