import { createSelector } from "@reduxjs/toolkit";

const selectTextState = state => state.text;

export const selectText = createSelector(
    selectTextState,
    textState => textState.text
)