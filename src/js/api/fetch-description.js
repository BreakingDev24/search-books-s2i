import axios from "axios";

export const fetchDescription = async (key) => {
    try{
        const descriptionUrl = `https://openlibrary.org${key}.json`
        const response = await axios.get(descriptionUrl);
        const bookDescription = getDescription(response);
        console.log(response);
        return bookDescription
        
    } catch(err){
        console.log(err);
    }

}

const getDescription = (key) => {
    const data =  _.get(key, 'data', {});
    const description = _.isObject(data.description) ? _.get(data, 'description.value', 'No description found') : _.get(data, 'description', 'No description found');
    return description
}