import React from 'react'
import "./View.css"

export const View = (props) => {
    return (
        <div className={`App-header ${props.cssPointer}`}>
            <div className='wrapper'>
                <h1>{props.name}</h1>
                {props.subtext && <div className="Header-info">
                    <div className="container flicker2bitch">
                        <div className="subcontainer">
                            <p >Freelance Graphic & motion designer</p>
                            <p style={{ fontSize: '11px' }}>Video post-production, 2D motion graphics, VFX and live visuals</p>
                        </div>
                        <div className="subcontainer">
                            <span>;</span>
                            <span>;</span>
                        </div>
                    </div>
                    <div className="container flicker2bitch">
                        <div className="subcontainer">
                            <span>;</span>
                            <span>;</span>
                        </div>
                        <div className="subcontainer">
                            <p><a href="https://www.linkedin.com/in/nicolas-corbett/">LinkedIn.</a></p>
                            <p><a href="https://www.instagram.com/studio.cordure/">Instagram.</a></p>
                        </div>
                    </div>
                </div>}

            </div>
        </div>
    )
}

