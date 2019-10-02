'use strict';

const AWS = require('aws-sdk');
const ses = new AWS.SES({apiVersion: '2010-12-01'});

const apiGatewayResp = payload => ({
    statusCode: 200,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    isBase64Encoded: false
});

exports.handler = (event, context, callback) => {
    const payload = JSON.parse(event.body);

    const config = {
        Destination: {
            ToAddresses: [ process.env.TO_EMAIL_ADDRESS ]
        },
        Message: {
            Body: {
                Html: {
                    Data: `
                    <p>
                        <b>Name: </b>${payload.name}
                    </p>
                    <p>
                        <b>Email: </b>${payload.email}
                    </p>
                    <p>
                        <b>Message: </b>${payload.message}
                    </p>`,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Direct robertbutcher.co.uk Contact',
                Charset: 'UTF-8'
            }
        },
        Source: process.env.TO_EMAIL_ADDRESS
    };

    ses.sendEmail(config, err => {
        if (!err) {
            callback(null, apiGatewayResp({
                message: 'Thank you for your message, Rob will be in touch soon.'
            }));
        }
        else {
            callback(err);
        }
    });
};