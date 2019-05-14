const URI = "http://localhost:3000/listCalls";

export default {
    async fetchCalls() {
        try {
            let response = await fetch(URI);
            let responseJsonData = await response.json();
            return responseJsonData;
        } catch(e) {
            console.log("[FritzCalls] Data Error: " + e);
        }
    }
}