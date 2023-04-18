console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem( item ){ // adds items into the basket
    if( isFull() ){ // doesn't add items to basket if at full capacity
    return false;
    } else {
        basket.push( item );
        return true;
    }
    
}

function listItems(){ // individually lists out the items in the basket
    for( let i = 0; i < basket.length; i++ ){
        console.log( basket[i] );
    }
}

function empty(){ // empties the basket
    basket = [];
}

function isFull(){ // checks if basket is full
    if( basket.length >= maxItems ){
        return true;
    } else {
        return false;
    }
}

function removeItem( item ){ // removes a specified item from the basket
    if (basket.indexOf( item ) > 0){
        let removed = basket.splice(basket.indexOf( item ), 1);
    return removed;
    } else {
        return 'null';
    }
}

addItem('grapes');
addItem('bananas');
addItem('pears');
addItem('oranges');
// addItem('lemons');
// addItem('avocados');

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log(listItems( basket ));

console.log(removeItem( 'pears' ));
console.log(removeItem( 'lemons' ));
console.log( `The basket is now ${basket}` );

empty(); // empty the basket
console.log( basket );
console.log( `The basket is now ${basket}` );
