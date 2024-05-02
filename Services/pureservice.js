const axios = require('axios');

const apiKey = process.env.API_KEY;

async function createTicketWithApiKey(ticketData) {
    try {
        const config = {
            headers: {
                'X-Authorization-Key': apiKey,
                'Content-Type': 'application/vnd.api+json'
            }
        };

        const response = await axios.post('https://vid-serviceportalen.pureservice/api/tickets/', ticketData, config);
        return response.data;
    } catch (error) {
        console.error('Error creating ticket with PureService API:', error);
        throw error;
    }
}

module.exports = {
    createTicketWithApiKey
};