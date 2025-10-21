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