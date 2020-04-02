export class Opinions {
    public static readonly likedIt: Opinion = { id: 1, name: "Liked It" };
    public static readonly madeSick: Opinion = { id: 1, name: "Made Sick" };
    public static readonly hatedIt: Opinion = { id: 1, name: "Hated It" };
}

export interface Opinion {
    id: number;
    name: string;
}
