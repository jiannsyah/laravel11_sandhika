import { LinksPaginate, MetaPaginate } from "@/types/public"

type User={
    id:string,
    name:string,
    email:string
}

interface Data{
    id:string,
    name:string,
    description:string,
    status:string,
    image_path:string,
    due_date:string,
    created_at:string
    created_by:User
    updated_by:User
}

export interface Projects{
    data:Data[],
    meta?:MetaPaginate,
    links?:LinksPaginate
}

