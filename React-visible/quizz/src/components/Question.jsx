import React, { useEffect } from 'react';
import {
    handleQuestionChange
} from '../actions/qcm-actions-types';
import { useDispatch } from 'react-redux';

const Question = (props) => {
    const { question } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (question.type === 'select') {
            dispatch(handleQuestionChange(0));
        }
    }, []);

    const switchQuestionType = (question) => {
        switch (question.type) {
            case 'radio':
                return (
                    question.choices.map((choice, choiceIndex) => {
                        return (
                            <div className="form-check form-check-inline" key={choiceIndex}>
                                <label
                                    className="form-check-label mr-3"
                                    htmlFor={`${question.name}${choiceIndex}`}
                                >
                                    {choice}
                                </label>
                                <input className="form-check-input"
                                    name={question.name}
                                    id={`${question.name}${choiceIndex}`}
                                    type={question.type}
                                    value={choiceIndex}
                                    onChange={(event) => dispatch(handleQuestionChange(event.target.value))}>
                                </input>
                            </div>
                        );
                    })
                );
        case 'select':
            return (
                <select
                    className="custom-select"
                    onChange={(event) => dispatch(handleQuestionChange(event.target.value))}>
                        {question.choices.map((choice, choiceIndex) => {
                            return (<option key={choiceIndex} value={choiceIndex}>{choice}</option>
                            );
                        })}
                </select>
            );
        default:
            return;
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="container card col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 mt-5 mx-5 hv-center text-center">
                <div className="container my-2">
                    <h5>{question.title}</h5>
                    <form className="my-2" >
                        {switchQuestionType(question)}
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Question;