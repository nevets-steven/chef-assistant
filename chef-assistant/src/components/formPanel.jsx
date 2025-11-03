import { useState } from 'react'


export default function FormPanel(){
    const [ingredients, setIngredients]= useState("");
    const [dishGoal, setDishGoal] = useState("");
    const [servings, setServings] = useState(2);
    const [maxTime, setMaxTime] = useState("15");
    const [applicance, setAppliance] = useState("Any");
    const [diet, setDiet] = useState([]);
    const [allergies, setAllergies] = useState("");

const handleDietToggle = (value) => {
    setDiet((prev) =>
      prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
    );
  };
    
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
                    <label htmlFor="dish-goal">What are you making? </label>
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
                <div className="maxTime">
                    <div className="input-wrapper">
                        <label htmlFor="maxTime">Max time (minutes): </label>
                        <input 
                        type="number"
                        id='maxTime'
                        name='maxTime'
                        min={0}
                        value={maxTime}
                        onChange={(e) => setMaxTime(e.target.value)}
                        className='input-with-suffix' />
                        <span className="input-suffix">minutes</span>
                    </div>
                </div>
                <div className="appliance">
                    <label htmlFor="appliance">Appliance</label>
                    <select 
                    name="appliance" 
                    id="appliance"
                    value={applicance}
                    onChange={(e) => setAppliance(e.target.vakue)}>
                        <option value="Any">Any</option>
                        <option value="Stovetop_Electric">Stovetop (Electric)</option>
                        <option value="Stovetop_Gas">Stovetop (Gas)</option>
                        <option value="Air Fryer">Air Fryer</option>
                        <option value="Grill">Grill</option>
                    </select>
                </div>

                {/* field set for diet */}
                <fieldset className="diet">
                    <legend className="diet-legend">Diet</legend>
                    <div className="vegetarian">
                        <input 
                        type="checkbox"
                        id='diet-vegetarian'
                        name='diet-vegetarian'
                        value="Vegetarian"
                        checked={diet.includes("Vegetarian")}
                        onChange={() => handleDietToggle("Vegetarian")} />
                        <label htmlFor="diet-vegetarian">Vegetarian</label>
                    </div>
                    <div className="vegan">
                        <input 
                        type="checkbox"
                        id='diet-vegan'
                        name='diet-vegan'
                        checked={diet.includes("Vegan")}
                        onChange={() => handleDietToggle("Vegan")} />
                        <label htmlFor="diet-vegan">Vegan</label>
                    </div>
                    <div className="gluten-free">
                        <input 
                        type="checkbox"
                        id='diet-gluten-free'
                        name='diet-gluten-free'
                        checked={diet.includes("Gluten-free")}
                        onChange={() => handleDietToggle("Gluten-free")} />
                        <label htmlFor="diet-gluten-free">Gluten-Free</label>
                    </div>
                    <div className="dairy-free">
                        <input 
                        type="checkbox"
                        name='diet-dairy-free'
                        id='diet-dairy-free'
                        checked={diet.includes('Dairy-free')}
                        onChange={() => handleDietToggle("Dairy-free")} />
                        <label htmlFor="diet-dairy-free">Dairy-free</label>
                    </div>
                </fieldset>
                <div className="allergies">
                    <label htmlFor="allergies">Allergies (comma separated)</label>
                    <input 
                    type="text"
                    id='allergies'
                    name='allergies'
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)} 
                    placeholder='e.g., peanuts, shellfish'/>
                </div>



                <button className="btnSubmit" type='submit'>
                    Generate Recipe
                </button>
            </form>
        </section>
    )
}