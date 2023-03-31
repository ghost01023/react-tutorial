import Category from "../categories/category";
import categoryFile from "../categories/cate.json";

const CategoryContainer = () => {
    return (
        <div className="card-container">
            {categoryFile.map(item => {
                const {id, title, imageUrl} = item;
                return (
                    <Category key={id} name={title} link={imageUrl} />
                )
            })
            }
        </div>
    )
}

export default CategoryContainer