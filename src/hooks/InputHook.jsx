import { useState } from 'react'

let InputHook = (val) => {

    let [state, setState] = useState(val);

    let InputEvent = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
    }

    let clear = () => {
        setState("");
    }

    return [state, InputEvent, clear];
}

export default InputHook
