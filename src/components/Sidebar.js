import React from 'react'
import '../App.css'
import data from './data/map.json'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


// console.log(data.features);
const Sidebar = data.features.map((data) => {
    //console.log(data.properties.locationName) to call data
    return (
      
      <List disablePadding dense>
        
        <ListItem button>
          <ListItemText>
            <div className = "cardItem">
            <small>{data.properties.reportedDate}</small>
            <h4>{data.properties.locationName}</h4>
            <p>{data.properties.description}</p>
            <a href={data.properties.site}>Source:{data.properties.site}</a>
            </div>
          </ListItemText>
        </ListItem>
      </List>
    );

})
   
    
  

export default Sidebar

