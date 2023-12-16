export interface Repo {
    id: string
    name: string,
    private: boolean,
    stargazers_count: number,
    owner: {
        login: string
    }
}

export interface Favorite {
    _id: string,
    userId: string,
    repoId: string
}