export type SearchResultType = {
    title: string;
    abstract?: string;
    citationCount: number;
    isOpenAccess: boolean;
    openAccessPdf?: {url: string};
    authors: {authorId: string; name:string}[];
    paperId: string;
    fieldsOfStudy?: string[];
    tldr?: {
        model: string;
        text: string
    } | null;
    year: number;
}

export type FiltersType = {
    yearFrom?: string;
    yearTo?: string;
    minCitations?: string;
    isOpenAccess?: string;
}