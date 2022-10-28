const API = 'https://api.thecatapi.com/v1/images/search?limit=1';
const postPic = document.querySelector('.post_pic');
const heartIcon = document.querySelector('.heart');

const options = {
	method: 'GET',
	headers: {
		'x-api-key': 'live_kVdpGnXorD9e3msTcdlkPmjBXSbl9sUbUWZiZWyQpdbVgZ7dd3ExidXw30ElY3yS'
	}
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

const getData = async (urlApi) => {
    try {
        const cats = await fetchData(urlApi);
        cats.forEach(cat => {
            console.log(cat.url);
            postPic.src = cat.url;
        });

    } catch(error) {
        console.error(error);
    }
};

heartIcon.addEventListener('click', function() {
    heartIcon.classList.toggle('active');
    getData(API);
});

getData(API);