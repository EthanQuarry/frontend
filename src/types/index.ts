import { UUID } from "crypto";

export interface StudySet {
    name: string;
    description: string;
}

export interface DatabaseStudySet extends StudySet {
    id: UUID;
    flashcards: Flashcard[];
}


export interface Flashcard {
    term: string;
    definition: string;
}

export interface DatabaseFlashcard extends Flashcard {
    id: UUID;
    deckId: UUID;
}