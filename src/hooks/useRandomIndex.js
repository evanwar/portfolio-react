import { useState } from "react"

export const useRandomIndex = (initialState = 16) => {

    const [index, setIndex] = useState(initialState)

    const selectRandom = () => setIndex(Math.random() * initialState);

    return {
        index,
        selectRandom
    };

}