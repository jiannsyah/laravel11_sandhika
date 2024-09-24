export interface LinksPaginate{
    first:string| null,
    last:string | null,
    next:string | null,
    prev:string | null
}

export type MetaLinksPaginate={
    active:boolean,
    label:string,
    url:string|null
}

export interface MetaPaginate{
    current_page:number,
    from:number,
    last_page:number,
    links:MetaLinksPaginate[],
    path:string,
    per_page:number,
    to:number,
    total:number,

}