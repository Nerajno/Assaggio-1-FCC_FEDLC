import { createSelector } from "@reduxjs/toolkit";

const selectPreviewState = state => state.preview;

export const selectPreview = createSelector(
    selectPreviewState,
    previewState => previewState.preview
)