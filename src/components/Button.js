import React from 'react';

export default class Button extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name: props.name,
			action: props.action,
			classType: props.classType,
			value: props.value,
			response: props.response
        }
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render()
    {
        return (
            <button name="{this.state.name}" 
                    class="{this.state.classType" 
                    onClick="{this.state.action}(&quot;{this.state.response}&quot;, &quot;{this.state.value}&quot;, 1)">
                        {this.state.value}
            </button>
        )
    }
}