const handleChange = (setFormData, sanitizeFunction) => (e) => {
    const type = e.target.type;
    const key = e.target.name;
    const value = sanitizeFunction ? sanitizeFunction(e.target.value) : e.target.value;
    switch (type) {
        case "checkbox":
            setFormData((prevFormData) => ({ ...prevFormData, [key]: !prevFormData[key] }));
            break;
        default:
            setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
            break;
    }
};

export { handleChange };
