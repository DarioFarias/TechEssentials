const productValidationRules = {
    productCategory: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
            /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
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
            /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
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
        /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
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
        messages: {
            required: "El campo no puede estar vacío",
            maxLength: "Demasiado caro",
        },
    },
    productStock: {
        required: true,
        maxLength: 6,
        messages: {
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
