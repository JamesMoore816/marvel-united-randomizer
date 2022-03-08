import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import React from 'react'

export default function SetItem(props) {
    let itemBorderColor = ""
    let backgroundGrad = ""
    let checkColor = ""
    if (props.type === "hero") {
        itemBorderColor = "darkblue"
        backgroundGrad = 'blue-grad.svg'
        checkColor = "royalblue"
    }
    else if (props.type === "villain") {
        itemBorderColor = "darkred"
        backgroundGrad = 'red-grad.svg'
        checkColor = "firebrick"
    }
    else if (props.type === "location") {
        itemBorderColor = "dimgray"
        backgroundGrad = 'gray-grad.svg'
        checkColor = "black"
    }

    const handleToggle = (value) => () => {
        const currentIndex = props.checked.indexOf(value);
        const checked = [...props.checked];

        if (currentIndex === -1) {
            checked.push(value);
        } else {
            checked.splice(currentIndex, 1);
        }

        props.setChecked(checked);
    };

    return (
        <>
        <ListItem
            sx={{ backgroundImage:`url(${props.entry.image}), url(${backgroundGrad})`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -18px, 0 0", backgroundSize:"21%, 100%" }}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(props.entry)}
                    checked={props.checked.indexOf(props.entry) !== -1}
                    inputProps={{ 'aria-labelledby': props.entry.name }}
                    sx={{'&.Mui-checked': {color: checkColor}}}
                />
            }>
                {/* <img className="char-icon" src={props.entry.image} /> */}
            <ListItemText primary={`${props.entry.name}`} sx={{marginLeft:10.5 }}/>
        </ListItem>
        <Divider />
        </>
    )
}

export const MemoizedSetItem = React.memo(SetItem)