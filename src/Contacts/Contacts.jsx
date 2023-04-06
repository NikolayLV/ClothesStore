import Style from "./Contacts.scss";
import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import * as PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom/client";
import GoogleMapReact from 'google-map-react';
import {NavLink} from "react-router-dom";

function Contacts () {
    const {t} = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'en');

    const handleLenguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === "ru") {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    }

    return (
        <section className="contacts">
            <h1 className="contact__h1">
                {t('contactH1')}
            </h1>

            <div className="contact__info">
                <div className="contact__phone">
                    <p className="phone__p">{t('cphone')}</p>
                    <p className="phone__p2">+380681639668</p>

                </div>
                <div className="contact__mail">
                    <p className="mail__p">{t('cmail')}</p>
                    <p className="mail__p2">Nikolayd2002@gmail.com</p>

                </div>
                <div className="contact__address">
                    <p className="address__p">{t('caddress')}</p>
                    <p className="address__p2">{t('caddress_name')}</p>

                </div>
            </div>

            <h3 className="contact__h3">{t('ch3')}</h3>

            <div className="container">
                <div className="card">
                    <div className="inputBox1">
                        <input type="text" required="required"/>
                        <span className="user">{t('formUser')}</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span>{t('formEmail')}</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required"/>
                        <span>{t('formTopic')}</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span>{t('formText')}</span>
                    </div>
                    <button className="enter" type="submit">{t('formSubmit')}</button>
                </div>
                <SimpleMap />
            </div>


        </section>
    )
}


const AnyReactComponent = ({ text }) => <div>{text}</div>;


GoogleMapReact.propTypes = {
    defaultZoom: PropTypes.number,
    bootstrapURLKeys: PropTypes.shape({key: PropTypes.string}),
    defaultCenter: PropTypes.shape({lng: PropTypes.number, lat: PropTypes.number}),
    children: PropTypes.node
};
function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{height: '400px', width: '600px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyAKdu2dis2hcJfYyi80sPsyRJUop8lNlP8"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

export default Contacts;



