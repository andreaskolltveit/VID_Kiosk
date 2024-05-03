const express = require('express');
const router = express.Router();
const service = require('../Services/pureservice');

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

    const response = await service.createTicketWithApiKey(newTicketData);

    console.log('New ticket created:', response);
    res.status(200).send('New ticket created successfully');
  } catch (error) {
    console.error('Error creating new ticket:', error);
    res.status(500).send('Error creating new ticket');
  }
});

module.exports = router;
