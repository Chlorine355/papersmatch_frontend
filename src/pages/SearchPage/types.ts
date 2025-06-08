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