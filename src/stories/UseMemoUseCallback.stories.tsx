import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemoUseCallback'
}

export const DifficultCountExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA *= i;
        }

        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>

        <div>
            Result for {resultA}
        </div>

        <div>
            Result for {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    // debugger

    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log("HelpsForReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Alex", "Oskar", "Shanty"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('s') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sanya ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["HTML", "React", "CSS"])

    const memoizedAddBook = useMemo(()=> {
        return ()=> {
            console.log(books)
            const newBooks = [...books, 'MongoDB ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'MongoDB ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log("BooksSecret")

    return <button onClick={props.addBook}>Add book</button>
}

const Books = React.memo(BooksSecret)