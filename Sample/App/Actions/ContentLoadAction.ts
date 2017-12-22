import { createAction } from "redux-actions";

export interface ContentLoadActionPayload  {
    title: string;
    summary1: string;
}

export const contentLoadAction =
    createAction<ContentLoadActionPayload, string, string>("ContentLoadAction", (title, summary1) => ({title, summary1}));