import React from 'react'
import createReactClass from 'create-react-class'

        var Callout = createReactClass({
        	render: function(){
        		return (
                    <div className={"callout "+this.props.theme} >
                        <h4>{this.props.title}</h4>

                        {this.props.content}
                        {this.props.children}
                    </div>
        		)
        	}
        });

        return Callout;
    }

