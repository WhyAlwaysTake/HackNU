import "./footer.css"

const Footer = () => {
    return(
        <div className = "footer">
            <div className = "footerContainer">
                <div className = "footerLeft">
                    <div className = "footerLeftLogo">
                        <label className = "footerLeftLogoName1">e</label>
                        <label className = "footerLeftLogoName2">Zhetkizu</label>
                        <div className="vl">
                        </div>
                    </div>
                    
                    <div className = "footerLeftName">
                        <label className = "footerLeftNameH">Доставка государственных</label>
                        <label className = "footerLeftNameH">документов на дом</label>
                    </div>
                </div>
                
                <div className = "footerRight">
                    <div className = "footerRightMain">
                        <label className = "footerRightL">Служба поддержки:  +7 700 000 00 00</label>
                        <label className = "footerRightH">info@ekyzmet.kz</label>
                        <label className = "footerRightL">2022 (C) Все права защишены</label>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Footer;