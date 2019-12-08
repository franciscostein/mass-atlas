const unMask = value => {
    if (value) {
        return value.replace(/\D/g, '');
    }
    return null;
}

export default unMask;