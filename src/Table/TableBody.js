import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        return (
          <tbody>
            {
              this.props.hooman.map(item => {
              return (
                <tr key={item.id}>
                  <th className="text-center">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender === 1 ? 'Nam' : item.gender === 0 ? 'Nữ' : 'Khác'}</td>
                </tr>)
              })
            } 
          </tbody>
        )
    }
}
export default TableBody;