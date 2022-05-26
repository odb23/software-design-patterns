class User {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

class NullUser extends User { // Null Object pattern to avoid null checks

    constructor() {
        super(-1, 'Guest');
    }

    hasAccess() {
        return false
    }
}

const users = [
    new User(1, "Bob"),
    new User(2, "John"),
]

function getUser (id) {
    const user = users.find(user => user.id === id);
    return user == null ? new NullUser() : user;
}

function printUser (id) {
    const user = getUser(id)
    
    // print Guest if user have no name
    console.log("Hello " + user.name)

    // print access message to users
    if (user.hasAccess()) {
        console.log("You have access");
    } else {
        console.log("You are not allowed here!")
    }
}

printUser(1)
printUser(2)
printUser(3)