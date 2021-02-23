function ContentSection(props) {
  return (
    <div className="section section-what-usp">
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">{props.yellowLabel}</div>
        </div>

        <h2>
          <div className="component-title ">{props.title}</div>
        </h2>

        <div className="description">{props.description}</div>
      </div>

      <div className="component-usp-row">
        {props.subsection.map((sub) => {
          return (
            <div className="item team">
              <img className="image" src={sub.image} alt="see" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentSection;
