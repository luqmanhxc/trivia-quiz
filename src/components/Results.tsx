import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';

const Results = () => {
    const score = useAppSelector((state) => state.score.score);
    const { loading, quiz, error } = useAppSelector((state) => state.quiz);
    console.log(score);

    return (
        <div>
            <h2>You scored:</h2>
            <h3>{score.filter((obj) => obj.correct === true).length} / 5</h3>
        </div>
    );
};

export default Results;
