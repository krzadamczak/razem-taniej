import { useState } from "react";

export const useForm = (options) => {
    const [data, setData] = useState(options?.initialValues || {});
    const [errors, setErrors] = useState({});
    const handleChange = (sanitizeFunction) => (e) => {
        const key = e.target.name;
        const value = sanitizeFunction ? sanitizeFunction(e.target.value) : e.target.value;
        setData((prevData) => ({ ...prevData, [key]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validations = options?.validations;

        if (validations) {
            let valid = true;
            const newErrors = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];

                //Wyrażenie po prawej stronie - jeżeli value będzie np. pustrym stringiem zostanie przekonwerowane na true.
                //Pusty string - false.
                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                //Wyrażenie po prawej stronie - jeżeli wartość przejdzie test znaczy, że jest prawidłowa, dlatego musimy odwrócić warunek.
                if (validation?.pattern?.value && !RegExp(validation.pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = validation.pattern.message;
                }

                //Wyrażenie po prawej stronie - musimy odwrócić warunek ponieważ jeżeli funkcja zwróci true znaczy, że wartość jest prawidłowa.
                if (validation?.custom?.isValid && !validation.custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = validation.custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        errors,
        handleChange,
        handleSubmit,
    };
};
