import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("Example1")

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect when first render and every counter chanhged')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={()=> setCounter(counter + 1)}>counter+</button>
        <button onClick={()=> setFake(fake + 1)}>fake+</button>
    </>
}