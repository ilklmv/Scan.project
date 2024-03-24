import React from "react";
import LoginForm from "./loginForm";
import Header from "../Header/header";
import "./loginPage.scss"

const LoginPage: React.FC = () => {
    const handleLoginClick = () => {
        // Обработчик клика на кнопку "Войти"
        // Реализация может быть разной, включая открытие модального окна, переход на другую страницу и т.д.
        console.log("Login button clicked");
    };

    return (
        <div className="login-page">
            {/* Условный рендеринг заголовка */}
            {process.env.REACT_APP_SHOW_HEADER === "true" && (
                <Header onLoginClick={handleLoginClick} />
            )}
            <div className="login-page-information">
                <h2 className="information_text1">Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                <img src={process.env.PUBLIC_URL + '/img/Characters.svg'} width={321.76} height={342.03} alt="Люди с ключом" />
            </div>
            <img className="lock" src={process.env.PUBLIC_URL + '/img/lock.svg'} alt="Дверной замок" />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
