export interface Recipe{
    _id: string,
    recipeName: string,
    coockingTime: number,
    ingredients: string,
    preparationDetails: string,
    type: string, // "" | "", enum?
    //photo
    favoriteCount: number,
    created_at: string,
    userId: {
        userName: string
    }
}