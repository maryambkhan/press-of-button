# cpnt262
## Maryam Khan
## Press of a Button

## Code Journal

- I have created a repo `press-of-button`
- Already added css, js and html files
- I have been watching videos to get more ideas and  understanding about vanila js and DOM
- Read some stuff from `MDN`
- Practiced some events like `dblclick` `blur` `focus`
- Its was great, found realy intresting  elements to work with
- I was working on mouseover and mouseout applied on text and then i decided to apply that on
  images 

  // mouse enter p
const mouseEnter = document.querySelector('.mouseenter p');


const mouseEnterHandler = function (event) {
  event.target.style.color = "gold";
  console.log("Mouse Enter p");
}

mouseEnter.addEventListener("mouseenter", mouseEnterHandler);


- It was intresting while i was working on that i found different ways to run or call a function
- Stated one i am not sure how this works?

   let setImage = function(image){

      imgTag.src = image;

       }

    imgTag.addEventListener("mouseover", function(){setImage(img2)});
    
    imgTag.addEventListener("mouseout", function(){setImage(img1)});


## Attributes
- [Telusko](https://www.youtube.com/watch?v=AiiXLmqhndU)

- [Traversy Media](https://www.youtube.com/watch?v=0ik6X4DJKCc)

- [Dav Ed](https://www.youtube.com/watch?v=wiozYyXQEVk)

- [Photo by Nishant Aneja from Pexels](https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)

- [Photo by Min An from Pexels](https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)

- [GH repo](https://github.com/maryambkhan/press-of-button)
- [GH pages](https://maryambkhan.github.io/press-of-button/)