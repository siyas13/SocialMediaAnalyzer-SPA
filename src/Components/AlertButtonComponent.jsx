import React from 'react'

export default (props) => (
    props.status==1 ? <button type="submit" class="flash-button red-btn"></button> : <button type="submit" class="flash-button green-btn"></button>
    
)