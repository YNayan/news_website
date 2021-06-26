//ApiKey:- 9613894a638a44c4a17d7b87d765bac1

//Initialize the news api parameters
const source = 'the-times-of-india';
const apiKey = '9613894a638a44c4a17d7b87d765bac1';
//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json['articles'];
        console.log(articles);
        let newsHtml = '';
        articles.forEach(function (element,index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b>BREANKING NEWS${index+1}</b>:  ${element['title']}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">${element['description']}.<a href="${element['url']}" target="_blank" >click here to read the full news</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    }
    else {

    }
}

xhr.send();
