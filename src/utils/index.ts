import { Flashcard, StudySet } from "../types"

const createStudySet = async (studySet: StudySet) => {
    const response = await fetch('http://localhost:3000/api/decks/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studySet)
    })
    return await response.json()
}
const fetchStudySet = async (slug: string) => {
    const response = await fetch(`http://localhost:3000/api/decks/get`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: slug })
    })
    return await response.json()
}


const updateStudySet = async ({ id, flashcards }: { id: string | undefined; flashcards: Flashcard[] }) => {
    const response = await fetch(`http://localhost:3000/api/decks/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, flashcards }),  });
  
    if (!response.ok) {
      throw new Error('Failed to update study set');
    }
  
    const data = await response.json();
    return data;
  };

const fetchAllFlashcards = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/flashcards/get`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    return await response.json()

}

export { createStudySet, fetchStudySet, updateStudySet, fetchAllFlashcards }