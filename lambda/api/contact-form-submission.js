'use strict';

exports.handler = (event, context, callback) => {
    const payload = {
        thing: 'I did a thing on own website'
    };

    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload),
        "isBase64Encoded": false
    };

    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    callback(null, response);  // Echo back the first key value
};