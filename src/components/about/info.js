import React from 'react'

const info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">경력</h3>
                <span className="about__subtitle">신입 개발자
                </span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">프로젝트</h3>
                <span className="about__subtitle">4+ Projects</span>
            </div>
            <div className="about__box">
                <i className="bx bx-chat about__icon"></i>
                <h3 className="about__title">어학</h3>
                <span className="about__subtitle">한국어, English</span>
            </div>
        </div>
    )
}

export default info