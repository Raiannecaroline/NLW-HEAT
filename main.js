//Links das redes sociais e sua implementação no html
const LinksSocialMedia = {
  github: 'Raiannecaroline',
  linkedin: 'in/raiannecaroline',
  facebook: 'raianecarolinest',
  instagram: 'raiannecaroline_',
  twitter: 'Raiannecaroline'
}

//Função para mudar os links das redes socias para meus links
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

//Função para redirecionar os links e armazenar ele no código
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//Efeito de loop no selo da rocketseat
var looper;
var graus = 0;

function rotate(){
  document.querySelector("#rocketseat").style.transform = `rotate(${graus}deg)`
  graus++;
  looper = setTimeout(rotate, 20);
}

setTimeout(rotate, 60);