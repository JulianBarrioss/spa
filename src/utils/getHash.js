const getHash = () => location.hash
                        .slice(1)
                        .toLocaleLowerCase()
                        .split('/')[1] || '/';

export default getHash;

// const data = {
//     0: {
//         img: 'asdf'
//     },
//     1: {
//         imG: 'asdf',
//     }

// }

// data[0].img