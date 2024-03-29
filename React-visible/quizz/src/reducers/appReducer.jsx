import {
    USER_USERNAME_CHANGE,
    USER_EMAIL_CHANGE,
    USER_PASSWORD_CHANGE,
    USER_SIGNUP_VALID_SUBMIT,
    USER_SIGNUP_INVALID_SUBMIT,
    USER_RESET_REGISTRATION,
    USER_LOGIN_CHANGE,
    USER_LOGIN_VALID_SUBMIT,
    USER_LOGIN_INVALID_SUBMIT,
    USER_LOGOUT,
    USER_CLEAR
} from '../constants/user-actions-names';
import {
    QCM_INITIALISATION,
    QUESTION_CHANGE,
    QUESTION_VALID_SUBMIT,
    QUESTION_INVALID_SUBMIT,
} from '../constants/qcm-actions-names';

const initialUser = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    answers: [],
    qcmCompleted: false
}

const initialState = {
    user: { ...initialUser },
    users: [],
    usernameTaken: false,
    emailTaken: false,
    passwordsMatch: true,
    invalidSubmit: false,
    registered: false,
    authenticated: false,
    qcm: [],
    qcmLength: '',
    step: 1,
    answer: '',
}

const appReducer = (state = initialState, action) => {
    let newUser;
    switch (action.type) {
        case USER_USERNAME_CHANGE: {
            newUser = { ...state.user };
            newUser[action.key] = action.value;
            return { ...state, user: newUser, usernameTaken: action.usernameTaken };
        }
        case USER_EMAIL_CHANGE: {
            newUser = { ...state.user };
            newUser[action.key] = action.value;
            return { ...state, user: newUser, emailTaken: action.emailTaken };
        }
        case USER_PASSWORD_CHANGE: {
            newUser = { ...state.user };
            newUser[action.key] = action.value;
            return { ...state, user: newUser, passwordsMatch: newUser.password === newUser.confirmPassword };
        }
        case USER_SIGNUP_VALID_SUBMIT: {
            newUser = { ...action.user };
            delete newUser['confirmPassword'];
            return { ...state, registered: true, users: state.users.concat(newUser), user: { ...initialUser} };
        }
        case USER_SIGNUP_INVALID_SUBMIT: {
            return { ...state };
        }
        case USER_RESET_REGISTRATION: {
            return { ...state, registered: false };
        }
        case USER_LOGIN_CHANGE: {
            newUser = { ...state.user };
            newUser[action.key] = action.value;
            return { ...state, invalidSubmit: false, user: newUser };
        }
        case USER_LOGIN_VALID_SUBMIT: {
            let authenticatedUser = { ...action.user };
            return { ...state, invalidSubmit: false, user: authenticatedUser, authenticated: true };
        }
        case USER_LOGIN_INVALID_SUBMIT: {
            return { ...state, invalidSubmit: true, user: { ...initialUser } };
        }
        case USER_LOGOUT: {
            let clearUser = { ...initialUser };
            clearUser.answers = [];
            return { ...state, user: clearUser, authenticated: false };
        }
        case USER_CLEAR: {
            return { ...state, user: { ...initialUser } }
        }
        case QCM_INITIALISATION: {
            return { ...state, qcm: action.qcm, qcmLength: Object.keys(action.qcm).length, step: 1 };
        }
        case QUESTION_CHANGE: {
            return { ...state, answer: action.value, invalidSubmit: false };
        }
        case QUESTION_VALID_SUBMIT: {
            // Enregistre la réponse de l'utilisateur courant
            let newAnswer = [{ questionRef: action.key, answer: action.answer, right: action.right }];
            let updatedUser = { ...state.user };
            updatedUser['answers'] = updatedUser['answers'].concat(newAnswer);

            // Si l'utilisateur n'est pas à la dernière question du qcm
            if (state.step < state.qcmLength) {
                // Enregistre le nouvel état de l'utilisateur courant
                // Réinitialise la réponse courante
                // Incrémente l'état du qcm de 1

                return { ...state, user: updatedUser, answer: '', step: state.step + 1 };
            }
            // Si l'utilisateur a répondu à la dernière question du qcm
            else {
                // Enregistre dans l'utilisateur courant que le qcm est terminé
                // Met à jour l'utilisateur correspondant dans la liste des utilisateurs
                // Réinitialise la réponse courante
                
                let registeredUsers = { ...state.users };
                let userIndex = '';
                registeredUsers.forEach( (registeredUser, index) => {
                    if (registeredUser['email'] === updatedUser['email']) {
                        userIndex = index;
                    }
                });
                updatedUser['qcmCompleted'] = true;
                registeredUsers[userIndex] = updatedUser;

                return { ...state, user: updatedUser, users: registeredUsers, answer: '' };
            }
        }
        case QUESTION_INVALID_SUBMIT: {
            return { ...state, invalidSubmit: true };
        }
        default:
            return state;
    }
}

export default appReducer;