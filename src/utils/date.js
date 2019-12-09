const date = {

    format: value => {
        if (value) {
            const day = value.substring(0, 2);
            const month = value.substring(3, 5);
            const year = value.substring(6, 10);
        
            return `${month}/${day}/${year}`;
        }
        return null;
    }
}

export default date;