import style from '../../styles/Home.module.scss'

export default function Form({ handleChange, value }) {
  return (
    <div className={style.form_container}>
      <input
        type="text"
        defaultValue={value}
        onChange={handleChange}
        placeholder="Rechercher un pokemon..."
      />
    </div>
  );
}
