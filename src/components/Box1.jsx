import '../style/box1.css'
import PropTypes from 'prop-types';

const Box1 = (props) =>{
    return(
        <div className={props.classname}>
            <div className="texto">
                <h2>Nome do projeto</h2><p><span>|</span> Categoria</p>
            </div>
        </div>
    )
}

Box1.propTypes = {
    classname: PropTypes.string // Add this prop validation for classname
  };

export default Box1;