import { Flashcard, StudySet } from "../types"

const createStudySet = async (studySet: StudySet) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/decks/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studySet)
        })
        return await response.json()
    } catch (error) {
        console.error('Error creating study set:', error);
        return { error: error }
    }
}
const fetchStudySet = async (slug: string) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/decks/get`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: slug })
        })
        return await response.json()
    } catch (error) {
        console.error('Error fetching study set:', error);
        return { error: error }

    }
}


const updateStudySet = async ({ id, flashcards }: { id: string | undefined; flashcards: Flashcard[] }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/decks/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, flashcards }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating study set:', error);
        return { error: error }
    }
};

const fetchAllFlashcards = async (id: string) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/flashcards/get`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        return await response.json()
    } catch (error) {
        console.error('Error fetching flashcards:', error);
        return { error: error }
    }
}

const deleteFlashCard = async (id: string) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/flashcards/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        return await response.json()

    } catch (error) {
        console.error('Error deleting flashcard:', error);
        return {
            error: error
        }
    }
}


export { createStudySet, fetchStudySet, updateStudySet, fetchAllFlashcards, deleteFlashCard }