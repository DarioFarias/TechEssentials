const userValidationRules = {
    name: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
            /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
        messages: {
            pattern: "Ingrese un nombre válido",
            required: "El campo no puede estar vacío",
            maxLength: "Nombre demasiado largo",
            minLength: "Nombre demasiado corto",
        },
    },
    lastName: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
            /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
        messages: {
            pattern: "Ingrese un apellido válido",
            required: "El campo no puede estar vacío",
            maxLength: "Apellido demasiado largo",
            minLength: "Apellido demasiado corto",
        },
    },
    email: {
        required: true,
        minLength: 8,
        maxLength: 40,
        pattern:
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        messages: {
            pattern: "Ingrese un email válido",
            required: "El campo no puede estar vacío",
            maxLength: "Email demasiado largo",
            minLength: "Email demasiado corto",
        },
    },
    password: {
        minLength: 8,
        maxLength: 16,
        pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
        messages: {
            pattern:
                "Ingrese una contraseña valida (1 mayuscula, minusculas, numeros",
            maxLength: "Contraseña demasiado larga",
            minLength: "Contraseña demasiado corta",
        },
    },
    tel: {
        minLength: 10,
        maxLength: 10,
        messages: {
            maxLength: "Telefono demasiado largo",
            minLength: "Telefono demasiado corto",
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

export default userValidationRules;
