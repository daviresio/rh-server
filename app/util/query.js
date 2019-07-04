module.exports.removeTimestamp = (arr = []) => ({attributes: {exclude:['createdAt', 'updatedAt'].concat(arr)}})
