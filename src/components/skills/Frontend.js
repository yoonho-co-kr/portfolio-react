import React from 'react'
import "./skills.css"

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">프론트엔드</h3>
            <div className="skills__box">
                <div className="skills_group">
                    <div className="skills__data">
                        <i className="bx bxl-html5"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-css3"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-javascript"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
                <div className="skills_group">
                    <div className="skills__data">
                        <i className="bx bxl-jquery"></i>
                        <div>
                            <h3 className="skills__name">JQuery</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-git"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-react"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Frontend