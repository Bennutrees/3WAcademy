import React, { Fragment, useState, useEffect } from 'react';

const USERS_DATA_URL = `https://jsonplaceholder.typicode.com/users`;

function apiFetch() {
    return (
        <Fragment>
            <Search/>
        </Fragment>
    );
}

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <Fragment>
            <h1>Search user(s) jsonplaceholder</h1>
            <form onSubmit={event => event.preventDefault()}>
                <div className="form-group mx-5 my-5">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" className="form-control" onChange={event => setSearch(event.target.value)}></input>
                </div>
            </form>
            {search !== '' && <Users search={`${search}`}/>}
        </Fragment>
    );
}

const Users = ({ search }) => {
    const ListLoading = WithListLoading(List);
    const regex = new RegExp(search ,'i');
    const [fetchingState, setFetchingState] = useState({
        loading: false,
        users: null
    });

    useEffect(() => {
        setFetchingState({loading: true});
        fetch(USERS_DATA_URL)
            .then(response => response.json())
            .then(users => {
                let filtered_users = users.filter(user => user.name.match(regex));
                setFetchingState({ loading: false, users: filtered_users });
            });
    }, [setFetchingState, search]);

    return (
        <ListLoading isLoading={fetchingState.loading} users={fetchingState.users} />
    )
}

const WithListLoading = (List) => {
    return ({ isLoading, ...props }) => {
        if (!isLoading) return <List {...props} />
        return <p className="mx-5">Hold on, fecthing data may take some time</p>
    }
}

const List = (props) => {
    const { users } = props;
    if (!users || users.length === 0) {
        return <p className="mx-5">No users available or matching</p>
    }
    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

export default apiFetch;