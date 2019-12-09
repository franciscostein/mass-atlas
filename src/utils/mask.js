const mask = {

    telefone: value => {
        if (value) {
            const ddd = value.substring(0, 2);
            let first = '';
            let second = '';

            if (value.length === 11) {  // celular
                first =  value.substring(2, 7);
                second = value.substring(7, 11);
            } else {    // fixo
                first =  value.substring(2, 6);
                second = value.substring(6, 10);
            }
            return `(${ddd}) ${first}-${second}`;
        }
        return null;  
    },

    data: value => {
        if (value) {
            const year = value.substring(0, 4);
            const month = value.substring(5, 7);
            const day = value.substring(8, 10);
            
            return `${day}/${month}/${year}`;
        }
        return null;
    },

    agencia: value => {
        if (value) {
            const first = value.substring(0, 3);
            const second = value.substring(3, 4);

            return `${first}-${second}`;
        }
        return null;  
    },

    conta: value => {
        if (value) {
            const first = value.substring(0, 2);
            const second = value.substring(2, 5);
            const third = value.substring(5, 6);

            return `${first}.${second}-${third}`;
        }
        return null;
    }
}

export default mask;