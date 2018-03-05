import React from 'react'
import createReactClass from 'create-react-class'

		var TimelineFooter = createReactClass({
			render: function(){
				return (
			        <div className="timeline-footer">
			            {this.props.content}
			            {this.props.children}
			        </div>
				)
			}
		});

		return TimelineFooter
	}

