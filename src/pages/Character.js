const Character = () => {
    const view = `
        <div class="character-inner">
            <article class="characters-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="characters-card">
                <h3>episodes?</h3>
                <h3>status?</h3>
                <h3>species?</h3>
                <h3>gender?</h3>
                <h3>origin</h3>
                <h3>last location?</h3>
            </article>
        </div>
    `;

    return view;
};

export default Character;