const Menu = ({menuItems}) => menuItems.map(({id , title , img , price , desc , cateory}) =>{
    return(
        <article key = {id} className = "ListItem">
            <div className = "ImageContainer">
                <img src = {img} alt = {title} />
            </div>
            <div className = "InfoContainer">
                <h2>{title} <span className = "Price">{`$${price.toFixed(0)}`}</span></h2>
                <p>{desc}</p>
            </div>
        </article>
    )
})

export default Menu;