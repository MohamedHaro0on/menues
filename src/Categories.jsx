const Categories = ({ CategoryHandler }) => {
    const Categories = ["all", "breakfast", "lunch", "shakes"];
    return (
        <section className = "Categories">
            <h1 className="MainHeading">Our Menues</h1>
            <ul>
                {Categories.map((element, index) => {
                    return (
                        <li key={index}><button onClick={() => CategoryHandler(element)}>{element}</button></li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Categories;