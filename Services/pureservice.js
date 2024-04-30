const axios = require('axios');

const apiKey = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQdXJlc2VydmljZS5BcGkuS2V5IiwianRpIjoiOHVyS2dncWgrMWczeWJxMy9xbVdrSXJFRm1QaVowSjB4MlZXN0ladFlLc0tmVkIyclJNYUpiNC9GVm5hV25abEc0YUppK1RFUktXZ0haYWpFbGprMFE9PSJ9.-JbGimV16ogTElUyJwlLzg-nv8zo5plAuUYdoygULbU';

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