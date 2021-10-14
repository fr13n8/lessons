import { useState } from "react";

const useInput = (initial, {required, min, max}) => {
    const [value, setValue] = useState(initial)
    const [error, setError] = useState({
        requiredText: null,
        minText: null,
        maxText: null
    })

    return {
        value,
        onBlur: e => {
            console.log(e.target.value.length)
            if(e.target.value.length < min) {
                setError({...error, minText: `Min letters: ${min}`})
            } else {
                // setError({...error, minText: null})
            }
            if(e.target.value.length > max) {
                setError({...error, maxText: `Max letters: ${max}`})
            } else {
                // setError({...error, maxText: null})
            }
            if(e.target.value.length === 0 && required) {
                setError({...error, requiredText: 'required field' })
            } else {
                // setError({...error, requiredText: null })
            }
        },
        onChange: e => setValue(e.target.value),
        error
    }
}

export default useInput