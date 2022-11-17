import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: {},
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchVideoStart: (state) => {
      state.loading = true;
    },
    fetchVideoSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchVideoFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    cleanVideoState: (state) => {
      state.currentVideo = {};
      state.loading = false;
      state.error = true;
    },
    incrementLikeCount: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
    incrementDislikeCount: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchVideoStart,
  fetchVideoSuccess,
  fetchVideoFailure,
  cleanVideoState,
  incrementLikeCount,
  incrementDislikeCount,
} = videoSlice.actions;

export default videoSlice.reducer;
