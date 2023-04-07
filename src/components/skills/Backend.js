import React from 'react'
import "./skills.css"
const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">백엔드</h3>
            <div className="skills__box">
                <div className="skills_group">
                    <div className="skills__data">
                        <i className="bx bxl-java"></i>
                        <div>
                            <h3 className="skills__name">JAVA</h3>
                            <span className="skills__level">초급</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-spring-boot"></i>
                        <div>
                            <h3 className="skills__name">Spring</h3>
                            <span className="skills__level">초급</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JSP</h3>
                            <span className="skills__level">초급</span>
                        </div>
                    </div>

                </div>
                <div className="skills_group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">초급</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Mybatis</h3>
                            <span className="skills__level">초급</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Oracle</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend