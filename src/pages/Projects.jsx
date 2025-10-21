
import shuffleArray from '../utils/shuffle.js';
import React, { useState, useEffect } from 'react';

import Card from '../pages/projects/card.jsx';

import projectData from '../data/projects.json';
import gameProjectData from '../data/game_projects.json';


const Projects = () => {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const [gameShuffledItems, setGameShuffledItems] = useState([]);
  const [gameVisibleCount, setGameVisibleCount] = useState(6);

  const [statusFilter, setStatusFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [statusGameFilter, setStatusGameFilter] = useState("All");
  const [yearGameFilter, setYearGameFilter] = useState("All");

  const filteredProjects = shuffledItems.filter(item => {
    const statusMatch = statusFilter === "All" || item.status === statusFilter;
    const yearMatch = yearFilter === "All" || item.year === yearFilter;
    return statusMatch && yearMatch;
  });

  const filteredGames = gameShuffledItems.filter(item => {
    const statusGameMatch = statusGameFilter === "All" || item.status === statusGameFilter;
    const yearGameMatch = yearGameFilter === "All" || item.year === yearGameFilter;
    return statusGameMatch && yearGameMatch;
  });
  
  useEffect(() => {
    setShuffledItems(shuffleArray(projectData));

    // update game projects, pin 1project to top
    const [firstGame, ...restGames] = gameProjectData;
    const shuffledRest = shuffleArray(restGames);
    setGameShuffledItems([firstGame, ...shuffledRest]);
  }, []);

  // 2. FIX: Reset visibleCount when filters change
  useEffect(() => {
    setVisibleCount(6); 
  }, [statusFilter, yearFilter]);

  useEffect(() => {
    setGameVisibleCount(6); 
  }, [statusGameFilter, yearGameFilter]);

  const handleLoadMore_projects = () => {
    setVisibleCount(prev => prev + 3); // Load 3 more items per click
  };
  const handleLoadAll_projects = () => {
    setVisibleCount(filteredProjects.length);
  };

  const handleLoadMore_games = () => {
    setGameVisibleCount(prev => prev + 3); // Load 3 more items per click
  };
  const loadAll_games = () => {
    setGameVisibleCount(filteredGames.length); // Load 3 more items per click
  };


  const showLoadMoreButton = visibleCount < filteredProjects.length;
  const showGameLoadMoreButton = gameVisibleCount < filteredGames.length;

  return (
    <>
      <div className="containerProjectsHeader">
        <div>
          <h1>My Projects Portfolio</h1>
          <p>A showcase of my completed and ongoing development projects with detailed server status</p>
        </div>
      </div>
      <div id="ProjectPage" className='ProjectPage'>
        <h2>Projects</h2> 

        <div className="filter-controls  ">
          <select name="status" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="All">Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>

          <select name="year" value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
            <option value="All">Years</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            {/* Add more years as needed */}
          </select>
        </div>

        <div>
          
           {filteredProjects.length === 0 ? (
              <p className='no-projects-message'>No projects found matching the selected filters.</p>
            ) : (
              <div className="projects-container">
                {filteredProjects.slice(0, visibleCount).map(item => (
                  <Card key={item.id} data={item} />
                ))}
              </div>
            )}
          
        </div>
        <div className="load-more-container">
          {showLoadMoreButton && (
            <button className='modern-button' onClick={handleLoadMore_projects}>Load More</button>
          )}
          {showLoadMoreButton && (
            <button className='modern-button modern-button2' onClick={handleLoadAll_projects}>Load All</button>
          )}
        </div>
        {/* GAME SECTION */}
        <h2>Games</h2>

        <div className="filter-controls  ">
          <select name="status" value={statusGameFilter} onChange={e => setStatusGameFilter(e.target.value)}>
            <option value="All">Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>

          <select name="year" value={yearGameFilter} onChange={e => setYearGameFilter(e.target.value)}>
            <option value="All">Years</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            {/* Add more years as needed */}
          </select>
        </div>

        <div>
          <div className="games-container">
            {filteredGames.slice(0, gameVisibleCount).map(item => (
              <Card key={item.id} data={item} />
            ))}  
          </div>
        </div>

        <div className="load-more-container">
          {showGameLoadMoreButton && (
            <button className='modern-button' style={{ marginBottom: "40px" }} onClick={handleLoadMore_games}>Load More</button>
          )}
          {showGameLoadMoreButton && (
            <button className='modern-button modern-button2' onClick={loadAll_games}>Load All</button>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects;
