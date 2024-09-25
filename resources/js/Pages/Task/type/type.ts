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
    image_path:string,
    due_date:string,
    status:string,
    priority:string,
    project:string,
    created_at:string,
    assignedUser:User,
    created_by:User
    updated_by:User
}

export interface Tasks{
    data:Data[],
    meta?:MetaPaginate,
    links?:LinksPaginate
}

