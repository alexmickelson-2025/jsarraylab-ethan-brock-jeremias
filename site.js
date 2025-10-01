const buildHeader = () => {
  return `<header> <a href="#">Logo</a> </header>`;
};
function buildAnimalCard(animal) {
  return `${animal.title} <br> <img src=" ${animal.imageLocation} "  alt=" ${animal.alt} "> <br>  ${animal.description} <br> <br>`;
}

function getQueryParameters() {
  const queryString = window.location.search.substring(1);
  const params = [];
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i].split("=");
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
  }
  return params;
}
function buildMain() {
  const params = getQueryParameters();
  const offset = parseInt(params.offset, 10);
  const count = parseInt(params.count, 10);
  let error = "";
  if (isNaN(offset) && isNaN(count)) {
    error = "Error: Missing both offset and count.";
  } else if (isNaN(offset)) {
    error = "Error: Missing offset.";
  } else if (isNaN(count)) {
    error = "Error: Missing count.";
  } else if (offset < 0) {
    error = "Error: Offset cannot be negative.";
  } else if (offset + count > animals.length) {
    error = "Error: Offset and count are too large.";
  }

  if (error) {
    return `<main><p class="error">${error}</p></main>`;
  }

   if (isNaN(offset) && isNaN(count)) {
    error = "Error: Missing both offset and count.";
  } else if (isNaN(offset)) {
    error = "Error: Missing offset.";
  } else if (isNaN(count)) {
    error = "Error: Missing count.";
  } else if (offset < 0) {
    error = "Error: Offset cannot be negative.";
  } else if (offset + count > animals.length) {
    error = "Error: Offset and count are too large.";
  }

  if (error) {
    return `<main><p class="error">${error}</p></main>`;
  }

  let mainContent = `<main><article class="card-container">`;
  for (let i = offset; i < offset + count; i++) {
    mainContent += buildAnimalCard(animals[i]);
  }
  mainContent += `</article></main>`;
  return mainContent;

  // const mainContent =
  //   `<article class="card-container">` +
  //   animals.map((animal) => buildAnimalCard(animal)).join("") +
  //   `</article>`;
  // return mainContent;
}
function leftNav() {
  return "<nav> <ul> <li>Home</li> <li>Page 1</li> <li>Page 2</li> </ul> </nav>";
}
function buildFooter() {
  return "<footer><ul> <li>Contact</li> <li>About</li> <li>Privacy</li> </ul></footer>";
}

const buildSiteLayout = () => {
  const header = buildHeader();
  const body = buildMain();
  const footer = buildFooter();
  const Nav = leftNav();
  return `${header} ${body} ${Nav} ${footer}`;
};
const animals = [
  {
    title: "This Is a Giraffe",
    alt: "Giraffe",
    description:
      "According to wikipedia: The giraffe's chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones, and its spotted coat patterns. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. Its scattered range extends from Chad in the north to South Africa in the south, and from Niger in the west to Somalia in the east. Giraffes usually inhabit savannahs and woodlands. Their food source is leaves, fruits, and flowers of woody plants, primarily acacia species, which they browse at heights most other herbivores cannot reach.",
    imageLocation: "/images/giraffe.jpeg",
  },
  {
    title: "This is a Lion",
    alt: "Lion",
    description:
      "According to wikipedia: The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, lions typically do not actively seek out and prey on humans.",
    imageLocation: "/images/lion.jpg",
  },
  {
    title: "This is a Zebra",
    alt: "Zebra",
    description: `According to wikipedia: Zebras are primarily grazers and can
                  subsist on lower-quality vegetation. They are preyed on mainly
                  by lions, and typically flee when threatened but also bite and
                  kick. Zebra species differ in social behaviour, with plains
                  and mountain zebra living in stable harems consisting of an
                  adult male or stallion, several adult females or mares, and
                  their young or foals; while Grévy's zebra live alone or in
                  loosely associated herds. In harem-holding species, adult
                  females mate only with their harem stallion, while male
                  Grévy's zebras establish territories which attract females and
                  the species is promiscuous. Zebras communicate with various
                  vocalisations, body postures and facial expressions. Social
                  grooming strengthens social bonds in plains and mountain
                  zebras.`,
    imageLocation: "/images/zebra.jpg",
  },
  {
    title: "This is a Elephant",
    alt: "Elephant",
    description: `According to wikipedia: Elephants are scattered throughout
                  sub-Saharan Africa, South Asia, and Southeast Asia and are
                  found in different habitats, including savannahs, forests,
                  deserts, and marshes. They are herbivorous, and they stay near
                  water when it is accessible. They are considered to be
                  keystone species, due to their impact on their environments.
                  Elephants have a fission-fusion society, in which multiple
                  family groups come together to socialise. Females (cows) tend
                  to live in family groups, which can consist of one female with
                  her calves or several related females with offspring. The
                  leader of a female group, usually the oldest cow, is known as
                  the matriarch.`,
    imageLocation: "/images/elephant.jpg",
  },
  {
    title: "This is a Water Buffalo",
    alt: "Water Buffalo",
    description: `According to wikipedia: Water buffalo (Bubalus bubalis), also
                  called the domestic water buffalo or Asian water buffalo, is a
                  large bovid originating in the Indian subcontinent and
                  Southeast Asia. Today, it is also found in Italy, the Balkans,
                  Australia, North America, South America and some African
                  countries.[1] Two extant types of water buffalo are
                  recognized, based on morphological and behavioural criteria:
                  the river buffalo of the Indian subcontinent and further west
                  to the Balkans, Egypt and Italy and the swamp buffalo, found
                  from Assam in the west through Southeast Asia to the Yangtze
                  valley of China in the east.[1][2]`,
    imageLocation: "/images/waterBuffalo.jpg",
  },
];
const siteHTML = buildSiteLayout();
document.write(siteHTML);
