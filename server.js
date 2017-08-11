var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article-1 by Chetan Prajapati',
    heading: 'Article-1',
    date: 'August 8,2017',
    content:`<p>
               Hi I am Chetan R. Prajapati,NITKIAN(Batch of 2020).I developed and designed this small website. Being a newcomer,I am looking forward to develop and enhance my skills particularly in web designing, app development ,competitive coding and machine learning.
            </p>
            <p>
               If you like to see my projects my github username is <a href="https://github.com/crp987654321">@crp987654321</a>
            </p>
            <p>
                I am interested in cricket, dance, music. We were having a fabulous performance in nitk in first years.It's called Bharat Darshan. In it all students show culture of thier states. Here's a video of it.
                <video width="320" height="240" controls>
                 <source src="https://www.youtube.com/watch?v=8uQyzZq5s9w">
                </video>
            </p>`
},

'article-two': {
    title: 'Article-2 by Chetan Prajapati',
    heading: 'Article-2',
    date: 'August 9,2017',
    content:`
    <p>
               This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.
            </p>
            <p>
                This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.
            </p>
            <p>
                This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my first article.This is content for my article.
            </p>`
          },
          
'article-three': {
    title: 'Article-3 by Chetan Prajapati',
    heading: 'Article-3',
    date: 'August 10,2017',
    content:`
    <p>
               This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.
            </p>
            <p>
                This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.
            </p>
            <p>
                This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my article.This is content for my first article.This is content for my article.
            </p>`
}
    
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;

app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){// URL :/submit-name?name-xxxxx
    //Get name from request
    var name = req.query.name;
    names.push(name);
    //JSON
    
    res.send(JSON.stringify(names));
});


app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
