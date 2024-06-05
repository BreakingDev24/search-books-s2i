import axios from "axios";

export const fetchDescription = async (key) => {
    try{
        const descriptionUrl = `https://openlibrary.org${key}.json`
        const response = await axios.get(descriptionUrl);
        const bookDescription = getDescription(response)
        return bookDescription
        console.log(bookDescription);
    } catch(err){
        console.log(err);
    }

}

const getDescription = (key) => {
    const data =  _.get(key, 'data', {});
    const description = _.get(data, 'description', '');
    return description
}