import React, { Component } from 'react';
import { connect } from 'react-redux';
import reducer from './reducer';
import { statement } from '@babel/template';

class Counter extends Component {

    render() {
        return (
            <div>
                <p>{this.props.cnt}</p>
                <button onClick={this.props.onIncrementCounter}>+</button>
                <button onClick={this.props.onDecrementCounter}>-</button>
                <button onClick={()=> this.props.onStoreResult(this.props.cnt)}>Store Result</button>
                <hr />
                <ul>
                    {
                        this.props.results.map((res, index) => (
                            <li onClick={() => this.props.onDeleteCounter(res.id)}>{res.value}</li>
                    ))
                    }
              </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cnt: state.count,
        results: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT", val: 1 }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT", val: 1 }),
        onStoreResult: (result) => dispatch({ type: "STORE_RESULT", result: result }),
        onDeleteCounter: (resultId) => dispatch({type: "DELETE_RESULT", resultId: resultId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);