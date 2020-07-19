import React from 'react'

export default (props) => {
return (
<div class="button_cont" align="center">
    <a class="example_e" onClick = {() => props.reportUser(props.data)} target="_blank" rel="nofollow noopener">Report Tweets</a>
</div>
)}