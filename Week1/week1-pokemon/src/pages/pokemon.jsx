import * as React from "react";
import { ListingPokemon } from '../components/listing-pokemon';

const pokemonData = [
  {
    "_id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    },
    "description": "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
    "image": "https://pokemon-json.herokuapp.com/images/001Bulbasaur.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/001MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/001Bulbasaur.png"
  },
  {
    "_id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    },
    "description": "Ivysaur is a quadruped Pokémon that has blue-green skin with darker patches. On top of its head are pointed ears with black insides and it has narrow red eyes. It has a short, rounded snout with a wide mouth and two pointed teeth in its upper jaw. Each of its feet has three claws on them. The bulb on its back has bloomed into a large pink bud. A short brown trunk surrounded by leafy green fronds supports the bud. The weight of the plant prevents Ivysaur from standing on its hind legs and forces its legs to grow sturdy. When its flower is ready to bloom, it gives off a distinct, strong sweet-smelling aroma and starts swelling. Ivysaur will also start spending more time in sunlight in preparation for its upcoming evolution. Exposure to sunlight adds to the strength of both Ivysaur and its plant. Ivysaur's natural habitat is plains.",
    "image": "https://pokemon-json.herokuapp.com/images/002Ivysaur.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/002MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/002Ivysaur.png"
  },
  {
    "_id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    },
    "description": "Venusaur is a squat, quadruped Pokémon with bumpy, blue-green skin. It has small, circular red eyes, a short, blunt snout, and a wide mouth with two pointed teeth in the upper jaw and four in the lower jaw. On top of its head are small, pointed ears with reddish pink insides. It has three clawed toes on each foot. The bud on its back has bloomed in a large pink, white-spotted flower. The flower is supported by a thick, brown trunk surrounded by green fronds. A female Venusaur will have a seed in the center of its flower.",
    "image": "https://pokemon-json.herokuapp.com/images/003Venusaur.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/003MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/003Venusaur.png"
  },
  {
    "_id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65
    },
    "description": "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.\n",
    "image": "https://pokemon-json.herokuapp.com/images/004Charmander.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/004MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/004Charmander.png"
  },
  {
    "_id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80
    },
    "description": "Charmeleon is a bipedal, reptilian Pokémon. It has dark red scales and a cream underside from the chest down. It has narrow, blue eyes and a long snout with a slightly hooked tip. On the back of its head is a single horn-like protrusion. It has relatively long arms with three sharp claws. Its short legs have plantigrade feet with three claws and cream-colored soles. The tip of its long, powerful tail has a flame burning on it. The temperature rises to unbearable levels if Charmeleon swings its tail.\n",
    "image": "https://pokemon-json.herokuapp.com/images/005Charmeleon.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/005MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/005Charmeleon.png"
  },
  {
    "_id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100
    },
    "description": "Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.\n",
    "image": "https://pokemon-json.herokuapp.com/images/006Charizard.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/006MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/006Charizard.png"
  },
  {
    "_id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      "Speed": 43
    },
    "description": "Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.\n",
    "image": "https://pokemon-json.herokuapp.com/images/007Squirtle.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/007MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/007Squirtle.png"
  },
  {
    "_id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 58
    },
    "description": "Wartortle is a bipedal, indigo Pokémon similar to a turtle. It has brown eyes, a dark blue streak on each cheek, and two sharp teeth protruding from its upper jaw. It has three clawed fingers and pointed toes. On each side of its head are feather-like ears covered in pale blue fur. A brown shell with a pale yellow underside encases its body. A thick, white rim separates the upper and lower halves of the shell. An older Wartortle may have scars and algae growing on its shell. Poking out of the bottom of the shell is a thick, wavy tail that also has light blue fur and cannot be fully withdrawn into its shell. Its tail fur will darken with age. Its tail is a popular symbol of longevity and good luck, making this Pokémon popular with the elderly.\n",
    "image": "https://pokemon-json.herokuapp.com/images/008Wartortle.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/008MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/008Wartortle.png"
  },
  {
    "_id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 78
    },
    "description": "Blastoise is a large, bipedal turtle-like Pokémon. Its body is blue and is mostly hidden by its tough, brown shell. This shell has a cream-colored underside and a white ridge encircling its arms and separating the upper and lower halves. Two powerful water cannons reside in the top of shell over its shoulders. These cannons can be extended or withdrawn. Blastoise's head has triangular ears that are black on the inside, small brown eyes, and a cream-colored lower jaw. Its arms are thick, and it has three claws on each hand. Its feet have three claws on the front and one on the back. Poking out of the bottom of its shell is a stubby tail.\n",
    "image": "https://pokemon-json.herokuapp.com/images/009Blastoise.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/009MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/009Blastoise.png"
  },
  {
    "_id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 45
    },
    "description": "Caterpie is a Pokémon that resembles a green caterpillar with a yellow underside and teardrop-shaped tail. There are yellow ring-shaped markings down the sides of its segmented body, which resemble its eyes and are meant to scare off predators. Its most notable characteristic is the bright red antenna (osmeterium) on its head, which releases a stench to repel predators. Despite these features and its camouflage in green foliage, Caterpie is often preyed upon by Flying-type Pokémon. Its four tiny feet are tipped with suction cups, permitting this Pokémon to scale most surfaces with minimal effort.\n",
    "image": "https://pokemon-json.herokuapp.com/images/010Caterpie.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/010MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/010Caterpie.png"
  },
  {
    "_id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 30
    },
    "description": "Metapod is a Pokémon that resembles a green chrysalis. Its body is crescent-shaped with several segments making up the lower point. The front of its shell resembles a face with heavy-lidded eyes and a sharply pointed nose. The back of its shell consists of several geometrically shaped portions and projections. Its soft body is protected by a hard outer shell while it undergoes metamorphosis. While this shell is said to be as hard as steel, a sudden, powerful impact could cause its liquid innards to pop out, leaving it completely exposed. Metapod generally remains motionless, rebuilding its cells for evolution. If an enemy discovers Metapod, it is unable to do anything other than harden its outer shell. Metapod lives in temperate forests and jungles.\n",
    "image": "https://pokemon-json.herokuapp.com/images/011Metapod.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/011MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/011Metapod.png"
  },
  {
    "_id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 70
    },
    "description": "Butterfree resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. The upper pair of legs resembles small, three-fingered hands, while the lower pair resembles long, digit-less feet. Butterfree has two black antennae, a light blue snout with two fangs underneath, and large, red compound eyes. Its two pairs of wings are white with black venation. Two oval scales on a female Butterfree's lower wings are black, but they are white on a male.\n",
    "image": "https://pokemon-json.herokuapp.com/images/012Butterfree.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/012MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/012Butterfree.png"
  },
  {
    "_id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 50
    },
    "description": "Weedle is a larval Pokémon with a segmented body ranging in color from yellow to reddish-brown. Each segment of its body is a sphere. It has a bulbous red nose on its face and two spherical feet on each body segment. The combination of red and yellow coloration creates a bright warning to predators that it is poisonous. Weedle has a conical, two-inch (five centimeter) venomous stinger on its head and a barbed one on its tail. Weedle can retaliate against attackers and those who step on it with its strong toxin. It can distinguish its favorite kinds of leaves using its acute sense of smell. As a young Bug Pokémon, its daily appetite for leaves matches its weight. Weedle can be found in temperate forests and usually hides in grass, bushes, and under the leaves it eats.\n",
    "image": "https://pokemon-json.herokuapp.com/images/013Weedle.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/013MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/013Weedle.png"
  },
  {
    "_id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 35
    },
    "description": "Kakuna is a yellow, cocoon-like Pokémon. Kakuna has a dome-shaped head and black, triangular eyes. It has two scythe-like arms in the middle of its body. When it comes close to evolving, its body gives off heat that makes it warm to the touch. Kakuna remains virtually immobile and waits for evolution often hanging from tree branches by long strands of silk. When attacked, however, it can extend its poison barbs. Kakuna nests in temperate forests and misty wooded areas. Occasionally, it will also nest at the mouths of tunnels and caves, as seen in Pokémon Snap.\n",
    "image": "https://pokemon-json.herokuapp.com/images/014Kakuna.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/014MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/014Kakuna.png"
  },
  {
    "_id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      "Speed": 75
    },
    "description": "Beedrill mostly resembles a bipedal, yellow wasp; however, it only has four legs instead of six and lacks pigment pits. Beedrill's head is round with a slightly pointed mouth, large, red eyes, and black antennae with a sharp bend in the middle. Its forelegs are tipped with long, conical stingers. It stands on its other two legs, which are long, segmented, and insectoid in shape. Beedrill has two pairs of rounded, veined wings, and another stinger on its yellow-and-black striped abdomen.\n",
    "image": "https://pokemon-json.herokuapp.com/images/015Beedrill.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/015MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/015Beedrill.png"
  },
  {
    "_id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 56
    },
    "description": "Pidgey is a small, plump-bodied avian Pokémon. It is primarily brown with a cream-colored face, underside, and flight feathers. On top of its head is a short crest of three tufts. The center crest feathers are brown and the outer two tufts are cream-colored. Just under its crest are its narrow, brown eyes. Angular black marking extend from behind its eyes down its cheeks. It has a short, stubby beak and feet with two toes in front and one in back. Both its beak and feet are a grayish-pink. It has a short, brown tail made of three feathers.\n",
    "image": "https://pokemon-json.herokuapp.com/images/016Pidgey.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/016MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/016Pidgey.png"
  },
  {
    "_id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 71
    },
    "description": "Pidgeotto is a raptor-like avian Pokémon. It is covered with brown feathers, and has a cream-colored face, underside, and flight feathers. It has a crest of pinkish-red feathers on its head and black, angular markings behind its eyes. The plumage of its tail has alternating red and yellow feathers with ragged tips. Its beak and legs are pink. Two of its toes point forward, while one points backward. Additionally, it has powerful, sharp talons that it uses to grasp prey.\n",
    "image": "https://pokemon-json.herokuapp.com/images/017Pidgeotto.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/017MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/017Pidgeotto.png"
  },
  {
    "_id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 101
    },
    "description": "Pidgeot is an avian Pokémon with large wings, sharp talons, and a short, hooked beak. Its glossy plumage is mostly brown with cream-colored underparts and flight feathers. Its head has a decorated crest that is nearly as long as its body. The center feathers of its crest are yellow, while the outer feathers are red. The fan-like feathers of its tail are red or brown. Its beak and legs are pink, and there three forward-facing toes and one backward-facing toe on each foot. Behind each eye is an angular black marking.\n",
    "image": "https://pokemon-json.herokuapp.com/images/018Pidgeot.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/018MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/018Pidgeot.png"
  },
  {
    "_id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 72
    },
    "description": "Rattata is a small, quadruped rodent Pokémon. It has purple fur with a cream-colored face, paws, and underbelly. It has narrow, red eyes, rounded ears with cream-colored insides, and a single whisker on each cheek. Its long tail is tightly curled at the end. Its most notable feature is its large teeth. Like most rodents, its teeth grow continuously throughout its life and must be worn down by gnawing. A female Rattata will have shorter whiskers and lighter fur.\n",
    "image": "https://pokemon-json.herokuapp.com/images/019Rattata.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/019MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/019Rattata.png"
  },
  {
    "_id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 97
    },
    "description": "Raticate is a large rodent Pokémon. Although it is often depicted on its hind legs, it is a quadruped. It is mostly tawny colored with a cream underside. It has narrow black eyes, ears with ragged edges and dark insides, and large incisors that grow constantly. There are three whiskers on each side of its face, which it uses to maintain balance. It has short arms with three-fingered hands and webbed feet with three toes. The webbing on its feet allows it to swim. Its tail is long and scaly. A female will have shorter whiskers and lighter fur.\n",
    "image": "https://pokemon-json.herokuapp.com/images/020Raticate.png",
    "sprite": "https://pokemon-json.herokuapp.com/sprites/020MS.png",
    "thumbnail": "https://pokemon-json.herokuapp.com/thumbnails/020Raticate.png"
  }
];

export const PokemonList = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 py-12 space-y-6">
      <div className="mb-8">
        <div>
          <h1 className="text-6xl mb-4 font-extrabold">Pokemons</h1>
          <p>These are the pokemons that we are taking care of.</p>
        </div>
      </div>
      <ul className="
          grid grid-cols-1
          gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          "
          id="pokemon-list">
        {pokemonData.map((pokemon) => (
          <ListingPokemon
            imageURL={pokemon.image}
            nameEnglish={pokemon.name.english}
            description={pokemon.description}
            key={pokemon._id}
          />
        ))}
      </ul>
    </div>
  );
};