import React, {useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: 'Select Examples'
}

type CityType = {
    country: string
    countryId: number
    title: string
    countCitizens: number
    value: string
}

const cities: Array<CityType> = [
    {country: 'Ukraine', countryId: 1, title: "Kiev", countCitizens: 2884000, value: "1"},
    {country: 'Ukraine', countryId: 1, title: "Kharkov", countCitizens: 1421000, value: "2"},
    {country: 'Ukraine', countryId: 1, title: "Odessa", countCitizens: 1010000, value: "3"},
    {country: 'Belarus', countryId: 2, title: "Minsk", countCitizens: 1975000, value: "4"},
    {country: 'Belarus', countryId: 2, title: "Gomel", countCitizens: 511000, value: "5"},
    {country: 'Belarus', countryId: 2, title: "Grodno", countCitizens: 369000, value: "6"},
    {country: 'Russia', countryId: 3, title: "St. Petersburg", countCitizens: 5601000, value: "7"},
    {country: 'Russia', countryId: 3, title: "Novosibirsk", countCitizens: 1633000, value: "8"},
    {country: 'Russia', countryId: 3, title: "Yekaterinburg", countCitizens: 1588000, value: "9"},
]

const SelectMemo = React.memo(Select)

export const CitiesFromUA = () => {
    const [value, setValue] = useState(null)
    const [count, setCount] = useState(0)
    const items = useMemo(() => {
        return cities.filter(c => c.countryId === 1)
    }, [])

    return <>
        <SelectMemo
            items={items}
            value={value}
            onChange={setValue}
        />
        <button onClick={() => setCount(count + 1)}>Add count</button>
        <span>Count - {count}</span>
    </>
}

export const CitiesWithLetterS = () => {
    const [value, setValue] = useState(null)
    const [count, setCount] = useState(0)
    const items = useMemo(() => {
        return cities.filter(c => c.title.trim().includes('s'))
    }, [cities])

    return <>
        <SelectMemo
            items={items}
            value={value}
            onChange={setValue}
        />
        <button onClick={() => setCount(count + 1)}>Add count</button>
        <span>Count - {count}</span>
    </>
}

export const CitiesWithPopulationMoreMillion = () => {
    const [value, setValue] = useState(null)
    const [count, setCount] = useState(0)
    const items = useMemo(() => {
        return cities.filter(c => c.countCitizens >= 1000000)
    }, [cities])

    return <>
        <SelectMemo
            items={items}
            value={value}
            onChange={setValue}
        />
        <button onClick={() => setCount(count + 1)}>Add count</button>
        <span>Count - {count}</span>
    </>
}