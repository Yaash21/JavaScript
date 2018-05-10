    var library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

    var library1 = library.sort(function(a,b){
    	const titlea=a.title.toUpperCase();
    	const titleb=b.title.toUpperCase();
    	let comaparison=0;
    	if (titlea > titleb){
    		comaparison=1;
    	}else{
    	comaparison=-1;
    }
    return comaparison;
    });
    console.log(library1);