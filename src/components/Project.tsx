import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
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