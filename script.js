const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    }
]



let i = -1

function Next(){
    i++
    if(i==4){
        i=-1
        Next(i)
    }
    document.getElementById("author").innerHTML = reviews[i].name
    document.getElementById("job").innerHTML = reviews[i].job
    document.getElementById("img").setAttribute("src", reviews[i].image);
    document.getElementById("text").innerHTML = reviews[i].text
}
function Previous(){
    i--
    if(i==4){
        i=-1
        Previous(i)
    }
    document.getElementById("author").innerHTML = reviews[i].name
    document.getElementById("job").innerHTML = reviews[i].job
    document.getElementById("img").setAttribute("src", reviews[i].image); document.getElementById("text").innerHTML = reviews[i].text
}