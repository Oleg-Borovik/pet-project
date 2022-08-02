import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import { setOtherValueTest } from "../redux/converterSlice";
import {RootState} from "../redux/store";

export const Text: React.FC = () => {
    const reduxState = useSelector((state: RootState) => state.converter.test)
    const [text, setText] = useState(useSelector((state: RootState) => state.converter.test))

    const dispatch = useDispatch()
    function setReduxText() {
        dispatch(setOtherValueTest(text))
    }
    return <div>
        Какаой-то текст 3123123
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        {reduxState}
        <button onClick={() => setReduxText()}>
            SET
        </button>
    </div>
}
