export interface Recipe{
    _id: string,
    recipeName: string,
    cookingTime?: string,
    //ingredients: string,
    //preparationDetails: string,
    category: string, // "" | "", enum?
    image : string,
    favorites?: number,
    created_at?: string,
    //userId: {
    //   userName: string
    //}
}