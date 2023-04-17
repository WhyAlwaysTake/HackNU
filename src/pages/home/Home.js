import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
//import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <>
        <Header />
        <div className = "orderContainer">
            <div className = "orderLeft">
                <div className = "orderLeftTop">
                    <label className = "orderLeftTopL">Здравствуйте, Имя Фамилия!</label>
                    <p className = "orderLeftTopP">Внизу представлены данные о вашем заказе документов. Пожалуйста, заполните ваш адрес доставки и проверьте достоверность введённой вами информации. Введённый вами адрес будет использован при доставке ваших документов.</p>
                    <p className = "orderLeftTopP">Так же учтите, у вас есть возможность получения доставки вашим доверенным лицом. Если вы желаете, чтобы ваш документ получило доверенное лицо, то необходимо внести ИИН доверенного лица.</p>
                </div>
                <div className = "orderLeftMain">
                    <div className = "orderLeftMainTop">
                        <label className = "orderLeftMainL">ЗАКАЗ №0000000000000</label>
                        <label className = "orderLeftMainL">ИИН 0000000000000</label>
                    </div>
                    <label className = "orderLeftMainH">Наименование услуги</label>
                    <p className = "orderLeftMainP">Выдача копий документов регистрационного дела, заверенных регистрирующим органом, включая план (схемы) объектов недвижимости </p>
                    <label className = "orderLeftMainH">Отделение</label>
                    <p className = "orderLeftMainP">Отдел №1 города по обслуживанию населения филиала некоммерческого акционерного общества «Государственная корпорация «Правительство для граждан» по Северо-Казахстанской области</p>
                    <label className = "orderLeftMainH">ФИО получателя</label>
                    <p className = "orderLeftMainP">Фамилия Имя Отечество</p>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Номер получателя</label>
                        <input className = "orderLeftMainI" placeholder="Введите номер телефона"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Область</label>
                        <select className = "orderLeftMainS">
                            <option value = "#">Выберите область</option>
                            <option value = "#">Астана</option>
                            <option value = "#">Алматы</option>
                            <option value = "#">Шымкент</option>
                            <option value = "#">Абайская область</option>
                            <option value = "#">Акмолинская область</option>
                            <option value = "#">Актюбинская область</option>
                            <option value = "#">Алматинская область</option>
                            <option value = "#">Атырауская область</option>
                            <option value = "#">Восточно-Казахстанская область</option>
                            <option value = "#">Жамбылская область</option>
                            <option value = "#">Жетысуская область</option>
                            <option value = "#">Западно-Казахстанская область</option>
                            <option value = "#">Карагандинская область</option>
                            <option value = "#">Костанайская область</option>
                            <option value = "#">Кызылординская область</option>
                            <option value = "#">Мангистауская область</option>
                            <option value = "#">Павлодарская область</option>
                            <option value = "#">Северо-Казахстанская область</option>
                            <option value = "#">Туркестанская область</option>
                            <option value = "#">Улытауская область</option>

                        </select>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Город</label>
                        <input className = "orderLeftMainI" placeholder="Введите имя города"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Улица</label>
                        <input className = "orderLeftMainI" placeholder="Введите название улицы"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Номер Дома</label>
                        <input className = "orderLeftMainI" placeholder="Введите номер дома"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Квартира</label>
                        <input className = "orderLeftMainI" placeholder="Введите номер квартиры"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Подьзд</label>
                        <input className = "orderLeftMainI" placeholder="Введите номер подьезда"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Этаж</label>
                        <input className = "orderLeftMainI" placeholder="Введите номер этажа"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">Корпус</label>
                        <input className = "orderLeftMainI" placeholder="Введите номер корпуса"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <label className = "orderLeftMainH">ЖК</label>
                        <input className = "orderLeftMainI" placeholder="Введите название ЖК"></input>
                    </div>
                    <div className = "orderLeftMainRow">
                        <input type="checkbox" className = "orderLeftMainC"/>
                        <label className = "orderLeftMainR">Я принимаю условия публичного договора-оферты (добавить графу с возможностью для клиента проставления галочки, при нажатии на публичного договора-оферты (для теста можно что угодно) переводить на данный договор)</label>
                    </div>
                    <div className = "orderLeftMainRow">
                        <input type="checkbox" className = "orderLeftMainC"/>
                        <label className = "orderLeftMainR">Я ознакомлен и согласен с условиями политики конфиденциальности и персональных данных (добавить графу с возможностью для клиента проставления галочки, при нажатии на условиями политики конфиденциальности и персональных данных (для теста можно что угодно) переводить на данные условия)</label>
                    </div>
                    <button className = "orderLeftMainButton">Подать заявку</button>
                </div>
            </div>
            <div className = "orderRight">
                <div className = "orderRightTop">
                    <label className = "orderLeftMainL">О ДОСТАВКЕ документов</label>
                </div>
                <div className = "orderRightMenu">
                    <label className = "orderRightMenuL">Какие есть варианыт курьерской доставки?</label>
                    <label className = "orderRightMenuL">Как оставить заявку на доставку?</label>
                    <label className = "orderRightMenuL">Как будет осуществлена доставка?</label>
                    <label className = "orderLeftMainL">Все инструкции</label>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Home