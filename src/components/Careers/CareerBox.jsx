import React, { useState, useRef, useEffect } from 'react';
import CareerBadges from './CareerBadges';
import './Button.css'

const CareerBox = (props) => {
  const { title, requiredSkills, recommendedSkills } = props;
  const [expanded, setExpanded] = useState(false);
  const requiredSkillsRef = useRef(null);
  const recommendedSkillsRef = useRef(null);
  const [requiredSkillsHeight, setRequiredSkillsHeight] = useState(0);
  const [recommendedSkillsHeight, setRecommendedSkillsHeight] = useState(0);

  useEffect(() => {
    if (requiredSkillsRef.current && recommendedSkillsRef.current) {
      setRequiredSkillsHeight(requiredSkillsRef.current.clientHeight);
      setRecommendedSkillsHeight(recommendedSkillsRef.current.clientHeight);
    }
  }, [requiredSkillsRef, recommendedSkillsRef]);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const listHeight = expanded ? requiredSkillsHeight + recommendedSkillsHeight : requiredSkillsHeight;

  return (
    <div>
      <div className="relative h-auto p-5 border-t-2 border-white">
        <h2 className="text-white text-left text-lg">{title}</h2>

        <div className='py-5 w-9/12'>
          <ul
            className={`text-white list-disc px-5 overflow-hidden duration-500`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: `${listHeight}px` }}
          >
            <div ref={requiredSkillsRef}>
              {requiredSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </div>
            <div ref={recommendedSkillsRef}>
              {recommendedSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </div>
          </ul>
        </div>

        <div className='mt-6'>
          <CareerBadges />
        </div>
      </div>
    </div>
  );
};

export default CareerBox;
