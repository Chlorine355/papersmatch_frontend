import { createEffect } from "effector";
import type { SearchResultType } from "../types";

export const fetchSearchResultsFx = createEffect<{ query: string; page: number }, {data: SearchResultType[], total: number}>(async ({ query, page }) => {
    const result = (await fetch(`http://localhost:80/search?query=${query}&page=${page}`)).json();
    return result;
});