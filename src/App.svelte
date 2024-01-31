<script>
  import Character from "./lib/Character.svelte";

  let characters = [];
  let page = 1;

  async function loadCharacters() {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?page=" + page
    );
    const data = await response.json();
    console.log(loadCharacters)
    characters = data.results;
  }

  loadCharacters();

  function previousPage() {
    page--;
    loadCharacters();
  }

  function nextPage() {
    page++;
    loadCharacters();
  }
</script>

<main>
  <h1 class="title">Rick and Morty Characters</h1>

  <div class="container">

    <div class="btns">
      <button class="btn" on:click={previousPage} disabled={page === 1}>Previous</button>
      <button class="btn" on:click={nextPage}>Next</button>
    </div>

    <div class="grid">
      {#each characters as character}
        <Character {character} />
      {/each}
    </div>

    <div class="btns">
      <button class="btn-2" on:click={previousPage} disabled={page === 1}>Previous</button>
      <button class="btn-2" on:click={nextPage}>Next</button>
    </div>
  </div>
</main>

<style>
</style>
