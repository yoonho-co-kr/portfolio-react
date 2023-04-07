import React from 'react'

const Items = ({ projectItems }) => {
    return (
        <>
            {projectItems.map((projectItem) => {
                const { id, img, category, title, description, os, tool, language, version, contribution, link } = projectItem;
                return (
                    <div className="portfolio__items card card-two" key={id}>
                        <div className="portfolio__img-wrapper">
                            <img src={img} alt="" className="portfolio__img" />
                        </div>

                        <span className="portfolio__category text-cs">{category}</span>
                        <h3 className="portfolio__title">{title}</h3>
                        <p className="portfolio__description">{description}</p>
                        <div className="portfolio__detail">
                            <p className="portfolio__os portfolio__detail__title">운영체제
                                <span className="portfolio__os portfolio__detail__desc">{os}</span>
                            </p>
                            <p className="portfolio__tool portfolio__detail__title">개발도구
                                <span className="portfolio__tool portfolio__detail__desc">{tool}</span>
                            </p>
                            <p className="portfolio__language portfolio__detail__title">사용언어
                                <span className="portfolio__language portfolio__detail__desc">{language}</span>
                            </p>
                            <p className="portfolio__version portfolio__detail__title">버전관리
                                <span className="portfolio__version portfolio__detail__desc">{version}</span>
                            </p>
                            <p className="portfolio__contribution portfolio__detail__title">기여도
                                <span className="portfolio__contribution portfolio__detail__desc">{contribution}</span>
                            </p>
                        </div>
                        <a href={link} className="link" target='_blank'>
                            방문하기
                            <i className="bx bx-right-arrow-alt link__icon"></i>
                        </a>
                    </div>
                )
            })}
        </>
    )
}

export default Items