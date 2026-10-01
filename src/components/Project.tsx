import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/AffanQamer/nook_market.git" target="_blank" rel="noreferrer"><h2>Nook Market</h2></a>
                <p>Responsive e-commerce web app with dynamic products, search/filtering, product details, cart management, and simulated checkout. Built with React, React Router, REST API, and LocalStorage, featuring a modern mobile-friendly UI with light/dark mode.
</p>

                            </div>

            

            
            <div className="project">
                <a href="https://github.com/AffanQamer/FIREFIGHTER-RESCUE-ROUTE-PLANNER.git" target="_blank" rel="noreferrer"><h2>Firefighter Rescue Route Planner</h2></a>
                <p>It is an interactive A* AI simulation where a firefighter finds and follows the safest/lowest-cost route to
rescue a victim while dealing with fire, obstacles, and limited oxygen.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;