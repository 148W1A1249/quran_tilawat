
import logo from '../../asset/img/logo.png';
const SmallDevice = (props)=>{
    return<>
        <nav className="navbar navbar-light bg-info">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
            &ensp; <b>Quaran Tilawat</b>
            </a>
            <button className="navbar-toggler" type="button" onClick={props.data}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    </>
}

export default SmallDevice;
