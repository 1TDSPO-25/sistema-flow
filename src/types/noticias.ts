export interface Source {
    id: string | null;
    nome : string;
}

export interface Artigo {
    source : Source;
    author : string | null;
    title : string;
    description : string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}