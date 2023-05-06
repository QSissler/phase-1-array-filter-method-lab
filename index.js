// Code your solution here
function findMatching(array, string){
    let matching = array.filter(element => element.toLowerCase() === string.toLowerCase());
    return matching;
}

function fuzzyMatch(array, string){
    let matching = array.filter(function (element){
        return element.charAt(0) === string.charAt(0)
    })
    return matching;
}

function matchName(array, string){
    let matching = array.filter(object => object.name === string)
    return matching;
}