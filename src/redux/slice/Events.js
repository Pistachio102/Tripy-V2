/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        busyEvents: [],
        busyEventsLoaded: false,
        meeting: {
            summary: '',
            description: '',
            attendees: [],
            location: '',
            from: new Date(),
            to: new Date(new Date().setHours(new Date().getHours() + 1)),
        },
        date: null,
    },
    reducers: {
        setEvents: (state, action) => ({
            ...state,
            events: action.payload,
        }),
        setBusyEvents: (state, action) => ({
            ...state,
            busyEvents: action.payload,
            busyEventsLoaded: true,
        }),
        setMeeting: (state, action) => ({
            ...state,
            meeting: action.payload,
        }),
        setDate: (state, action) => ({
            ...state,
            date: action.payload,
        }),
        resetMeeting: (state) => ({
            ...state,
            meeting: {
                summary: '',
                description: '',
                attendees: [],
                location: '',
                from: new Date(),
                to: new Date(new Date().setHours(new Date().getHours() + 1)),
            },
        }),
    },
});

export const {
    setEvents, setBusyEvents, setMeeting, resetMeeting, setDate,
} = eventsSlice.actions;

export default eventsSlice.reducer;
