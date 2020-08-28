import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Scoreboard = () => {
    const { user, qcm } = useSelector((state) => state);
    
    return (
        <div className="row justify-content-center">
            <div className="container card col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 mt-5 mx-5 hv-center text-center">
                <div className="container my-2">
                    {!user.qcmCompleted
                        ? <h5 className="card-title">Veuillez finir de remplir le <Link to="/qcm">QCM</Link> d'abord !</h5>
                        : <Fragment>
                            <h5 className="card-title">
                                <p>Voici votre score :</p>
                                <p>{user.answers.reduce((accumulator, currentValue) => currentValue.right ? accumulator + 1 : accumulator, 0)}</p>
                            </h5>
                            <div className="container card-text">
                                {user.answers.map((answer, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <p>{answer.right ? 'Bonne réponse !' : 'Mauvaise réponse !' }<br/>
                                            {qcm[answer.questionRef]['feedback']}<br/>
                                            Et tu as répondu : {qcm[answer.questionRef]['choices'][answer.answer]}</p>
                                        </Fragment>
                                    );
                                })}
                            </div>
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default Scoreboard;