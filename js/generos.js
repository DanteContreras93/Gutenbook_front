function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'The Lord of the Rings', 'img':'https://m.media-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg', 'description':'1954 The Lord of the Rings'});

addItem({'name':'Lord of the Flies', 'img':'https://m.media-amazon.com/images/I/710kMF3SzEL.jpg', 'description':'1954 Lord of the Flies'});

addItem({'name':'The Great Gatsby', 'img':'https://m.media-amazon.com/images/I/51AMwVC+4xL._SY344_BO1,204,203,200_.jpg', 'description':'1925 The Great Gatsby'});

addItem({'name':'Moby Dick', 'img':'https://m.media-amazon.com/images/I/91DhazpQXML.jpg', 'description':'1851 Moby Dick'});

addItem({'name':'Frankenstein', 'img':'https://m.media-amazon.com/images/I/71f1FoY7DqL.jpg', 'description':'1831 Frankenstein'});

addItem({'name':'The Count of Monte Cristo', 'img':'https://m.media-amazon.com/images/I/51fIrJcGO0L.jpg', 'description':'1846 The Count of Monte Cristo'});

addItem({'name':'Dune', 'img':'https://m.media-amazon.com/images/I/81ym3QUd3KL.jpg', 'description':'1965 Dune'});

addItem({'name':'Roadside Picnic', 'img':'https://m.media-amazon.com/images/I/51a5fMEvn2L._SY344_BO1,204,203,200_QL70_ML2_.jpg', 'description':'1972 Roadside Picnic'});

addItem({'name':'The Stranger', 'img':'https://m.media-amazon.com/images/I/517eqjeVDzL._SX322_BO1,204,203,200_.jpg', 'description':'1942 The Stranger'});

addItem({'name':'Solaris', 'img':'https://m.media-amazon.com/images/I/31d1DpgbLfL._SY344_BO1,204,203,200_QL70_ML2_.jpg', 'description':'1961 Solaris'});



    
    


