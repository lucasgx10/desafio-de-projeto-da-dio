function GetAdmins(map) {
    let admins = [];
    for ([Key , value] of map) {
        if (value === 'Admin') {
            admins.push(Key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'user');
usuarios.set('Natália', 'Admin');

console.log(GetAdmins(usuarios));


const myArray = [30,30,40,5,223,2049,3034,5];

function ValoresUnicos (arr) {
    const mySet = new Set (arr);

    return [...mySet];

}

console.log(ValoresUnicos(myArray));