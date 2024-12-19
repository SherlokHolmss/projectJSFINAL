const scientists = [
    {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1
    },
    {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2
    },
    {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3
    },
    {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4
    },
    {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5
    },
    {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6
    },
    {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7
    },
    {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8
    },
    {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9
    },
    {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10
    },
    {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11
    },
    {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12
    }
];

const scientistsList = document.querySelector(".scientists-list");

const scientistCards = scientists.map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');

function renderScientists(scientists) {
    scientistsList.innerHTML = "";
    scientistsList.insertAdjacentHTML("afterbegin", scientists);
}

renderScientists(scientistCards);

const scientistBtns = document.querySelector(".scientists-buttons");


function filterScientists(e) {
    let filterScientists;

    switch (e.target.id) {
        case "scientists-19th":
            filterScientists = scientists.filter((scientist) => scientist.born > 1800 && scientist.born <= 1900).map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        case "sort-by-alphabet":
            filterScientists = scientists.sort((a, b) => a.name.localeCompare(b.name)).map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        case "sort-by-age":
            filterScientists = scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born)).map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        case "latest-born":
            const findLatestBorn = scientists.find((scientist) => scientist.born === Math.max(...scientists.map((scientist) => scientist.born)));
            filterScientists = `<li class="scientist-item"><p class="scientist-name">${findLatestBorn.name} ${findLatestBorn.surname}</p> <p class="scientist-age">${findLatestBorn.born}-${findLatestBorn.dead}</p></li>`;
            renderScientists(filterScientists);
            break;
        case "albert-born":
            const findAlbertBorn = scientists.find((scientist) => scientist.name === "Albert" && scientist.surname === "Einstein");
            filterScientists = `<li class="scientist-item"><p class="scientist-name">${findAlbertBorn.name} ${findAlbertBorn.surname}</p> <p class="scientist-age">${findAlbertBorn.born}-${findAlbertBorn.dead}</p></li>`;
            renderScientists(filterScientists);
            break;
        case "start-surname-with-C":
            filterScientists = scientists.filter((scientist) => scientist.surname.charAt(0) === "C").map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        case "start-name-with-A":
            filterScientists = scientists.filter((scientist) => scientist.name.charAt(0) !== "A").map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        case "shortest-and-longest-lifespan":
            const sortByLifespan = scientists.sort((a, b) => (a.dead - b.dead) - (a.born - b.born));
            filterScientists = [sortByLifespan[0], sortByLifespan[sortByLifespan.length - 1]].map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        case "same-initials":
            filterScientists = scientists.filter((scientist) => scientist.name.charAt(0) === scientist.surname.charAt(0)).map((scientist) => `<li class="scientist-item"><p class="scientist-name">${scientist.name} ${scientist.surname}</p> <p class="scientist-age">${scientist.born}-${scientist.dead}</p></li>`).join('');
            renderScientists(filterScientists);
            break;
        default:
            filterScientists = scientistCards;
            renderScientists(filterScientists);
            break;
    }
    return filterScientists;
}

scientistBtns.addEventListener("click", filterScientists);