import "./skillsList.scss";

export default function SkillsList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "SkillsList active" : "skillsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}