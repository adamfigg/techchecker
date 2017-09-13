import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchByCompany extends Component {
    render() {
        return (
            <div>
                <p>This is where you will be able to search by a company name. Neat huh?</p>
                <form>
                    <input onChange={(e)=> this.setState({ inputValue: e.target.Value})} 
                           value={this.state.inputValue} 
                           placeholder="Check by company name"></input>
                    <button onClick={(e)=> { e.preventDefault();
                        if (this.state.inputValue) {
                            this.props.nameToCheck(this.state.inputValue)
                            this.setState({
                                inputValue:''
                            })
                        }}}>Check this Company name</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { nameToCheck })(SearchByCompany);