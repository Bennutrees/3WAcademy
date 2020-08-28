export const handleQcmInitialisation = (qcm) => {
    return { type: 'QCM_INITIALISATION', qcm: qcm };
}

export const handleQuestionChange = (value) => {
    return { type: 'QUESTION_CHANGE', value: value };
}

export const handleQuestionSubmit = (questionId, questionElements, answer) => {
    if (answer !== '') {
        let rightAnswer = Number(questionElements.response) === Number(answer);
        return { type: 'QUESTION_VALID_SUBMIT', key: questionId, answer: answer, right: rightAnswer };
    }
    return { type: 'QUESTION_INVALID_SUBMIT' };
}