function Skills() {
  const skill = ['JSX', 'TS', 'JS', 'CSS', 'HTML', 'REACT'];
  return (
    <div>
      <h1>Skills</h1>
      <span className="skill">{skill[0]}</span>
      <span className="skill">{skill[1]}</span>
      <span className="skill">{skill[2]}</span>
      <span className="skill">{skill[3]}</span>
      <span className="skill">{skill[4]}</span>
      <span className="skill">{skill[5]}</span>
    </div>
  );
}

export default Skills;
