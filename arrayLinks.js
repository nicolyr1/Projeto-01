function geradorDeArrayDeUrl(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}
function validadorDeArrayURL(arrayLinks){
    return geradorDeArrayDeUrl(arrayLinks)
}
export default validadorDeArrayURL;
