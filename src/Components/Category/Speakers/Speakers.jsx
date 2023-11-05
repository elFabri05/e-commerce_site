import Category from "../Category"
import '../Category.css'

function Speakers() {
    
    return (
        <div className="category-wrapper">
            <div className='category-title'>
                <h2>SPEAKERS</h2>   
            </div>
            <Category path={[5, 4]}/>
        </div>
    )
}

export default Speakers

