const Category = ({ name, link }) => {
    return (
        <div className="main-card">
            <div className="background-image" style={{
                backgroundImage: `url(${link})`, color: "turquoise"
            }} />
            <div className="inner-card">
                <h2 className="category">{name}</h2>
                <p className="shop-now">Shop Now</p>
            </div>
        </div>
    )
}

export default Category