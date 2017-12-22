import { createAction } from "redux-actions";

export const sayHelloAction = createAction<void>("SayHelloAction", undefined);
//export const getSubredditPostsStartAction =    createAction<GetSubredditPostsStartActionPayload, string>("GetSubredditPostsStartAction", (subreddit) => ({subreddit}));
// an example utilizing payloadCreator