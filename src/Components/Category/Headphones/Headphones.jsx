import Category from "../Category"
import '../Category.css'

function Headphones() {
    
    return (
        <div className="category-wrapper">
            <div className='category-title'>
                <h2>HEADPHONES</h2>   
            </div>
            <Category path={[3, 2, 1]}/>
        </div>
    )
}

export default Headphones