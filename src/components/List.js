import React, { Component } from 'react';

class List extends Component {
    render() {
        const country = ['Bangladesh','India', 'UK','USA','China']
        const dataItems = country.map((mydata)=>{
            return <option>{mydata}</option>
        })
        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;