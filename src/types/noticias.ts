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
export interface Source {
    name: string;
    url: string;
}

export interface Artigo {
    source: Source;
    title: string;
    description: string;
    url: string;
    image: string | null;
    publishedAt: string;
    content: string | null;
}