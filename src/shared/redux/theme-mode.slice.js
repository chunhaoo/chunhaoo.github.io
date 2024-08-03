import { createSlice } from '@reduxjs/toolkit';
import { getThemeMode, setThemeMode } from '../utils/storage.service';

export const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState: {
        value: getThemeMode() ?? 'dark',
    },
    reducers: {
        switchTheme: (state) => {
            if (state.value === 'dark') {
                state.value = 'bright';
                setThemeMode(state.value);
                return;
            }
            state.value = 'dark';
            setThemeMode(state.value);
        },
    },
});

export const { switchTheme } = themeModeSlice.actions;

export default themeModeSlice.reducer;
