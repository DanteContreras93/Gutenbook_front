function addItem(item){
    const itemHTML = '<div class = "col-xs-12 col-sm-12 col-md-9 col-lg-6 col-xl-4 pt-5" style="height:40rem;">\n' +
    '   <div class="card h-100 m-4 p-3">\n' +
    '       <img src="'+item.img +'" class="img-fluid card-img-top" alt="image" style="height: 65%;">\n' +
    '       <div class="row card-body"  style="align-items: center;">\n' +
    '           <h5 class="card-title text-center">'+item.name+'</h5>\n' +
    '           <p class="card-text text-center">'+item.description+'</p>\n' +
    '           <div class="row align-items-center justify-content-evenly">\n' +
    '               <div class="col-4 text-center">\n' +
    '                   <a href="#" title="Agregar a mi bolsa de compras" class="btn btn-primary"><i class="bi bi-basket"></i></a>\n' +
    '               </div>\n' +
    '               <div class="col-4 text-center">\n' +
    '               <p class="card-text fs-5">$ '+ item.price + '</p>\n' +
    '               </div>\n' +
    '           </div>\n' +
    '       </div>\n' +
    '   </div>\n' +
    '</div>\n' + '</br>' ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

let arreglolibros = [ {'name':'The Lord of the Rings', 'img':'https://m.media-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg', 'description':'1954 The Lord of the Rings','price':'300'}, {'name':'Lord of the Flies', 'img':'https://m.media-amazon.com/images/I/710kMF3SzEL.jpg', 'description':'1954 Lord of the Flies','price':'250'},{'name':'The Great Gatsby', 'img':'https://m.media-amazon.com/images/I/51AMwVC+4xL._SY344_BO1,204,203,200_.jpg', 'description':'1925 The Great Gatsby','price':'500'}, {'name':'Moby Dick', 'img':'https://m.media-amazon.com/images/I/91DhazpQXML.jpg', 'description':'1851 Moby Dick','price':'300'}, {'name':'Frankenstein', 'img':'https://m.media-amazon.com/images/I/71f1FoY7DqL.jpg', 'description':'1831 Frankenstein','price':'350'},{'name':'The Count of Monte Cristo', 'img':'https://m.media-amazon.com/images/I/51fIrJcGO0L.jpg', 'description':'1846 The Count of Monte Cristo','price':'150'}, {'name':'Dune', 'img':'https://m.media-amazon.com/images/I/81ym3QUd3KL.jpg', 'description':'1965 Dune','price':'150'},{'name':'Roadside Picnic', 'img':'https://m.media-amazon.com/images/I/51a5fMEvn2L._SY344_BO1,204,203,200_QL70_ML2_.jpg', 'description':'1972 Roadside Picnic','price':'150'},{'name':'The Stranger', 'img':'https://m.media-amazon.com/images/I/517eqjeVDzL._SX322_BO1,204,203,200_.jpg', 'description':'1942 The Stranger','price':'250'}];


try {
    var captura = JSON.parse(localStorage.getItem('datos'));


    for (let index = 0; index < captura.length; index++) {
    arreglolibros.push(captura[index]);

    }
} catch (error) {
    console.error(error);
}

    
    





    for (let index = 0; index < arreglolibros.length; index++) {
        addItem(arreglolibros[index])
    }
