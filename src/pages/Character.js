import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(id); 
    console.log(character)
    console.log('img',character.img);
    // const bcs = character.better_call_saul_appearence.lenght > 0 ? character.better_call_saul_appearence : 'none';
    const view = `
        <div class="character-inner">
            <article class="characters-card">
                <img src="${character.img}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="characters-card">
                <h3>appearance:<span>${character.appearance}</span></h3>
                <h3>status:<span>${character.status}</span></h3>
                <h3>nickname:<span>${character.nickname}</span></h3>
                <h3>birthday<span>${character.birthday}</span></h3>
                <h3>occupation<span>${character.occupation}</span></h3>

            </article>
        </div>
    `;

    return view;
};

export default Character;