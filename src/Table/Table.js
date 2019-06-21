import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
class Table extends Component {
    render() {
        return (
          <div className="table-responsive mt-5 container bg-white p-5 mb-5">
            <h2 className="text-center">Danh sách người tối cổ</h2> 
            <table className="table table-striped table-bordered mt-5">
              <TableHead />
              <TableBody hooman={this.props.hooman}/>
            </table>
          </div>
        )
    }
}
export default Table;