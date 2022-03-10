export const toggleColor = (list, itemToChange) => {
    const existingListItem = list.find(item => item.id === itemToChange.id);
    if(existingListItem) {
        return list.map(item=>(item.id === itemToChange.id) ? {...item, isSelected: !item.isSelected} : item) 
        // Changing selected item background color
        .map(item=> (item.id !== itemToChange.id) ? {...item, isSelected: itemToChange.isSelected}: item)
        // Changing another item background color
    }
    return [...list, {...itemToChange}]
}