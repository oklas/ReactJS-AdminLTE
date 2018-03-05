import React from 'react'
import createReactClass from 'create-react-class'

		var TimelineBody = createReactClass({
			getDefaultProps: function() {
			    return {
			        content: 'Sample content',   
			    }
			},
			render: function(){
				return (
			        <div className="timeline-body">
			            {this.props.content}
			            {this.props.children}
			        </div>
				)
			}
		});

		return TimelineBody
	}

