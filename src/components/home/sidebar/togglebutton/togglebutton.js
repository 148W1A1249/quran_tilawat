import './toggleButton.css';
const ToggleButton = ({ToggleValue,ToggleClick})=>{
    
    return<>
    <div onClick={ToggleClick} className={`ToggleButton${ToggleValue ? " ReadMode":""}`}>
        <div className="ToggleCircle">
             <i className={`ToggleIcon${ToggleValue ? ' fa fa-book' : ' fa fa-headphones'}`} ></i>
        </div>
    </div>
    </>
}


export default ToggleButton;