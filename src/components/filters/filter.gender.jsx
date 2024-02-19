import PropTypes from "prop-types";

export default function FilterGender({
  filterGender,
  handleChangeFilterGender,
}) {
  const handleChange = (event) => {
    handleChangeFilterGender(event.currentTarget.value);
  };

  return (
    <div className="filters">
      <label>Género</label>
      <div>
        <input
          type="radio"
          name="gender"
          id="gender-f"
          value="female"
          checked={filterGender === "female"}
          onChange={handleChange}
        />
        <label htmlFor="gender-f"> Female</label>
        <input
          type="radio"
          name="gender"
          id="gender-m"
          value="male"
          checked={filterGender === "male"}
          onChange={handleChange}
        />
        <label htmlFor="gender-m"> Male</label>
      </div>
    </div>
  );
}
