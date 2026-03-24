export interface User{
    _id: string,
    firstName: string,
    lastName: string,
    //username: string
    email: string,
    age?: number,
    city?: string,
    favorites: number,
    recipes?: string[],
    profilePic: string,
    created_at: string
}

export interface UserWithCredentials extends User{
    password: string
}

export interface UserForAuth{
    firstName: string,
    lastName: string,
    //username: string
    email: string,
    password: string,
    age?: number,
    city?: string
}

export interface LoginCredentials {
    email: string,
    password: string
}

export interface ProfileUpdateData {
    firstName: string,
    lastName: string,
    //username: string,
    age?: number,
    city?: string
}