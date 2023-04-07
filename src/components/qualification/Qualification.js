import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>학력
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>이력
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Scool</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">KH정보교육원</h3>
                                <span className="qualification__subtitle">반응형 UI/UX 웹콘텐츠 <br></br>개발자 양성과정 (수료)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">동서울대학교</h3>
                                <span className="qualification__subtitle">패션디자인 (졸업)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2010 - 2015
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">한영고등학교</h3>
                                <span className="qualification__subtitle">인문계 (졸업)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2007 - 2010
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">사이즈코리아</h3>
                                <span className="qualification__subtitle">연구팀-팀장 (퇴사)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">(주)폰테마노</h3>
                                <span className="qualification__subtitle">생산팀-대리 (퇴사)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2019
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">사이즈코리아</h3>
                                <span className="qualification__subtitle">연구팀-사원 (퇴사)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2014 - 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">신성통상(주)</h3>
                                <span className="qualification__subtitle">총무팀-사원 (퇴사)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2013 - 2014
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification