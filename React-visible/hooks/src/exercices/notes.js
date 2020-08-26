import React, { useReducer, useEffect } from 'react';

const initialMarksState = {
    currentMark: '',
    marks: [],
    coeffs: []
}

const MIN_MARK = 0;
const MAX_MARK = 20;
const MAX_MARKS_COUNT = 10;
const MIN_COEFF = 0;

const marksReducer = (state, action) => {
    switch (action.type) {
        case 'setMark':
            return { ...state, currentMark: action.mark }
        case 'add':
            return { ...state, marks: state.marks.concat(state.currentMark), coeffs: state.coeffs.concat(1), currentMark: '' };
        case 'setCoeff':
            return { ...state, coeffs: action.coeffs };
        case 'reset':
            return { ...state, ...initialMarksState };
        default:
            return state;
    }
};

const Notes = () => {
    const [state, dispatch] = useReducer(marksReducer, initialMarksState);
    const { currentMark, marks, coeffs } = state;
    const marksVisible = marks.length >= MAX_MARKS_COUNT;

    const markHandler = () => {
        if (currentMark !== '' && currentMark >= MIN_MARK && currentMark <= MAX_MARK) {
            dispatch({ type: 'add' });
        }
    }

    const coeffHandler = (event, index) => {
        const { value } = event.target;
        if (value !== '' && value >= MIN_COEFF) {
            let newCoeffs = coeffs;
            newCoeffs[index] = value;
            dispatch({ type: 'setCoeff', coeffs: newCoeffs });
        }
    }

    const mean = () => {
        let sumMarks = marks.reduce((accumulator, currentValue, currentIndex) => {
            return Number(accumulator) + Number(currentValue) * coeffs[currentIndex]
        });
        let sumCoeffs = coeffs.reduce((accumulator, currentValue) => {
            return Number(accumulator) + Number(currentValue)
        });
        return Math.floor((sumMarks / sumCoeffs) * 100) / 100;
    }

    return (
        <div className="container mt-5">
            <h1>Notes</h1>
            {!marksVisible ?
            <div className="container inputs">
                <form className="form-inline" onSubmit={event => event.preventDefault()}>
                    <div className="form-group mx-3">
                        <label htmlFor="number1" className="mr-sm-3">Rentrer une note : </label>
                        <input className="form-control" id="number1" type="number" min={MIN_MARK} max={MAX_MARK} value={currentMark} onChange={event => dispatch({ type: 'setMark', mark: event.target.value})}></input>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mt-sm-0" disabled={currentMark === '' || marksVisible} onClick={markHandler}>Ajouter</button>
                </form>
                <small>{`${MAX_MARKS_COUNT - Number(marks.length)} entrées restantes`}</small>
            </div>:
            <div className="container results d-flex flex-column justify-content-center">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>Notes</th>
                            <th>Coefficients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value}</td>
                                    <td>
                                        <div className="form-group d-inline-flex w-25">
                                            <input className="form-control" id={`coeff${index}`} type="number" min={MIN_COEFF} value={coeffs[index]} onChange={event => coeffHandler(event, index)}></input>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="container card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Moyenne</h5>
                        <p className="card-text">{mean()}</p>
                        <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: 'reset' })}>Réinitialiser</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Notes;