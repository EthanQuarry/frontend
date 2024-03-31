import { Flashcard, DatabaseFlashcard } from "../types";
import { fetchAllFlashcards, fetchStudySet } from "../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./layout";
import { Typography } from "@mui/material";
import CardFlip from "./ui/card-flip";
import { Button } from "./ui/button";

export default function SetStudy() {
    const { slug } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pairs, setPairs] = useState<Flashcard[] | DatabaseFlashcard[]>([]);
    const [fails, setFails] = useState<Flashcard[] | DatabaseFlashcard[]>([]);
    const [finished, setFinished] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const failure = () => {
        if (currentIndex === pairs.length -1) {
            setFails((prevFails) => {
                return [...prevFails, pairs[currentIndex]];
            });
            setCurrentIndex((prevIndex) => {
                return prevIndex + 1;
            });
            setFinished(true);
        } else {
            setFails((prevFails) => {
                return [...prevFails, pairs[currentIndex]];
            });
            setCurrentIndex((prevIndex) => {
                return prevIndex + 1;
            });
        }
    }

    const success = () => {
        if (currentIndex === pairs.length -1) {
            setCurrentIndex((prevIndex) => {
                return prevIndex + 1;
            });
            setFinished(true);
        } else {
            setCurrentIndex((prevIndex) => {
                return prevIndex + 1;
            });
        }
    }

    return (
        <Layout>
            <Typography variant="h3" gutterBottom>
                {name}
            </Typography>
            <p>{description}</p>
            <br />
            {(pairs.length > 0 && (currentIndex !== pairs.length)) && (
                <>
                    <CardFlip
                        term={pairs[currentIndex].term}
                        definition={pairs[currentIndex].definition}
                    />
                    <div
                        className="flex space-x-4 mt-4"
                    >
                        <Button
                            variant="success"
                            className="w-full"
                            onClick={() => success()}
                        >I new it  :)</Button>
                        <Button
                            variant="failure"
                            className="w-full"
                            onClick={() => failure()}
                        >I didn't know it :(</Button>

                    </div>
                </>
            )}
            {(currentIndex == pairs.length) && (
                <div>
                    <Typography variant="h4" gutterBottom>
                        You have finished the study set!
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        You got {pairs.length - fails.length} out of {pairs.length} correct.
                    </Typography>
                </div>
            )}
        </Layout>
    )
}
