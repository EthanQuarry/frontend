
export interface StudySet {
    name: string;
    description: string;
}

export interface DatabaseStudySet extends StudySet {
    id: string;
    flashcards: Flashcard[];
}


export interface Flashcard {
    id: string;
    term: string;
    definition: string;
}

export interface DatabaseFlashcard extends Flashcard {
    deckId: string;
}