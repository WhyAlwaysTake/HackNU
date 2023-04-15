import "./Header.css";
//import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className = "header">
            <div className = "headerContainer">
                <div className = "headerLeft">
                    <div className = "headerLeftLogo">
                        <label className = "headerLeftLogoName1">e</label>
                        <label className = "headerLeftLogoName2">Zhetkizu</label>
                        <div className="vl">
                        </div>
                    </div>
                    
                    <div className = "headerLeftName">
                        <label className = "headerLeftNameH">Доставка государственных</label>
                        <label className = "headerLeftNameH">документов на дом</label>
                    </div>
                </div>

                <div className = "headerRight">
                    <div className = "headerRightLan">
                        <label className = "headerRightLanL">ҚАЗ</label>
                        <label className = "headerRightLanL">РУС</label>
                    </div>
                    <div className = "headerRightLogin">
                        <logo className = "headerRightLoginLogo"></logo>
                        <label className = "headerRightLoginL">Вход</label>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Header
