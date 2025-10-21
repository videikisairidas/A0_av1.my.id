const SectionHeader = ({ title, icon }) => (
  <h2 className="section-header">
    <span role="img" aria-label="icon" className="header-icon">{icon}</span>
    {title}
  </h2>
);
export default SectionHeader;