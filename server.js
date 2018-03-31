var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article One | Fazlur Rahman',
        heading: 'Article One',
        date: 'Mar 9, 2018',
        content: `<p>
                        This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page
                    </p>
                    <p>
                        This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page
                    </p>
                    <p>
                        This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page.This is the article content for my first web page
                    </p>`
        
    },
    'article-two' : {
                title: 'Article Two | Fazlur Rahman',
                heading: 'Article Two',
                date: 'Mar 11, 2018',
                content: `<p>
                                This is the article content for my Second web page(Article).
                            </p>`
    },
    'article-three' : {
                title: 'Article One | Fazlur Rahman',
            heading: 'Article Three',
            date: 'Mar 15, 2018',
            content: `<p>
                            This is the article content for my Third web page.Which is also my third Webpage Without using the Separate Html File.
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
            <meta name="viewpoint" content="width=device-width,initial scale=1"/> 
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
    </html>
    `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

 var counter = 0;
 app.get('/counter', function(req, res){
 counter = counter + 1;
 res.send(counter.toString());
 });

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
 });
 


/*app.get('/article-one',function(req,res){
 res.send(createTemplate(articleOne));
 // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
//    res.send('Article one is requested and will be served here');
});
app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
 
    
    //res.send('Article two is requested and will be served here');
});
app.get('/article-three',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    
    
    //res.send('Article three is requested and will be served here');
}); */

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


