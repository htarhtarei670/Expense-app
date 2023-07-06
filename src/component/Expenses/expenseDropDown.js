import "./ExpenseDropDown.css"
const ExpenseDropDown = (props) => {
    const filerHandler=(e)=>{
        const selectYear=e.target.value;
        props.onFliterYear(selectYear);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={filerHandler} value={props.selected}>
                    <option value="all">Choose year...</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );

}
export default ExpenseDropDown;