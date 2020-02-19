import React from 'react';

export default class Button extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name: this.props.name,
			action: this.props.action,
			classType: this.props.classType,
			value: this.props.value,
			response: this.props.response
        }
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render()
    {
        return (
            <button key={this.props.key}
                    name={this.state.name}
                    class={this.state.classType}>
                        {this.state.value}
            </button>
        )
    }
}