import React, { Component } from 'react';

class Search extends Component {
      constructor(props) {
        super(props)
        this.state = {
          userName: '', 
          userAge: '', 
          userGender: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
      }
      handleChange(event){
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
          [name]:value
        })
      }
      handleSubmit = (event) => {
        this.props.filterUser(this.state);
      }
      handleReset = (event) => {
        this.setState({
          userName: '',
          userAge: '',
          userGender: 1
        })
        this.props.resetTable()
      }
    render() {
        return (
            <div className="container bg-white p-5">
              <h2 className="text-center">Tìm theo</h2>
              <div className="row">
                <div className="col-3 p-0">
                  <div className="form-group form-inline">
                    <label htmlFor="ten" className="pr-2">Tên</label>
                    <input 
                        className="form-control" 
                        name="userName" 
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-3 p-0">
                  <div className="form-group form-inline">
                    <label htmlFor="tuoi" className="pr-2">Tuổi</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="userAge" 
                        value={this.state.userAge}
                        onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        checked={parseInt(this.state.userGender) === 1} 
                        value="1" 
                        name="userGender" 
                        onChange={this.handleChange}
                    /> Nam
                    </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        checked={parseInt(this.state.userGender) === 0} 
                        value="0"
                        name="userGender" 
                        onChange={this.handleChange}
                    /> Nữ
                    </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        checked={parseInt(this.state.userGender) === 2} 
                        value="2" 
                        name="userGender" 
                        onChange={this.handleChange}
                    /> Khác
                    </label>
                </div>
              </div>
              <div className="row mt-2">
                <div className="form-check form-check-inline pull-right">
                  <button className="btn btn-warning btn-sm mr-2" onClick={this.handleSubmit}>Submit</button>
                  <button className="btn btn-danger btn-sm text-white" onClick={this.handleReset} value="reset">Reset</button>
                </div>
              </div>
            
          </div>
        )
    }
}
export default Search;