const productValidationRules = {
    productCategory: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
        /^[ a-zA-Z0-9á-úÁ-Ú#ñÑ-]*$/,
        messages: {
            pattern: "Caracteres no permitidos",
            required: "El campo no puede estar vacío",
            maxLength: "Nombre de categoria demasiado largo",
            minLength: "Nombre de categoria demasiado corto",
        },
    },
    productName: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
        /^[ a-zA-Z0-9á-úÁ-Ú#ñÑ-]*$/,
        messages: {
            pattern: "Caracteres no permitidos",
            required: "El campo no puede estar vacío",
            maxLength: "Titulo demasiado largo",
            minLength: "Titulo demasiado corto",
        },
    },
    productDescription: {
        required: true,
        minLength: 8,
        maxLength: 300,
        pattern:
        /^[ a-zA-Z0-9á-úÁ-Ú#ñÑ-]*$/,
        messages: {
            pattern: "Caracteres no permitidos",
            required: "El campo no puede estar vacío",
            maxLength: "Descripcion demasiado larga",
            minLength: "Descripcion demasiado corta",
        },
    },
    productPrice: {
        required: true,
        maxLength: 9,
        pattern: /^[0-9]+[.,]{1,1}[0-9]{2,2}$/,
        messages: {
            pattern: "Caracteres no permitidos",
            required: "El campo no puede estar vacío",
            maxLength: "Demasiado caro",
        },
    },
    productStock: {
        required: true,
        maxLength: 6,
        pattern: /^[0-9]+$/,
        messages: {
            pattern: "Caracteres no permitidos",
            required: "El campo no puede estar vacío",
            maxLength: "Son demasiados",
        },
    },

    getErrorMessages: function (errors, fieldName) {
        if (!errors || !errors[fieldName]) return null;

        const errorType = errors[fieldName].type;
        const fieldValidationRules = this[fieldName];
        const errorMessage = fieldValidationRules.messages[errorType];

        return errorMessage
    },
};

export default productValidationRules;
