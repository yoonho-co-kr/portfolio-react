import React from 'react'

const Office = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">문서 작업</h3>
            <div className="skills__box">
                <div className="skills_group">
                    <div className="skills__data">
                        <i className="bx bxl-microsoft"></i>
                        <div>
                            <h3 className="skills__name">MS Word</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-microsoft"></i>
                        <div>
                            <h3 className="skills__name">MS Excel</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-microsoft"></i>
                        <div>
                            <h3 className="skills__name">MS Powerpoint</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
                <div className="skills_group">
                    <div className="skills__data">
                        <i className="bx bxl-adobe"></i>
                        <div>
                            <h3 className="skills__name">Adobe Acrobat</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Clo3d</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Mixamo</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Office