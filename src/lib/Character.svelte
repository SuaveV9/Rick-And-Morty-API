<script>
  export let character;
</script>

<div class="character">
  <img src={character.image} alt="character" />
  <h2 class="name-character">{character.name}</h2>
  <h3 class="info">Gender: {character.gender}</h3>
  <p class="info">Location: {character.location.name}</p>
  <p class="info">Status: {character.status}</p>
  <p class="info">Specie: {character.species}</p>
</div>
