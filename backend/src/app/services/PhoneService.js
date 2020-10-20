class PhoneService {

    decodeCodeToWord(code) {
        const dic = {
            n0: {
              v1: ' '
            },
            n2: {
              v1: 'a',
              v2: 'b',
              v3: 'c',
            },
            n3: {
              v1: 'd',
              v2: 'e',
              v3: 'f'
            },
            n4: {
              v1: 'g',
              v2: 'h',
              v3: 'i'
            },
            n5: {
              v1: 'j',
              v2: 'k',
              v3: 'l'
            },
            n6: {
              v1: 'm',
              v2: 'n',
              v3: 'o'
            },
            n7: {
              v1: 'p',
              v2: 'q',
              v3: 'r',
              v4: 's'
            },
            n8: {
              v1: 't',
              v2: 'u',
              v3: 'v'
            },
            n9: {
              v1: 'w',
              v2: 'x',
              v3: 'y',
              v4: 'z'
            }
          };

        const codeArray = code.split(' ');
        let word = "";

        codeArray.forEach(c => {
            const number = `n${c[0]}`;
            const length = `v${c.length}`
            
            const character = dic[number][length]
            word += character;
        });

        return word;
    }

}

module.exports = new PhoneService();