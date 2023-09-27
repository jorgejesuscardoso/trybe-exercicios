const user = {
    name: 'Jorge',
    lastname: 'Cardoso'
}

function User () {
    return(
        <span>{ `${user.name} ${user.lastname}`}</span>
    )
}

export default User;
