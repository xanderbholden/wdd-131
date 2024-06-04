function toggleMenu() {
    const topnav = document.querySelector('.topnav');
    topnav.classList.toggle('responsive');
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const selectedOption = event.target.getAttribute('data-option');

            // Check if the link is for navigation (home, contact, siteplan)
            if (selectedOption === 'home' || selectedOption === 'album' || selectedOption === 'siteplan') {
                return; 
            }

            event.preventDefault();
            displayTempleCards(selectedOption);
            toggleActive(link);
        });
    });

    displayTempleCards('home');
});

function displayTempleCards(option) {
    const container = document.getElementById('temple-figures');
    container.innerHTML = '';

    let filteredTemples = temples;

    switch (option) {
        case '2020':
            filteredTemples = temples.filter(temple => temple.dedicated.includes('2020'));
            break;
        case '2021':
            filteredTemples = temples.filter(temple => temple.dedicated.includes('2021'));
            break;
        case '2022':
            filteredTemples = temples.filter(temple => temple.dedicated.includes('2022'));
            break;
        case '2023':
            filteredTemples = temples.filter(temple => temple.dedicated.includes('2023'));
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


const temples = [
    {
        templeName: "Hill AirForce Base Musemum",
        location: "Clearfield, Utah",
        dedicated: "2018, July, 7th",
        imageUrl: "images/F-15-eagle(2).jpg"
    },
    {
        templeName: "Hill AirForce Base Musemum",
        location: "Clearfield, Utah",
        dedicated: "2016, July, 7th",
        imageUrl: "images/f15-eagle2(1).jpg"
    },
    {
        templeName: "Shark Bate Ooo HA HA ",
        location: "Living Planet Aquarium",
        dedicated: "2018, June, 20",
        imageUrl: "images/shark.jpg"
    },
    {
        templeName: "4th of July and Sparklers",
        location: "Clearfield, Utah",
        dedicated: "2019, July, 4th",
        imageUrl: "images/4thofjuly.jpg"
    },
    {
        templeName: "2nd Child incoming!",
        location: "Spanish Fork, Utah",
        dedicated: "2020, Sep, 16th",
        imageUrl: "images/itsaboy2.jpg"
    },
    {
        templeName: "Disneyland Vacation (Rockets)",
        location: "Anehiem, California",
        dedicated: "2021, November, 16th",
        imageUrl: "images/rocketdisney.jpg"
    },
    {
        templeName: "Disneyland's Merriest Nights!",
        location: "Anehiem, California",
        dedicated: "2021, November, 16th",
        imageUrl: "images/christmasdisney2.jpg"
    },
    {
        templeName: "Merriest Night's party",
        location: "Anehiem, California",
        dedicated: "2021, November, 16th",
        imageUrl: "images/Disneyposterchristmas.jpg"
    },
    {
        templeName: "Got to see Princess Jasmine!",
        location: "Anehiem, California",
        dedicated: "2023, June 3rd",
        imageUrl: "images/jasmine.jpg"
    },
    {
        templeName: "Sophie hanging with Goofy!",
        location: "Anehiem, California",
        dedicated: "2023, June 4rth",
        imageUrl: "images/sophieGoofy.jpg",
    },
    {
        templeName: "Sophie hanging with Goofy!",
        location: "Anehiem, California",
        dedicated: "2023, June 4rth",
        imageUrl: "images/IMG_1935.JPG",
    },
    {
        templeName: "Friend's Wedding",
        location: "Pleasant Grove, Utah",
        dedicated: "2023 August 23rd",
        imageUrl: "images/family-wedding.jpg"
    }
];

