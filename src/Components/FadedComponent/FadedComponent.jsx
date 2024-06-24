import './FadedComponent.css'
import PropTypes from 'prop-types'

function FadedComponent({height}){
    
    const style = height ? { position: 'fixed', top: '70px' } : {}
    
    return (
      <div className="faded-wrapper" style={style}>
      </div>
    )
  }

export default FadedComponent

FadedComponent.propTypes = {
    height: PropTypes.bool.isRequired,
}