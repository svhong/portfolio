import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class LandingContent extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{
                    delay: 100,
                    duration: 500
                }}>
                {props => (
                    <div style={props} className="page-content">
                        <h1>Bakin' Bacon with Macon</h1>
                        <p>
                            Bacon ipsum dolor amet ad shankle non, et meatloaf picanha sirloin sed cupidatat ball tip hamburger. Bacon boudin dolore, deserunt jowl ribeye veniam eu ut pork belly fatback commodo swine ground round. Chuck leberkas excepteur est turkey, esse quis. Qui ground round jerky short ribs venison bresaola, doner sed chicken veniam ea laborum.Shoulder turducken dolore deserunt beef bresaola, ea venison et flank dolore alcatra. Brisket esse in t-bone, sed swine ut. Consequat ut sausage buffalo, in laborum corned beef salami in dolor hamburger magna short ribs chicken. Sunt pariatur qui salami fugiat. Cillum aute t-bone eiusmod spare ribs sint doner, in dolore ipsum et leberkas. Fatback short loin velit, mollit doner culpa lorem nisi picanha in anim ribeye officia consequat bacon.Voluptate drumstick enim turducken porchetta. Swine landjaeger qui exercitation in salami corned beef aute do shoulder. Ribeye in anim reprehenderit mollit, dolore pork tenderloin lorem t-bone brisket pork chop pork loin. Non tail quis jerky ea picanha.
                </p>
                    </div>
                )}

            </Spring>
        )
    }
}