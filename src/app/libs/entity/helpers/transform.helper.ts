import { Drink } from "../drink.interface";

export default class Transform{

    public static transformDrink(drinks: any[]) : Drink[]{
        let bebidas = drinks.map( drink => {
    
          let ingredients: string[] = [];
          Object.keys(drink).forEach( key => {
            if(key.includes('strIngredient') && drink[key]){
              ingredients.push(drink[key])
            }
          })
          /*console.log(ingredients);*/
          return {
                  name:drink.strDrink,
                  imageUrl:drink.strDrinkThumb,
                  ingredients: ingredients
          };
        })
        console.log(bebidas);
        return bebidas;
        
      }
    
}