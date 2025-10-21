const TimelineItem = ({ title, subtitle, duration, description }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
    </div>
  </div>
);
export default TimelineItem;