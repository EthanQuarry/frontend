
export interface StudySet {
    name: string;
    description: string;
}

export interface DatabaseStudySet extends StudySet {
    id: number;
    flashcards: Flashcard[];
}


export interface Flashcard {
    term: string;
    definition: string;
}
