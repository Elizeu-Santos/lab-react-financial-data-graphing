import { useState } from "react";

function FilterDate(props) {
    const [ formDate, setFormDate] = useState({
        initialDate: "",
        finalDate: "",
        currency: "",
    });

    function handleChange(e) {
        let value = e.target.value;
        setFormDate({...formDate, [e.target.name]: value});
        console.log(formDate)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="d-flex w-75 m-3 mt-3">
        <input
        name="initialDate"
        className="form-control me-3"
        type="date"
        onChange={handleChange}
        />
        <input
        name="finalDate"
        className="form-control"
        type='date'
        onChange={handleChange}
        />



        </div>
        </form>
    )


}

export default FilterDate