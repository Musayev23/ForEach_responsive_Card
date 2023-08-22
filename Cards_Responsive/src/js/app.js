const all = document.getElementById('all_cards');
const included = [
    {
        title:'Pick a template',
        description: 'Open the banner maker, choose a template and start Neman.',
        imgs:'https://images.unsplash.com/photo-1689542901884-4fe1715af46d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        title:'Pick a template',
        description: 'Open the banner maker, choose a template and start Neman.',
        imgs:'https://plus.unsplash.com/premium_photo-1690123622520-b117bb57e8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NnxGem8zenVPSE42d3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        title:'Pick a template',
        description: 'Open the banner maker, choose a template and start Neman.',
        imgs:'https://images.unsplash.com/photo-1686472450943-33a772c49923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        title:'Pick a template',
        description: 'Open the banner maker, choose a template and start Neman.',
        imgs:'https://images.unsplash.com/photo-1688841534418-b2e6ca99985a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzN3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    }
];
let txt = '';
included.forEach(function(item){
    txt += `
    <div class="card">
                    <div class="card_inner">
                        <div class="image">
                            <img src='${item.imgs}'>
                        </div>
                        <div class="content">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>
    `
})
all.innerHTML=txt