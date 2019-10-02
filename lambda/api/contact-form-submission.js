'use strict';

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
    console.log('da event is: ', JSON.stringify(event));
    const config = {
        Destination: {
            ToAddresses: [ process.env.TO_EMAIL_ADDRESS ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'STRING_VALUE',
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

    ses.sendEmail(config, (err, data) => {
        console.log(data);
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