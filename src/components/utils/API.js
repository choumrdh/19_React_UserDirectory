import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=us";

const randomUserSearch = async ()=>{
    try {
        const result = await axios.get(BASEURL);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
export default randomUserSearch;