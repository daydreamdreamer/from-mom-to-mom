export interface User{
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    age?: number,
    cityId?: number,
    recipes?: string[],
    profilePic?: string,
    created_at: string
}

export interface UserWithCredentials extends User{
    password: string
}

export interface UserForAuth{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    age?: number,
    cityId?: number
}

export interface LoginCredentials {
    email: string,
    password: string
}

export interface UserProfileUpdate {
    firstName: string,
    lastName: string,
    age?: number,
    cityId?: number
}

export interface TopUser {
  _id: string;
  firstName: string;
  lastName: string;
  profilePic?: string;
  cityId?: number;
  totalFavorites: number;
}