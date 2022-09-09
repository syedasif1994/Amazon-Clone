import axios from "axios"

const instance= axios.create({
baseURL:  "http://localhost:9000"
})

export default instance


// "https://Amazon-clone01.herokuapp.com/"
// "http://localhost:9000"