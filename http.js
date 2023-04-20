import fetch from "node-fetch";

async function checkStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map(async url =>{
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}

function geradorDeArrayDeUrl(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validadorURL(arrayLinks){
    const links = geradorDeArrayDeUrl(arrayLinks)
    const statusLinks = await checkStatus(links)
    return statusLinks
}

export default validadorURL
