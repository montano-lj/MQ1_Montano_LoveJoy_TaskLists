const FilterButton = (props) => {
    return (
        <button type="button" className="btn toggle-btn m-1" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span className="bt__text fw-bold btn btn-lg">all</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );

}

export default FilterButton;