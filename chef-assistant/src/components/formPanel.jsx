import { useState } from 'react'


export default function FormPanel(){
    const [ingredients, setIngredients]= useState("");
    const [dishGoal, setDishGoal] = useState("");
    const [servings, setServings] = useState(2);
    const [maxTime, setMaxTime] = useState("");
    const [applicance, setAppliance] = useState("Any");
    const [diet, setDiet] = useState([]);
    const [allergies, setAllergies] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //console log to check
        console.log({
            ingredients,
            dishGoal,
            servings,
            maxTime,
            appliance,
            diet,
            allergies
        });
    };

    return (
        <section id="form-section" className="form-section">
            <form onSubmit={handleSubmit} id="form" className="form">
                <div className="ingredients">
                    <label htmlFor="ingredients">Ingredients on hand: </label>
                    <textarea 
                    name="ingredients" 
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    rows={4}>

                    </textarea>
                </div>
                <div className="dish-goal">
                    <label htmlFor="dish-gaol">What are you making? </label>
                    <textarea 
                    name="dish-goal" 
                    id="dish-goal"
                    value={dishGoal}
                    type='text'
                    rows={4}
                    onChange={(e) => setDishGoal(e.target.value)}>

                    </textarea>
                </div>
                <div className="servings">
                    <label htmlFor="servings">Servings: </label>
                    <input 
                    type="number" 
                    name="servings" 
                    id="servings" 
                    min={1}
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}/>
                </div>



                <button className="btnSubmit" type='submit'>
                    Generate Recipe
                </button>
            </form>
        </section>
    )
}