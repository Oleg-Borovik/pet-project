import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ConverterState {
    test: string
}
const initialState: ConverterState = {
    test: "TEXT"
}

export const converterSlice = createSlice({
    name: 'converter',
    initialState,
    reducers: {
        setOtherValueTest: (state, action: PayloadAction<string>) => {
            state.test = action.payload
        }
    }
})

export const {setOtherValueTest} = converterSlice.actions
export default converterSlice.reducer