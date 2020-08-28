import React, { useEffect, useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Question from './Question';
import {
    handleQcmInitialisation,
    handleQuestionSubmit
} from '../actions/qcm-actions-types';

const Qcm = () => {
    const URL_QUESTIONS = 'http://localhost:3000/assets/qcm.json';
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const dispatch = useDispatch();
    const { answer, step, user } = useSelector((state) => state);

    useEffect(() => {
        fetch(URL_QUESTIONS)
        .then(response => {
            if (response.ok) {
                setIsLoading(false);
                return response.json();
            }
        })
        .then(data => {
            setQuestions(data);
            user.answers.length === 0 && dispatch(handleQcmInitialisation(data));
        })
    }, []);

    return (
        <Fragment>
            {user.qcmCompleted
                ?  <Redirect to="/scoreboard" />
                : <Fragment>
                    {isLoading
                        ? <div className="container card col-10 login-card mt-5 mx-5 hv-center">
                            <p>Chargement des questions...</p>
                        </div>
                        : <Fragment>
                            {(() => {
                                    const questionsArray = []
                                    for (let key in questions) {
                                        questionsArray.push([key, questions[key]]);
                                    }
                                    return questionsArray;
                                })().map((question, index) => {
                                const questionReference = question[0];
                                const questionElements = question[1];
                                return (
                                    step === index + 1 &&
                                    <Question key={index} question={questionElements} >
                                        <div className="container d-flex flex-column align-items-center">
                                            <button
                                                type="submit"
                                                id={questionReference}
                                                className="btn btn-primary mt-2"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    return dispatch(handleQuestionSubmit(event.target.id, questionElements, answer));
                                                }}
                                            >
                                                Valider
                                            </button>
                                        </div>
                                    </Question>
                                );
                            })}
                        </Fragment>
                    }
                </Fragment>
            }
        </Fragment>
    )
}

export default Qcm;