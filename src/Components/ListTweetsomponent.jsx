import React from 'react'

export default (props) => (
	<div>	
		<div class="container-table100">
			<div class="wrap-table100">
					<div class="table">

						<div class="row header">
							<div class="cell">
								Full Name
							</div>
							<div class="cell">
								User ID
							</div>
							<div class="cell">
								Tweet
							</div>
							<div class="cell">
								Date
							</div>
						</div>
                        {props.content.map(data => (
                            <div class="row">
							<div class="cell" data-title="Full Name">
								{data.name}
							</div>
							<div class="cell" data-title="User ID">
								{data.user_id}
							</div>
							<div class="cell" data-title="Tweet">
								{data.tweet}
							</div>
							<div class="cell" data-title="Date">
								{data.date}
							</div>
						</div>
                        ))}
						
					</div>
			</div>
		</div>
		{props.children}
		</div>
)