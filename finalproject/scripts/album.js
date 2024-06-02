function showContent(content) {
    document.getElementById('selectedContent').textContent = content;
}

function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedOption = event.target.getAttribute('data-option');
            displayTempleCards(selectedOption);
            toggleActive(link);
        });
    });

    displayTempleCards('home');
});


const temples = [
    {
        templeName: "Hill AirForce Base Musemum",
        location: "Clearfield, Utah",
        dedicated: "2016, July, 7th",
        area: 11500,
        imageUrl: "images/F-15-eagle(2).jpg"
    },
    {
        templeName: "Hill AirForce Base Musemum",
        location: "Clearfield, Utah",
        dedicated: "2016, July, 7th",
        area: 74792,
        imageUrl: "images/f15-eagle2(1).jpg"
    },
    {
        templeName: "Shark Bate Ooo HA HA ",
        location: "Living Planet Aquarium",
        dedicated: "2018, June, 20",
        area: 96630,
        imageUrl: "images/shark.jpg"
    },
    {
        templeName: "4th of July and Sparklers",
        location: "Clearfield, Utah",
        dedicated: "2019, July, 4th",
        area: 6861,
        imageUrl: "images/4thofjuly.jpg"
    },
    {
        templeName: "2nd Child incoming!",
        location: "Spanish Fork, Utah",
        dedicated: "2020, Sep, 16th",
        area: 156558,
        imageUrl: "images/itsaboy2.jpg"
    },
    {
        templeName: "Disneyland Vacation (Rockets)",
        location: "Anehiem, California",
        dedicated: "2021, November, 16th",
        area: 9600,
        imageUrl: "images/rocketdisney.jpg"
    },
    {
        templeName: "Disneyland's Merriest Nights!",
        location: "Anehiem, California",
        dedicated: "2021, November, 16th",
        area: 116642,
        imageUrl: "images/christmasdisney2.jpg"
    },
    {
        templeName: "Merriest Night's party",
        location: "Anehiem, California",
        dedicated: "2021, November, 16th",
        area: 54000,
        imageUrl: "images/Disneyposterchristmas.jpg"
    },
    {
        templeName: "Got to see Princess Jasmine!",
        location: "Anehiem, California",
        dedicated: "2023, June 3rd",
        area: 40000,
        imageUrl: "images/jasmine.jpg"
    },
    {
        templeName: "Sophie hanging with Goofy!",
        location: "Anehiem, California",
        dedicated: "2023, June 4rth",
        area: 57000,
        imageUrl:
            "images/sophieGoofy.jpg",
        alt: "Rexburg Idaho Temple",
    },
    {
        templeName: "A Friend's Wedding",
        location: "Pleasant Grove, Utah",
        dedicated: "2023 August 23rd",
        area: 37500,
        imageUrl: "images/family-wedding.jpg"
    }
];


function displayTempleCards(option) {
    const container = document.getElementById('temple-figures');
    container.innerHTML = '';

    let filteredTemples = temples;

    switch (option) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const dedicationYear = parseInt(temple.dedicated.split(',')[0]); // Extract the year from the dedication string
                return dedicationYear < 2000;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const dedicationYear = parseInt(temple.dedicated.split(',')[0]); // Extract the year from the dedication string
                return dedicationYear >= 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area >= 9999);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'home':
        default:
            filteredTemples = temples;
            break;
    }

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';

        templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Date: ${temple.dedicated}</p>
           
            <p class="space"> </p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(templeCard);
    });
}

function toggleActive(element) {
    const navLinks = document.querySelectorAll('.navigation ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}
