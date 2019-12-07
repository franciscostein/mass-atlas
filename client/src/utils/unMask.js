const unMask = value => {

    return value.replace(/\D/g, '');
}

export default unMask;