const coresBackground = {
    grass: '#d5e8db',
    poison: '#d4b8f2',
    fire: '#edb4b4',
    bug: '#dff7d5',
    flying: '#d6d6d6',
    water: '#c9dcff',
    normal: '#d6d6d6',
    electric: '#ffffde',
    ground: '#6e6464',
    fairy: '#ffdef0',
    fighting: '#695858',
    psychic: '#ffdef0',
    rock: '#4a3f3f',
    steel: '#d1d1d1',
    ice: '#b9bec9',
    ghost: '#8a8a8a',
    dragon: '#afb8e0',
}
const coresChip = {
    grass: '#0b401a',
    poison: '#a834eb',
    fire: '#ed4747',
    bug: '#70c490',
    flying: '#6e6e6e',
    water: '#7dabff',
    normal: '#6e6e6e',
    electric: '#b5af6e',
    ground: '#5c4949',
    fairy: '#ffb8df',
    fighting: '#664747',
    psychic: '#d4aece',
    rock: '#261919',
    steel: '#757575',
    ice: '#8790a3',
    ghost: '#575757',
    dragon: '#7c8bcc',

}


export function getCorBackground(Tipo) {
    return coresBackground[Tipo];

}


export function getCorChip(Tipo) {
    return coresChip[Tipo];
}

export function getRGBA(Tipo) {
    return hexToRgbA(coresBackground[Tipo], 0.8)
}

function hexToRgbA(hex, opacidade) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacidade + ')';
    }
    return ('')
}