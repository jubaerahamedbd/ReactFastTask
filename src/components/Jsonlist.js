import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {
        const mylist=[
            {
                city:'Dhaka',
                zip:'6000'
            },
            {
                city:'Chittagong',
                zip:'2000'
            },
            {
                city:"Cox's Bazar",
                zip:'3000'
            }
        ]
        const dataItems = mylist.map((data)=>{
            return <option>{data.city}-{data.zip}</option>
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

export default Jsonlist;