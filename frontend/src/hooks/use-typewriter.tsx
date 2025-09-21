import { useState, useEffect } from "react";

interface UseTypewriterProps {
	words: string[];
	typeSpeed?: number;
	deleteSpeed?: number;
	delayBetweenWords?: number;
}

export const useTypewriter = ({
	words,
	typeSpeed = 150,
	deleteSpeed = 75,
	delayBetweenWords = 2000,
}: UseTypewriterProps) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = words[currentWordIndex];

		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					// Typing
					if (currentText.length < currentWord.length) {
						setCurrentText(currentWord.slice(0, currentText.length + 1));
					} else {
						// Word complete, start deleting after delay
						setTimeout(() => setIsDeleting(true), delayBetweenWords);
					}
				} else {
					// Deleting
					if (currentText.length > 0) {
						setCurrentText(currentText.slice(0, -1));
					} else {
						// Deletion complete, move to next word
						setIsDeleting(false);
						setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
					}
				}
			},
			isDeleting ? deleteSpeed : typeSpeed
		);

		return () => clearTimeout(timeout);
	}, [
		currentText,
		currentWordIndex,
		isDeleting,
		words,
		typeSpeed,
		deleteSpeed,
		delayBetweenWords,
	]);

	return currentText;
};
