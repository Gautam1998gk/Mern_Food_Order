import { json, useLoaderData } from "react-router-dom"
import BodyHome from "../components/Body"
import Carousel from "../components/Carousel"
import { useState } from "react"

const FoodsFetch = () => {
    const foods_category = useLoaderData()
    const foods = foods_category[0]
    const categories = foods_category[1]
    const [searchc, setSearchc] = useState("")
    const handleSearch = (srh) => {
        setSearchc(srh)
    }
    return (
        <div>
            <Carousel handleSearch={handleSearch}/>
            {categories.map(category => {
                return <div key={category._id} className="row mb-3">
                    <div className="m-3 fs-3">{category.CategoryName}</div>
                    <hr />
                    {foods.filter(food => (food.CategoryName === category.CategoryName) && (food.name.toLowerCase().includes(searchc.toLowerCase())))
                        .map(food =>
                            <div key={food._id} className="col-12 col-md-6 col-lg-3 m-3">
                                <BodyHome food={food} />
                            </div>
                        )}

                </div>
            })}

        </div>
    )
}

export default FoodsFetch






export async function loader() {
    
    const response = await fetch("http://localhost:5000/foods/items")
    if (!response.ok) {
        return json({ message: "could not fetch food items" })
    }

    return response
}