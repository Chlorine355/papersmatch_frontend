import { createEffect } from "effector";
import type { FiltersType, SearchResultType } from "../types";

export const fetchSearchResultsFx = createEffect<{ query: string; page: number, filters: FiltersType | null }, {data: SearchResultType[], total: number}>(async ({ query, page, filters }) => {
    const params = {
        query: query,
        page: String(page),
        ...filters
    }
    const result = (await fetch(`http://localhost:80/search?` + new URLSearchParams(params).toString())).json();
    return result;
});

export const fetchGraphFx = createEffect<{ id: string }, {nodes: SearchResultType[], edges: [string, string][]}>(async ({ id }) => {
    const result = (await fetch(`http://localhost:80/graph/${id}`)).json();
    return result;
});