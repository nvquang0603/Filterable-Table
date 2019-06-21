import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return ( 
            <thead className="thead-dark|thead-light">
                <tr className="text-center">
                    <th width={50}>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                </tr>
            </thead>
        )
    }
}
export default TableHead;