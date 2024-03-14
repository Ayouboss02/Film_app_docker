const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Movie = require('./movie')

const port=3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, Docker! hi hi');
});

app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.py4e.com/api/films');
    
    res.send(displayMovies(response))

    //res.status(200).json({ movies: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});


app.post('/addmovie', async (req, res) => {
  const title = req.body.title;
  const episode_id = req.body.episode_id;
  const producer = req.body.producer;

  const movie = new Movie({
    title: title,
    episode_id: episode_id,
    producer: producer,
  });

  try {
    await movie.save();
    res
      .status(201)
      .json({ message: 'movie saved!', movie: movie.toObject() });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

function displayMovies(data){
  htmlcontent=`<html>
  <head>
  <link href='https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' rel='stylesheet'>
  <style>
        .custom-button {
            background-color: #3498db;
            color: #ffffff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
  </head>
  <body>`
  data.data.results.forEach(movie => {
    htmlcontent+=`
    <div class="container mx-auto p-4">
              <div class="bg-gray-200 rounded-lg shadow-md p-6">
                  <h1 class="text-2xl font-bold mb-4">${movie["title"]}</h1>
                  <div class="main parent">
                      <div>
                          <p class="font-bold">Title:</p>
                          <p class="title">${movie["title"]}</p>
                      </div>
                      <div>
                          <p class="font-bold">Episode ID:</p>
                          <p class="episode_id">${movie["episode_id"]}</p>
                      </div>
                      <div>
                          <p class="font-bold">Director:</p>
                          <p class="director">${movie["director"]}</p>
                      </div>
                      <div>
                          <p class="font-bold">Producer:</p>
                          <p class="producer">${movie["producer"]}</p>
                      </div>
                      <div>
                          <p class="font-bold">Release Date:</p>
                          <p class="release_date">${movie["release_date"]}</p>
                      </div>
                      <div>
                          <p class="font-bold">Opening Crawl:</p>
                          <p>It is a period of civil war...</p>
                      </div> 
                      <div>
                      <input type="submit" value="Add to movie" class="custom-button"/>
                      </div> 
                      
                  </div>
                  
              </div>
    </div>`
  });
  htmlcontent+=`
  <script>
  document.body.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('custom-button')) {
      e.preventDefault();

      const parent = e.target.closest('.parent');
      if (parent) {
        const title = parent.querySelector('.title').textContent;
        const episode_id = parent.querySelector('.episode_id').textContent;
        const producer = parent.querySelector('.producer').textContent;
  
        fetch('/addmovie', {
          method: 'POST',
          headers: {
            'Content-episode_id': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            episode_id: episode_id,
            producer: producer,
          }),
        })
          .then(response => response.json())
          .then(data => {
            alert('movie added: ' + JSON.stringify(data));
            console.log('movie added:', data);
          })
          .catch(handleError => {
            alert('Error: ' + JSON.stringify(handleError));
            console.log('Error:', handleError);
          });
      }
    }
  });
  
  </script>
  </body>
  </html>
  `
  return htmlcontent
}




app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

mongoose.connect('mongodb://172.17.0.3:27017/movies')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });

