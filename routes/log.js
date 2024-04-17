const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('log');
});

router.post('/create-ticket', async (req, res) => {
  try {
    const {
      subject,
      description,
      requestTypeId,
      userId,
      ticketTypeId,
      ticketPriorityId,
      ticketStatusId,
      ticketSourceId,
      ticketAssignedDepartmentZoneId,
      ticketAssignedTeamId
    } = req.body;

    const newTicketData = {
      tickets: [
        {
          subject: subject,
          description: description,
          links: {
            requestType: {
              id: requestTypeId
            },
            user: {
              id: userId
            },
            ticketType: {
              id: ticketTypeId
            },
            priority: {
              id: ticketPriorityId
            },
            status: {
              id: ticketStatusId
            },
            source: {
              id: ticketSourceId
            },
            assignedDepartment: {
              id: ticketAssignedDepartmentZoneId
            },
            assignedTeam: {
              id: ticketAssignedTeamId
            }
          }
        }
      ]
    };

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://vid-serviceportalen.pureservice/api/ticket',
      headers: {
        'X-Authorization-Key': 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQdXJlc2VydmljZS5BcGkuS2V5IiwianRpIjoiOHVyS2dncWgrMWczeWJxMy9xbVdrSXJFRm1QaVowSjB4MlZXN0ladFlLc0tmVkIyclJNYUpiNC9GVm5hV25abEc0YUppK1RFUktXZ0haYWpFbGprMFE9PSJ9.-JbGimV16ogTElUyJwlLzg-nv8zo5plAuUYdoygULbU',
        'Content-Type': 'application/vnd.api+json'
      },
      data: newTicketData
    };

    const response = await axios(config);

    console.log('New ticket created:', response.data);
    res.status(200).send('New ticket created successfully');
  } catch (error) {
    console.error('Error creating new ticket:', error);
    res.status(500).send('Error creating new ticket');
  }
});

module.exports = router;