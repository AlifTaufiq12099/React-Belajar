import axios from 'axios';

const API_URL = "https://kdxsrsmtrzyuovpmazwk.supabase.co/rest/v1/notes";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkeHNyc210cnp5dW92cG1hendrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MjI1NDgsImV4cCI6MjA5NzI5ODU0OH0.Vs0yJn3j0wMcw5Dbmdrfc_XAQje0IufboCiliSx5obk";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

async function test() {
    try {
        console.log("Fetching notes to check schema...");
        const getRes = await axios.get(API_URL + "?limit=1", { headers });
        console.log("Schema from get:", getRes.data);

        console.log("Trying to post data...");
        await axios.post(API_URL, { title: "test", content: "test", status: "" }, { headers });
        console.log("Post succeeded");
    } catch (e) {
        if (e.response) {
            console.error("Post failed. Error data:", JSON.stringify(e.response.data, null, 2));
        } else {
            console.error("Error:", e.message);
        }
    }
}

test();
