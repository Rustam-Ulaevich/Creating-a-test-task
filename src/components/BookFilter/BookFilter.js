import './BookFilter.scss'

export function BookFilter({filterBooks}) {

    const onSelectChange = (event) => {
        filterBooks(event.target.value)
    }

    return <div className='book__filter'>
        <select onChange={onSelectChange}>
            <option value=''>Select books</option>
            <option value='animals'>Animals</option>
            <option value='tourizm'>Tourizm</option>
            <option value='parfum'>Parfum</option>
            <option value='music'>Music</option>
            <option value='food'>Food</option>
        </select>

    </div>;
}
