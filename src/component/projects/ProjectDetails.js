import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {id} </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ab vel repudiandae similique quos dolorum veritatis nesciunt molestiae. Veniam sit maiores maxime nulla? Earum, praesentium quos! Explicabo eligendi suscipit sint? </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <p>Posted by The Net Ninja</p>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
