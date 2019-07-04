const AWS = require('aws-sdk')
AWS.config.update({ region: process.env.REGION || 'us-east-1' })
const s3 = new AWS.S3();

const uploadBucket = 'files-uploaded'

exports.handler = async event => {
    return await getUploadURL(event.queryStringParameters.type.replace('---', '/'))
};

const getUploadURL = async filetype => {

    const filename = Date.now().toString() + '-' + filetype.replace('/', '.')

    var s3Params = {
        Bucket: uploadBucket,
        Key:  filename,
        ContentType: filetype,
        ACL: 'public-read',
    };

    return new Promise((resolve, reject) => {
        let uploadURL = s3.getSignedUrl('putObject', s3Params)
        resolve({
            statusCode: 200,
            isBase64Encoded: false,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                uploadURL: uploadURL,
                photoFilename: filename
            })
        })
    })
}
