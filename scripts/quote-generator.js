let btn=document.getElementById('btn'); 
let output=document.getElementById('output'); 

let quotes=[
    '“What mental health needs is more sunlight, more candor, and more unashamed conversation.” – Glenn Close',
    '“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.” – Fred Rogers', 
    '“Some of the most comforting words in the universe are ‘me too.’ That moment when you find out that your struggle is also someone else’s struggle, that you’re not alone, and that others have been down the same road.” – Unknown', 
    '“Don’t let your struggle become your identity.” – Unknown', 
    '“The only journey is the journey within.” – Rainer Maria Rilke', 
    '“One small crack does not mean that you are broken, it means that you were put to the test and you didn’t fall apart.” - Linda Poindexter', 
    'I cannot stand the words “Get over it”. All of us are under such pressure to put our problems in the past tense. Slow down. Don’t allow other to hurry your healing. It is a process, one that may take years, occasionally, even a lifetime – and that’s OK.” - Beau Taplin', 
    '“She is beautiful piece of broken pottery, put back together by her own hands. And a critical world judges her cracks while missing the beauty of how she made herself whole again.” - J.M. Storm', 
    '“You don’t have to be positive all the time. It’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn’t make you a negative person. It makes you human.” - Lori Deschene', 
    '“Nobody can save you but yourself, and you’re worth saving. It’s a war not easily won, but if anything is worth winning then this is it.” - Charles Bukowski', 
    '“Sometimes self care is exercise and eating right. Sometimes it’s spending time with loved ones or taking a nap. And sometimes it’s watching an entire season of TV in one weekend while you lounge around in your pajamas. Whatever soothes your soul.” -  Nanea Hoffman', 
    '“The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen.” - Elisabeth Kübler-Ross', 
    ' “Be confused, it’s where you begin to learn new things. Be broken, it’s where you begin to heal. Be frustrated, it’s where you start to make more authentic decisions. Be sad, because if we are brave enough we can hear our heart’s wisdom through it. Be whatever you are right now. No more hinding. You are worthy, always." - S.C. Lourie', 
    'Give yourself a break. Stop beating yourself up!. Everyone makes mistakes, has setbacks and failures. You don’t come with a book on how to get it right all the time. You will fail sometimes, not because you planned to, but simply because you’re human. Failure is a part of creating a great life.” - Les Brown', 
    '“The best thing you could do is master the chaos in you. You are not thrown into the fire, you are the fire.” -  Mama Indigo',  
]; 

btn.addEventListener('click', function()
{ 
    var randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML=randomQuote;
} )
