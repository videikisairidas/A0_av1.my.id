import React from 'react';
import SectionHeader from './background/SectionHeader';
import SkillCard from './background/SkillCard';
import TimelineItem from './background/TimelineItem';

import backgroundData from '../data/background.json';


const { workExperience, education, skills, extraLearning, otherSkills } = backgroundData;


const BackgroundPage = () => {

  return (
    <>
    <div className="containerProjectsHeader">
        <div>
          <h1>My Professional Background</h1>
          <p>A journey through my work, education, and continuous learning.</p>
        </div>
      </div>
    <div className="background-page">
      
      
      {/* 1. Work Experience */}
      <section className="section timeline-section">
        <SectionHeader title="Work Experience" icon="💼" />
        <div className="timeline">
          {workExperience.map(item => (
              <TimelineItem 
                  key={item.id}
                  title={item.title}
                  subtitle={item.company}
                  duration={item.duration}
                  description={item.description}
              />
          ))}
        </div>
      </section>

      {/* 2. Education & Bootcamps */}
      <section className="section timeline-section">
        <SectionHeader title="Education & Bootcamps" icon="🎓" />
        <div className="timeline">
          {education.map(item => (
              <TimelineItem 
                  key={item.id}
                  title={item.title}
                  subtitle={item.company}
                  duration={item.duration}
                  description={item.description}
              />
          ))}
        </div>
      </section>

        {/* 4. Extra Learning (YouTube & Courses) */}
      <section className="section learning-section">
        <SectionHeader title="Extra Learning & Resources" icon="📚" />
        <div className="learning-grid">
         {extraLearning.map(item => (
              <div key={item.id} className="learning-card">
                  <h4>{item.title}</h4>
                  <p className="source-tag">{item.source}</p>
                  <p>{item.description}</p>
              </div>
          ))}
        </div>
      </section>

      {/* 3. Skills */}
      <section className="section">
        <SectionHeader title="Technical Skills" icon="💻" />
        <div className="skills-cloud">
          {skills.map(skill => <SkillCard key={skill} skill={skill} />)}
        </div>
      </section>

      
      
      {/* 5. Other Skills (Driving, Languages, etc.) */}
      <section className="section other-skills-section">
        <SectionHeader title="Other Abilities" icon="✨" />
        <div className="other-skills-grid">
          <div className="other-skill-box">
              <h4>{otherSkills.driving.title}</h4>
              <p>{otherSkills.driving.description}</p>
          </div>
          <div className="other-skill-box">
              <h4>{otherSkills.languages.title}</h4>
              <p>{otherSkills.languages.description}</p>
          </div>
        </div>
      </section>
      
    </div>
    </>
  );
};

export default BackgroundPage;