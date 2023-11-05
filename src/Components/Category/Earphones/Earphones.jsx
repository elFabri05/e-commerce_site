import Category from "../Category"
import '../Category.css'

function Earphones() {
    
    return (
        <div className="category-wrapper">
            <div className='category-title'>
                <h2>EARPHONES</h2>   
            </div>
            <Category path={[0]}/>
        </div>
    )
}

export default Earphones