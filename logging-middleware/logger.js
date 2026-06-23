const axios = require("axios");

// Paste your latest access token here
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb2hpdGhjaGludGEzMzIyQGdtYWlsLmNvbSIsImV4cCI6MTc4MjE5ODM5NCwiaWF0IjoxNzgyMTk3NDk0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmM4NDQ0MTUtNmYxNC00M2NlLWJmN2ItZjljZDg1ZTNmMzlmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2hpbnRhIHJvaGl0aCIsInN1YiI6IjUxZTJlYzJkLWZhMzYtNGM3OS1hMmZlLTRmNzZiMWM1MjcyZSJ9LCJlbWFpbCI6InJvaGl0aGNoaW50YTMzMjJAZ21haWwuY29tIiwibmFtZSI6ImNoaW50YSByb2hpdGgiLCJyb2xsTm8iOiJhMjMxMjY1NTIyMDIiLCJhY2Nlc3NDb2RlIjoiTVRxeGFyIiwiY2xpZW50SUQiOiI1MWUyZWMyZC1mYTM2LTRjNzktYTJmZS00Zjc2YjFjNTI3MmUiLCJjbGllbnRTZWNyZXQiOiJtdmJIaFJxR0RabXJtR0NDIn0.YoGfzpTJQRP5AZ1QWHRxllKCGc7O6MHyemHCiybkMxs";

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                },
                timeout: 15000
            }
        );

        console.log("SUCCESS");
        console.log(response.data);

        return response.data;

    } catch (error) {
        console.log("ERROR");

        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = Log;