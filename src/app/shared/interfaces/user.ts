export interface User{
    _id: string,
    username: string,
    //email: string,
    //tel?: string,
    city?: string,
    favorites: number,
    profilePic: string
}

export interface UserWithCredentials extends User{
    password: string
}