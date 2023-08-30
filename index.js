const products = [
    ['apple', 10],
    ['banana', 8],
    ['mango', 20],
    ['grape', 18]
]

const SUMMER_COEF = 0.8;
const WINTER_CORF = 2

function summerPrice(value) {
    return value * SUMMER_COEF
}

function winterPrice(value) {
    return value * WINTER_CORF
}


function getPrice(arr, seasonFunc) {
    arr = JSON.parse(JSON.stringify(arr))
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let product = arr[i]
        let productPrice = product[1]

        if (typeof seasonFunc === 'function') {
            sum += seasonFunc(productPrice)
        } else {

            sum += productPrice
        }

    }
    return sum;
}

let productsPrices = getPrice(products)
console.log(productsPrices)

let productPriceSummer = getPrice(products, summerPrice)
console.log(productPriceSummer)
let productPriceWinter = getPrice(products, winterPrice)
console.log(productPriceWinter)