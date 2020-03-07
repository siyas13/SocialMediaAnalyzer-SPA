import React from 'react'
import AlertButtonComponent from './AlertButtonComponent'
import ReportButtonComponent from './ReportButtonComponent'

export default (props) => (
    <div class="container-table100">
        <div class="wrap-table100">
                <div class="table">

                    <div class="row header">
                        <div class="cell pred">
                            Full Name
                        </div>
                        <div class="cell pred">
                            User ID
                        </div>
                        <div class="cell pred">
                            Tweet
                        </div>
                        <div class="cell pred">
                            Date
                        </div>
                        <div class="cell pred">
                            Status
                        </div>
                        <div class="cell pred">
                            Nature
                        </div>
                        <div class="cell pred">
                            Action
                        </div>
                    </div>
                    {props.content.map(data => (
                        <div class="row">
                        <div class="cell pred" data-title="Full Name">
                            {data.name}
                        </div>
                        <div class="cell pred" data-title="User ID">
                            {data.user_id}
                        </div>
                        <div class="cell pred" data-title="Tweet">
                            {data.tweet}
                        </div>
                        <div class="cell pred" data-title="Date">
                            {data.date}
                        </div>
                        <div class="cell pred" data-title="status">
                            <AlertButtonComponent status={data.status}/>
                        </div>
                        <div class="cell pred" data-title="nature">
                            {data.nature}
                        </div>
                        <div class="cell pred" data-title="Action">
                            <ReportButtonComponent reportUser={props.reportAndBlock} id={1}/>
                        </div>

                    </div>
                    ))}
                    
                </div>
        </div>
    </div>
)