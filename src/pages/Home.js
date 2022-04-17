import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    const view = `
    <div class="characters">
        ${characters.map(character => `
            <article class="character-item">
                <a href="#/${character.char_id}/">
                    <img src="${character.img}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a> 
            </article>
        `).join('')}
    </div>`;

    return view;
};

export default Home;