import React from "react";
import './my-courses.styles.scss';
import logo from '../../../../assets/react-native.png'

const MyCourses = () => {
    return (
        <div className="my-courses">
            <div className="my-courses-header">My courses</div>
            <div className="my-courses-list">
                <div className="my-courses-item">
                    <div className="my-courses-name">React Native for Beginners</div>
                    <div className="my-courses-image"><img src={logo} alt="" /></div>
                    <div className="my-courses-desc">The modern React course for beginners! React, Redux, own big project</div>
                    <div className="my-courses-teacher">by Will Smith, Brad Pitt, Margot Robbie</div>
                    <div className="my-courses-rate">Rate is here</div>
                </div>
                <div className="my-courses-item">
                    <div className="my-courses-name">React Native for Beginners</div>
                    <div className="my-courses-image"><img src={logo} alt="" /></div>
                    <div className="my-courses-desc">The modern React course for beginners! React, Redux, own big project</div>
                    <div className="my-courses-teacher">by Will Smith, Brad Pitt, Margot Robbie</div>
                    <div className="my-courses-rate">Rate is here</div>
                </div>
                <div className="my-courses-item">
                    <div className="my-courses-name">React Native for Beginners</div>
                    <div className="my-courses-image"><img src={logo} alt="" /></div>
                    <div className="my-courses-desc">The modern React course for beginners! React, Redux, own big project</div>
                    <div className="my-courses-teacher">by Will Smith, Brad Pitt, Margot Robbie</div>
                    <div className="my-courses-rate">Rate is here</div>
                </div>
            </div>
        </div>
    )
}
export default MyCourses;