module.exports.notNull = campo => ({
    allowNull: false,
    validate: {
        notNull: {
            msg: `O campo ${campo} e obrigatorio`
        },
        notEmpty: {
            msg: `O campo ${campo} e obrigatorio`
        }
    }
})
