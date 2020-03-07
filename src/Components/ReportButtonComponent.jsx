import React from 'react'

export default (props) => {
return (
<div class="button_cont" align="center">
    <a class="example_e" onClick = {() => props.reportUser(props.id)} target="_blank" rel="nofollow noopener">Analyze Tweets</a>
</div>
)}