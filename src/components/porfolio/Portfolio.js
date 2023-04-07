import React, { useState } from 'react'
import "./portfolio.css"
import List from "./List"
import Items from "./Items"
import { projects } from "./Projects"

const allNavList = ['All', ...new Set(projects.map((projects) => projects.category))];
// console.log(allNavList)

const Portfolio = () => {
    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) => {
        if (category === 'All') {
            setMenuItems(projects)
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems);
    }
    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Portfolio</span>
            <List list={navList} filterItems={filterItems}></List>
            <div className="portfolio__container container grid">
                <Items projectItems={projectItems}></Items>
            </div>

        </section>
    )
}

export default Portfolio