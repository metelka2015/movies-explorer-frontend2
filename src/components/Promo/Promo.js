import React from "react";
import './Promo.css';

export function Promo () {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__titles">
                    <h1 className="promo_title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img className="promo__picture" alt="рисунок планеты" src="" />
            </div>
            
            
            <a href="#know" className="promo__link">Узнать больше</a>
        </section>
    );
}